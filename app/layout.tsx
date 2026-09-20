import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { siteConfig } from "@/data/siteConfig";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jagan-portfolio.com"),
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: `${siteConfig.name} is an ${siteConfig.title} focused on Artificial Intelligence, Machine Learning, Generative AI, Data Science and intelligent applications.`,
  keywords: [
    "Jagan S",
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "Computer Vision",
    "Data Science",
    "NLP",
    "Python",
    "Tirupattur",
    "Tamil Nadu",
  ],
  authors: [{ name: siteConfig.name, url: "https://jagan-portfolio.com" }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jagan-portfolio.com",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.tagline,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: siteConfig.links.profileImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.tagline,
    images: [siteConfig.links.profileImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/jagan-profile.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark`}>
      <body className="bg-[#050507] text-[#f4f4f7] font-sans antialiased selection:bg-indigo-600 selection:text-white">
        <SmoothScroll>
          <Navbar />
          <main className="relative min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
