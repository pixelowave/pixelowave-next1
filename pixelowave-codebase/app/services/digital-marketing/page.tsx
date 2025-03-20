import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BarChart, Target, TrendingUp, Users, Mail, Share2 } from 'lucide-react';

export default function DigitalMarketingPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-24 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
                Digital Marketing Services
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Drive growth with our data-driven digital marketing strategies. We help businesses increase visibility, engage customers, and generate leads through targeted campaigns and analytics.
              </p>
              <div className="mt-8">
                <Button size="lg" className="h-12 px-8 text-base">
                  <Link href="/contact" className="flex items-center">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 opacity-30 blur-xl"></div>
              <div className="relative rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-xl">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <Target className="h-6 w-6 text-green-600" />
                    <h3 className="font-semibold">PPC Advertising</h3>
                    <p className="text-sm text-muted-foreground">Targeted ads on Google, Facebook, and more</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <h3 className="font-semibold">Email Marketing</h3>
                    <p className="text-sm text-muted-foreground">Personalized campaigns that convert</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <Share2 className="h-6 w-6 text-purple-600" />
                    <h3 className="font-semibold">Social Media</h3>
                    <p className="text-sm text-muted-foreground">Engaging content and community building</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <BarChart className="h-6 w-6 text-red-600" />
                    <h3 className="font-semibold">Analytics</h3>
                    <p className="text-sm text-muted-foreground">Data-driven insights and reporting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/95">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Marketing Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive digital marketing solutions to grow your business
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent dark:from-green-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                  <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Search Engine Marketing</h3>
                <p className="mt-4 text-muted-foreground">
                  Drive qualified traffic to your website through Google Ads and Bing Ads campaigns with optimized targeting and bidding strategies.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Share2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Social Media Marketing</h3>
                <p className="mt-4 text-muted-foreground">
                  Build brand awareness and engage with your audience through strategic content and paid campaigns on Facebook, Instagram, LinkedIn, and more.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Email Marketing</h3>
                <p className="mt-4 text-muted-foreground">
                  Nurture leads and drive conversions with personalized email campaigns, automated workflows, and segmentation strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Marketing Approach</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We follow a proven methodology to deliver results-driven marketing campaigns
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -ml-[0.5px] h-full w-[1px] bg-border md:hidden"></div>
              <div className="absolute top-1/2 left-0 -mt-[0.5px] h-[1px] w-full bg-border hidden md:block"></div>
              <div className="relative flex flex-col items-center text-center p-6">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-lg font-semibold">1</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">Research</h3>
                <p className="mt-2 text-muted-foreground">
                  Analyze your market, competitors, and target audience
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-1/2 -ml-[0.5px] h-full w-[1px] bg-border md:hidden"></div>
              <div className="relative flex flex-col items-center text-center p-6">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-lg font-semibold">2</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">Strategy</h3>
                <p className="mt-2 text-muted-foreground">
                  Develop a customized marketing plan aligned with your goals
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-1/2 -ml-[0.5px] h-full w-[1px] bg-border md:hidden"></div>
              <div className="relative flex flex-col items-center text-center p-6">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-lg font-semibold">3</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">Execution</h3>
                <p className="mt-2 text-muted-foreground">
                  Implement campaigns across relevant channels
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative flex flex-col items-center text-center p-6">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-lg font-semibold">4</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">Optimization</h3>
                <p className="mt-2 text-muted-foreground">
                  Analyze results and continuously improve performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/95">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 opacity-20 blur-xl"></div>
              <div className="relative rounded-2xl bg-white dark:bg-gray-950 overflow-hidden shadow-xl">
                <div className="p-8">
                  <h3 className="text-2xl font-bold">Marketing Performance</h3>
                  <p className="mt-2 text-muted-foreground">Sample results from our digital marketing campaigns</p>
                  <div className="mt-8 space-y-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Search Traffic</span>
                        <span className="text-sm font-medium text-green-600">+156%</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[75%] rounded-full bg-green-600"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Conversion Rate</span>
                        <span className="text-sm font-medium text-blue-600">+82%</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[60%] rounded-full bg-blue-600"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Social Engagement</span>
                        <span className="text-sm font-medium text-purple-600">+210%</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[85%] rounded-full bg-purple-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Measurable Results</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We focus on delivering tangible outcomes that impact your bottom line. Our data-driven approach ensures that every marketing dollar is optimized for maximum return on investment.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full bg-green-100 p-1 dark:bg-green-900">
                    <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Increased website traffic and qualified leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full bg-green-100 p-1 dark:bg-green-900">
                    <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Higher conversion rates and customer acquisition</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full bg-green-100 p-1 dark:bg-green-900">
                    <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Improved brand awareness and market positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full bg-green-100 p-1 dark:bg-green-900">
                    <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Better ROI from marketing investments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Grow Your Business?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how our digital marketing services can help you reach your goals
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base">
                <Link href="/contact" className="flex items-center">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}