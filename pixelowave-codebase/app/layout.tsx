import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { SessionWrapper } from "@/components/SessionWrapper"; // ✅ Import the client provider
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

// ✅ SEO Metadata (Updated for better performance & social sharing)
export function generateMetadata(): Metadata {
  return {
    title: "Pixelowave Solutions - Software Development & Digital Marketing",
    description:
      "Transform your digital presence with our cutting-edge software development and strategic digital marketing solutions. Expert team, proven results.",
    keywords: [
      "software development",
      "digital marketing",
      "web development",
      "SEO",
      "mobile apps",
      "digital transformation",
    ],
    openGraph: {
      title: "Pixelowave Solutions",
      description:
        "Transform your digital presence with our cutting-edge software development and strategic digital marketing solutions. Expert team, proven results.",
      url: "https://pixelowave.com",
      type: "website",
      images: [
        {
          url: "https://pixelowave.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Pixelowave Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Pixelowave Solutions",
      description:
        "Transform your digital presence with our cutting-edge software development and strategic digital marketing solutions. Expert team, proven results.",
      images: ["https://pixelowave.com/twitter-image.jpg"],
    },
  };
}

// ✅ Root Layout Component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SessionWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </SessionWrapper>

        {/* ✅ Move analytics & performance tools to the end for faster rendering */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
