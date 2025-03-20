import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Search, Globe, FileText, BarChart2, TrendingUp, ExternalLink, BarChart3, Code, MapIcon } from 'lucide-react';

export default function SEOPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-24 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                SEO Services
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Improve your search rankings and drive organic traffic to your website. Our comprehensive SEO services help businesses increase visibility, attract qualified leads, and achieve sustainable growth.
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
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-xl"></div>
              <div className="relative rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-xl">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <Search className="h-6 w-6 text-blue-600" />
                    <h3 className="font-semibold">On-Page SEO</h3>
                    <p className="text-sm text-muted-foreground">Optimize content, meta tags, and site structure</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <ExternalLink className="h-6 w-6 text-purple-600" />
                    <h3 className="font-semibold">Off-Page SEO</h3>
                    <p className="text-sm text-muted-foreground">Build quality backlinks and online reputation</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <FileText className="h-6 w-6 text-green-600" />
                    <h3 className="font-semibold">Content Strategy</h3>
                    <p className="text-sm text-muted-foreground">Create SEO-optimized, engaging content</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <BarChart2 className="h-6 w-6 text-red-600" />
                    <h3 className="font-semibold">Technical SEO</h3>
                    <p className="text-sm text-muted-foreground">Improve site speed, structure, and indexing</p>
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
      <h2 className="text-3xl font-bold sm:text-4xl">Our SEO Approach</h2>
      <p className="mt-4 text-lg text-muted-foreground">
        We follow a comprehensive methodology to improve your search engine rankings
      </p>
    </div>
    <div className="mt-16 grid gap-8 md:grid-cols-4">
      <div className="relative flex flex-col items-center text-center p-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
          <Search className="w-8 h-8 text-blue-600 dark:text-blue-300" />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Audit</h3>
        <p className="mt-2 text-muted-foreground">
          Comprehensive analysis of your website and competitors
        </p>
      </div>
      <div className="relative flex flex-col items-center text-center p-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
          <MapIcon className="w-8 h-8 text-green-600 dark:text-green-300" />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Strategy</h3>
        <p className="mt-2 text-muted-foreground">
          Develop a customized SEO plan based on findings
        </p>
      </div>
      <div className="relative flex flex-col items-center text-center p-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900">
          <Code className="w-8 h-8 text-yellow-600 dark:text-yellow-300" />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Implementation</h3>
        <p className="mt-2 text-muted-foreground">
          Execute on-page, off-page, and technical optimizations
        </p>
      </div>
      <div className="relative flex flex-col items-center text-center p-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900">
          <BarChart3 className="w-8 h-8 text-red-600 dark:text-red-300" />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Monitoring</h3>
        <p className="mt-2 text-muted-foreground">
          Track performance and continuously refine strategy
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our SEO Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive solutions to improve your search engine visibility
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">On-Page SEO</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>Keyword research and optimization</li>
                  <li>Content optimization</li>
                  <li>Meta tags and descriptions</li>
                  <li>URL structure optimization</li>
                  <li>Internal linking strategy</li>
                </ul>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <ExternalLink className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Off-Page SEO</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>Link building campaigns</li>
                  <li>Brand mentions and citations</li>
                  <li>Social signals optimization</li>
                  <li>Online reputation management</li>
                  <li>Local SEO and Google Business Profile</li>
                </ul>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent dark:from-green-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                  <BarChart2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Technical SEO</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>Site speed optimization</li>
                  <li>Mobile-friendly improvements</li>
                  <li>Schema markup implementation</li>
                  <li>XML sitemap optimization</li>
                  <li>Crawlability and indexing fixes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/95">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl"></div>
              <div className="relative rounded-2xl bg-white dark:bg-gray-950 overflow-hidden shadow-xl">
                <div className="p-8">
                  <h3 className="text-2xl font-bold">SEO Results</h3>
                  <p className="mt-2 text-muted-foreground">Sample outcomes from our SEO campaigns</p>
                  <div className="mt-8 space-y-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Organic Traffic</span>
                        <span className="text-sm font-medium text-blue-600">+187%</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[80%] rounded-full bg-blue-600"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Keyword Rankings</span>
                        <span className="text-sm font-medium text-purple-600">+94%</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[65%] rounded-full bg-purple-600"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Conversion Rate</span>
                        <span className="text-sm font-medium text-green-600">+52%</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[50%] rounded-full bg-green-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Measurable SEO Results</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our SEO strategies are designed to deliver tangible, long-term results that grow your business. We focus on metrics that matter and provide transparent reporting on your campaign's performance.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 p-1 dark:bg-blue-900">
                    <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Higher rankings for targeted keywords</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 p-1 dark:bg-blue-900">
                    <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Increased organic traffic and visibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 p-1 dark:bg-blue-900">
                    <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Better quality leads and conversions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 p-1 dark:bg-blue-900">
                    <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Sustainable growth in organic search presence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Improve Your Search Rankings?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how our SEO services can help you attract more organic traffic
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