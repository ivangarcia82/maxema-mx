// Bulk downloader that preserves source path structure.
// Reads docs/research/assets-inventory.json and downloads every URL
// into public/<pathname-from-URL>.
//
// Usage: node scripts/download-all-assets.mjs

import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __root = resolve(fileURLToPath(import.meta.url), "../..");
const inv = JSON.parse(
  await readFile(resolve(__root, "docs/research/assets-inventory.json"), "utf8"),
);

const urls = inv.all_image_urls;
const videoUrls = inv.all_video_urls || [];
const all = [...urls, ...videoUrls];

const CONCURRENCY = 12;
const PUBLIC = resolve(__root, "public");

let downloaded = 0;
let skipped = 0;
let failed = 0;
const failedUrls = [];

function localPathFor(url) {
  // Map the URL pathname directly to public/
  const u = new URL(url);
  const pathname = u.pathname.replace(/^\/+/, "");
  return resolve(PUBLIC, pathname);
}

async function fetchOne(url) {
  const dst = localPathFor(url);
  try {
    if (existsSync(dst)) {
      const s = await stat(dst);
      if (s.size > 0) {
        skipped++;
        return;
      }
    }
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (clone-website asset downloader)" },
      redirect: "follow",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dst), { recursive: true });
    await writeFile(dst, buf);
    downloaded++;
    if (downloaded % 50 === 0) {
      console.log(
        `  progress: ${downloaded} downloaded / ${skipped} skipped / ${failed} failed`,
      );
    }
  } catch (err) {
    failed++;
    failedUrls.push({ url, err: String(err) });
  }
}

async function runBatched(items, n) {
  const queue = [...items];
  const workers = Array.from({ length: n }, async () => {
    while (queue.length) {
      const url = queue.shift();
      if (url) await fetchOne(url);
    }
  });
  await Promise.all(workers);
}

console.log(`Starting download of ${all.length} assets (concurrency ${CONCURRENCY})...`);
const t0 = Date.now();
await runBatched(all, CONCURRENCY);
const dt = ((Date.now() - t0) / 1000).toFixed(1);
console.log(
  `\nDone in ${dt}s — ${downloaded} downloaded, ${skipped} skipped, ${failed} failed`,
);
if (failedUrls.length) {
  await writeFile(
    resolve(__root, "docs/research/assets-failed.json"),
    JSON.stringify(failedUrls, null, 2),
  );
  console.log(`Failed URLs written to docs/research/assets-failed.json`);
}
