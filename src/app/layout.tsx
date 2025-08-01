import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const fontFigtree = Figtree({
  weight: ['300','400','600','800'],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Fametonic: Your Fast Track to Going Viral",
  description: "Fametonic is a platform designed to help creators grow and monetize their presence on TikTok, YouTube, and other social media channels. They offer guided training paths, tools, and personalized advice to help users go viral and build a strong brand presence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontFigtree.className}`}>
      <body
        className={`${fontFigtree.className} bg-[#010101] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
