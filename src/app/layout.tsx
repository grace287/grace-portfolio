import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grace Lucia | Full-stack Developer Portfolio",
  description: "Grace Lucia의 포트폴리오. Next.js, Flutter, AI 기술을 활용한 웹과 모바일 애플리케이션 개발자입니다.",
  keywords: ["Grace Lucia", "Full-stack Developer", "Next.js", "Flutter", "Portfolio", "Web Developer", "Mobile App Developer"],
  authors: [{ name: "Grace Lucia" }],
  openGraph: {
    title: "Grace Lucia | Full-stack Developer Portfolio",
    description: "Grace Lucia의 포트폴리오. 혁신적인 웹과 모바일 애플리케이션 개발자",
    url: "https://grace287.github.io/grace-portfolio",
    siteName: "Grace Lucia Portfolio",
    locale: "ko_KR",
    type: "website",
  },
};

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
