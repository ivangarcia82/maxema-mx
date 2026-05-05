import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function PageShell({
  children,
  topPadding = true,
}: {
  children: ReactNode;
  topPadding?: boolean;
}) {
  return (
    <>
      <Header />
      <main className={topPadding ? "pt-10" : undefined}>{children}</main>
      <Footer />
    </>
  );
}
