"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { ArrowRight, TrendingUp, Rocket, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const pathname = usePathname();
  const currentUrl = `https://pixelowave.com${pathname}`;

  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pixelowave",
    "url": "https://pixelowave.com",
    "logo": "https://pixelowave.com/logo.png",
    "description": "Pixelowave is a top-tier software development and digital marketing company, driving innovation and business growth.",
    "sameAs": [
      "https://www.linkedin.com/company/pixelowave",
      "https://twitter.com/pixelowave",
      "https://www.facebook.com/pixelowave"
    ],
    "founder": {
      "@type": "Person",
      "name": "Shaharyar",
      "jobTitle": "Founder & CEO"
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>About Pixelowave - Leading Software & Digital Marketing Company</title>
        <meta
          name="description"
          content="Discover Pixelowave's journey in software development and digital marketing. Learn about our mission, values, and expert team."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph for Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Pixelowave - Leading Software & Digital Marketing Company" />
        <meta
          property="og:description"
          content="Discover Pixelowave's journey in software development and digital marketing. Learn about our mission, values, and expert team."
        />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://pixelowave.com/og-image.jpg" />
        <meta property="og:site_name" content="Pixelowave" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Pixelowave - Leading Software & Digital Marketing Company" />
        <meta
          name="twitter:description"
          content="Discover Pixelowave's journey in software development and digital marketing. Learn about our mission, values, and expert team."
        />
        <meta name="twitter:image" content="https://pixelowave.com/og-image.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-24 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                About Pixelowave
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We're a team of passionate digital experts dedicated to helping businesses thrive in the digital
                landscape. With our combined expertise in software development and digital marketing, we deliver
                comprehensive solutions that drive growth and success.
              </p>
              <div className="mt-8">
                <Button size="lg" className="h-12 px-8 text-base">
                  <Link href="/contact" className="flex items-center">
                    Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Our team collaborating"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/95">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Story</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Driving digital transformation with passion and expertise
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Scaling Up",
                description:
                  "Pixelowave quickly established itself as a trusted name in digital innovation, expanding our expertise and client base.",
                icon: <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              },
              {
                title: "Industry Leadership",
                description:
                  "Our team of specialists delivers cutting-edge solutions that help businesses thrive in a competitive digital landscape.",
                icon: <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              },
              {
                title: "Shaping the Future",
                description:
                  "With a strong foundation and forward-thinking mindset, Pixelowave continues to innovate and redefine digital excellence.",
                icon: <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              }
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-6 group transition-transform transform hover:scale-105"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The minds driving innovation at Pixelowave
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:gap-16">
            {/* CEO */}
            <div className="flex flex-col items-center text-center">
              <Image
                src=""
                alt="Shaharyar - CEO"
                width={200}
                height={200}
                className="rounded-full shadow-lg"
              />
              <h3 className="mt-4 text-2xl font-semibold">Ahmad</h3>
              <p className="text-blue-600 dark:text-blue-400">Founder & CEO</p>
              <p className="mt-2 text-muted-foreground">
                A visionary leader driving Pixelowave’s success with cutting-edge tech and strategic innovation.
              </p>
            </div>
            {/* CTO */}
            <div className="flex flex-col items-center text-center">
              <Image
                src=""
                alt="Faizan Siddiqui - CTO"
                width={200}
                height={200}
                className="rounded-full shadow-lg"
              />
              <h3 className="mt-4 text-2xl font-semibold">Siddiqui</h3>
              <p className="text-blue-600 dark:text-blue-400">Chief Technology Officer (CTO)</p>
              <p className="mt-2 text-muted-foreground">
                Leading technology and innovation, ensuring high-performance solutions for Pixelowave’s clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
