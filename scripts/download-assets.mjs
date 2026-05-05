import { writeFile, mkdir } from "fs/promises";
import { dirname, join } from "path";
import { existsSync } from "fs";

const BASE = "public";

const assets = [
  // Logo
  "http://www.maxema.com/assets/images/logo.gif",
  // Social icons
  "http://www.maxema.com/assets/muvobit/landing/images/future/linkedin-logo.svg",
  "http://www.maxema.com/assets/muvobit/landing/images/future/instagram-logo.svg",
  "http://www.maxema.com/assets/muvobit/landing/images/future/youtube-logo.svg",
  // PIR recycled badge
  "http://www.maxema.com/assets/assets-2026/pir.svg",
  // Hero video
  "http://www.maxema.com/assets/images/home-zed.mp4",
  // Product slider images
  "http://www.maxema.com/assets/fightbean/assets/content/homepage/slider-kind.png",
  "http://www.maxema.com/assets/fightbean/assets/content/homepage/slider-flowpure.png",
  "http://www.maxema.com/assets/fightbean/assets/content/homepage/slider-PIXELmatt.png",
  "http://www.maxema.com/assets/fightbean/assets/content/homepage/slider-Taggreen.png",
  "http://www.maxema.com/assets/fightbean/assets/content/homepage/slider-Dotantibacterial.png",
  "http://www.maxema.com/assets/fightbean/assets/content/homepage/slider-moodmetal.png",
  "http://www.maxema.com/assets/fightbean/assets/content/homepage/slider-iconpurepng.png",
  // ClimatePartner section
  "http://www.maxema.com/assets/fightbean/assets/content/homepage/undesign_maxema_video_mcl_00_new.jpg",
  "http://www.maxema.com/assets/muvobit/landing/images/climatepartner-eng.svg",
  "http://www.maxema.com/assets/muvobit/landing/images/video-climatepartner.mp4",
  // Focus blocks
  "http://www.maxema.com/assets/fightbean/assets/content/homepage/focus-1.jpg",
  "http://www.maxema.com/assets/fightbean/assets/content/homepage/focus-2.jpg",
  "http://www.maxema.com/assets/muvobit/landing/images/cta/focus-recycled-pens.jpg",
  // Italian heart icon
  "http://www.maxema.com/assets/fightbean/assets/content/ico_maxema_p.png",
  // Mosaic images
  "http://www.maxema.com/assets/fightbean/assets/content/homepage/mosaico-1.jpg",
  "http://www.maxema.com/assets/fightbean/assets/content/homepage/mosaico-special.png",
  "http://www.maxema.com/assets/fightbean/assets/content/homepage/mosaico-2.jpg",
  "http://www.maxema.com/assets/fightbean/assets/content/homepage/mosaico-3.jpg",
  // UI assets
  "http://www.maxema.com/assets/images/icon_5.png",
  "http://www.maxema.com/assets/images/flags.png",
  "http://www.maxema.com/assets/images/home-box-kind.png",
  "http://www.maxema.com/assets/fightbean/assets/content/personalizzazione/slider-shadow.png",
  // Pen product thumbnails
  "http://www.maxema.com/media/production/pens/40x00_maxema-KINDMATTRP01.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-35921.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-207329.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-603236.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-797142.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-899440.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-147418.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-948235.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-151447.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-234846.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-297716.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-446924.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-572722.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-797263.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-312947.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-50384.jpg",
  "http://www.maxema.com/media/production/pens/40x00_maxema-440540.jpg",
];

async function download(url, retries = 2) {
  const urlObj = new URL(url);
  const localPath = join(BASE, "images", urlObj.pathname.split("/").pop());

  if (existsSync(localPath)) {
    console.log(`SKIP ${localPath}`);
    return;
  }

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await mkdir(dirname(localPath), { recursive: true });
      await writeFile(localPath, buf);
      console.log(`OK   ${localPath} (${buf.length} bytes)`);
      return;
    } catch (e) {
      if (attempt === retries) {
        console.error(`FAIL ${url}: ${e.message}`);
      }
    }
  }
}

// Download in batches of 4
const batch = 4;
for (let i = 0; i < assets.length; i += batch) {
  await Promise.all(assets.slice(i, i + batch).map(download));
}

console.log("\nDone!");
