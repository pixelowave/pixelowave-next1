import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { SessionWrapper } from '@/components/SessionWrapper'; // ✅ Import the client provider
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pixelowave Solutions - Software Development & Digital Marketing',
  description:
    'Transform your digital presence with our cutting-edge software development and strategic digital marketing solutions. Expert team, proven results.',
  keywords:
    'software development, digital marketing, web development, SEO, mobile apps, digital transformation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <SpeedInsights />

        <SessionWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
