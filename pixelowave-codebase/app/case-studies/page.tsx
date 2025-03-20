import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-24 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Success Stories
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Explore how we've helped businesses across various industries achieve their digital goals through innovative solutions and strategic approaches.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 md:gap-16">
            <div className="group rounded-2xl bg-white dark:bg-gray-950 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2">
                <div className="order-2 md:order-1 p-8 md:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
                    E-commerce
                  </div>
                  <h2 className="mt-4 text-2xl font-bold md:text-3xl">FashionForward</h2>
                  <p className="mt-4 text-muted-foreground">
                    We helped this fashion retailer increase online sales by 215% through a complete website redesign, mobile optimization, and targeted digital marketing campaigns.
                  </p>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>215% increase in online sales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>68% improvement in mobile conversion rate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>42% reduction in cart abandonment</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Button variant="outline" size="sm">
                      <Link href="/case-studies/fashion-forward" className="flex items-center">
                        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="order-1 md:order-2 aspect-video md:aspect-auto overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" 
                    alt="FashionForward case study" 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="group rounded-2xl bg-white dark:bg-gray-950 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" 
                    alt="TechInnovate case study" 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                    SaaS
                  </div>
                  <h2 className="mt-4 text-2xl font-bold md:text-3xl">TechInnovate</h2>
                  <p className="mt-4 text-muted-foreground">
                    We developed a custom SaaS platform that streamlined operations and enabled this tech startup to scale rapidly, resulting in a successful Series B funding round.
                  </p>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>300% increase in user onboarding</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>85% reduction in operational costs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Secured $12M in Series B funding</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Button variant="outline" size="sm">
                      <Link href="/case-studies/tech-innovate" className="flex items-center">
                        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl bg-white dark:bg-gray-950 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2">
                <div className="order-2 md:order-1 p-8 md:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm text-green-600 dark:text-green-400">
                    Healthcare
                  </div>
                  <h2 className="mt-4 text-2xl font-bold md:text-3xl">MediConnect</h2>
                  <p className="mt-4 text-muted-foreground">
                    We created a mobile app that revolutionized patient-doctor communication for this healthcare provider, improving patient satisfaction and operational efficiency.
                  </p>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>92% patient satisfaction rating</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>40% reduction in missed appointments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>25% increase in operational efficiency</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Button variant="outline" size="sm">
                      <Link href="/case-studies/medi-connect" className="flex items-center">
                        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="order-1 md:order-2 aspect-video md:aspect-auto overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
                    alt="MediConnect case study" 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/95">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Be Our Next Success Story?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your digital goals and transform your business
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base">
                <Link href="/contact" className="flex items-center">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}