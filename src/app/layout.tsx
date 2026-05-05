import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Personalized and promotional pens designed in italy - Maxema - Promotional writing instruments and business gadgets, custom printed pens.",
  description:
    "Promotional writing instruments and business gadgets, custom printed pens designed in Italy by Maxema.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
