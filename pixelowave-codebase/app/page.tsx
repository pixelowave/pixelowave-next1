import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, LineChart, Rocket, Users, Zap } from "lucide-react";
import WhatWeOffer from "@/components/WhatWeOffer";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-20 text-center">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Transform Your Digital Presence with Innovation
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            We combine cutting-edge software development with strategic digital
            marketing to help businesses thrive in the digital age.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Button size="lg" className="h-12 px-8 text-base">
              <Link href="/contact" className="flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/95">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to drive your business forward
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  Software Development
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Custom software solutions tailored to your business needs,
                  built with modern technologies.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <Rocket className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  Digital Marketing
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Data-driven marketing strategies to boost your online presence
                  and drive growth.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent dark:from-green-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                  <LineChart className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">SEO Services</h3>
                <p className="mt-4 text-muted-foreground">
                  Improve your search rankings and attract more organic traffic
                  to your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16 hidden sm:block">
        <WhatWeOffer />
      </section>
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/95">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Us</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We deliver exceptional results through innovation and expertise
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Fast Delivery</h3>
              <p className="mt-2 text-muted-foreground">
                Quick turnaround times without compromising on quality
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Expert Team</h3>
              <p className="mt-2 text-muted-foreground">
                Skilled professionals with years of industry experience
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="rounded-full bg-green-100 dark:bg-green-900 p-3">
                <LineChart className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Proven Results</h3>
              <p className="mt-2 text-muted-foreground">
                Track record of delivering successful projects
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Client Success Stories
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from our satisfied clients about their experience working
              with us
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100"
                    alt="Sarah Johnson"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">
                      CEO, TechStart
                    </p>
                  </div>
                </div>
                <blockquote className="mt-6 text-muted-foreground">
                  "Pixelowave transformed our online presence completely. Their
                  team's expertise in both development and marketing helped us
                  achieve our business goals faster than expected."
                </blockquote>
              </div>
            </div>
            <div className="relative rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 bg-gradient-to-br from-purple-600 to-blue-600 opacity-20 blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100"
                    alt="David Chen"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">David Chen</h3>
                    <p className="text-sm text-muted-foreground">
                      CTO, InnovateCo
                    </p>
                  </div>
                </div>
                <blockquote className="mt-6 text-muted-foreground">
                  "The attention to detail and technical expertise of the
                  Pixelowave team is outstanding. They delivered a complex
                  project on time and within budget."
                </blockquote>
              </div>
            </div>
            <div className="relative rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100"
                    alt="Emily Martinez"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">Emily Martinez</h3>
                    <p className="text-sm text-muted-foreground">
                      Marketing Director, GrowthLabs
                    </p>
                  </div>
                </div>
                <blockquote className="mt-6 text-muted-foreground">
                  "Our digital marketing results improved dramatically after
                  working with Pixelowave. Their strategic approach and
                  data-driven decisions made all the difference."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
