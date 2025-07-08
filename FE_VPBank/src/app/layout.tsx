import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-awesome-site.com'), 
  title: "GigaScore - AI Credit Scoring Platform",
  description: "A submission for the VPBank Technology Hackathon 2025.",
  openGraph: {
    title: "GigaScore - AI Credit Scoring Platform",
    description: "Fairer credit scoring for the new economy.",
    images: '/logo.jpeg', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} font-sans antialiased h-full 
                   bg-[url('/background.jpeg')] bg-cover bg-center bg-fixed`}
      >
        <div className="absolute inset-0 bg-black/50 z-[-1]"></div>

        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}