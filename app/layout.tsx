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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001"
  ),
  title: "실비·암·운전자보험까지 한 번에 상담받는 개인 보험 상담",
  description:
    "실비, 암, 뇌심장, 화재, 배상, 수술, 장기요양, 치매, 종신, 운전자, 어린이, 치아보험까지 내 상황에 맞게 편하게 상담받아보세요.",
  keywords:
    "개인 보험 상담, 보험 문의, 실비보험 상담, 암보험 상담, 뇌심장보험 상담, 화재보험 상담, 종신보험 상담, 운전자보험 상담, 어린이보험 상담, 치아보험 상담, 장기요양보험 상담, 치매보험 상담",
  openGraph: {
    title: "실비·암·운전자보험까지 한 번에 상담받는 개인 보험 상담",
    description:
      "어떤 보험이 필요한지 헷갈릴 때, 한 곳에서 편하게 상담받을 수 있습니다.",
    type: "website",
    images: [
      {
        url: "/profile_image.jpeg",
        width: 800,
        height: 800,
        alt: "개인 보험 전문 상담사 프로필",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
