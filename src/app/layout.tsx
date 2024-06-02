import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarah & George | December 13 & 14",
  description:
    "Sarah & George are getting married on December 13 & 14 in Mérida Mexico. You should be there.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full ${inter.className}`}>{children}</body>
    </html>
  );
}
