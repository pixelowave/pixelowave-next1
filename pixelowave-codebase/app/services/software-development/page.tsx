import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Code, Server, Database, Globe, Shield, Cpu, Search, Layout, Rocket } from 'lucide-react';

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-24 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                Custom Software Development
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We build tailored software solutions that solve your unique business challenges and drive growth. Our expert team delivers scalable, secure, and user-friendly applications using cutting-edge technologies.
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
                    <Code className="h-6 w-6 text-blue-600" />
                    <h3 className="font-semibold">Web Applications</h3>
                    <p className="text-sm text-muted-foreground">Responsive, scalable web apps with modern frameworks</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <Server className="h-6 w-6 text-purple-600" />
                    <h3 className="font-semibold">Backend Systems</h3>
                    <p className="text-sm text-muted-foreground">Robust APIs and server-side architecture</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <Database className="h-6 w-6 text-green-600" />
                    <h3 className="font-semibold">Database Design</h3>
                    <p className="text-sm text-muted-foreground">Optimized data structures for performance</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <Shield className="h-6 w-6 text-red-600" />
                    <h3 className="font-semibold">Security</h3>
                    <p className="text-sm text-muted-foreground">Enterprise-grade protection for your data</p>
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
      <h2 className="text-3xl font-bold sm:text-4xl">Our Development Process</h2>
      <p className="mt-4 text-lg text-muted-foreground">
        We follow a proven methodology to deliver high-quality software solutions
      </p>
    </div>
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="relative flex flex-col items-center text-center p-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
          <Search className="w-8 h-8 text-blue-600 dark:text-blue-300" />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Discovery</h3>
        <p className="mt-2 text-muted-foreground">
          We analyze your requirements and define project scope
        </p>
      </div>
      <div className="relative flex flex-col items-center text-center p-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
          <Layout className="w-8 h-8 text-green-600 dark:text-green-300" />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Design</h3>
        <p className="mt-2 text-muted-foreground">
          We create architecture and user experience blueprints
        </p>
      </div>
      <div className="relative flex flex-col items-center text-center p-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900">
          <Code className="w-8 h-8 text-yellow-600 dark:text-yellow-300" />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Development</h3>
        <p className="mt-2 text-muted-foreground">
          We build your solution with agile methodology
        </p>
      </div>
      <div className="relative flex flex-col items-center text-center p-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900">
          <Rocket className="w-8 h-8 text-red-600 dark:text-red-300" />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Delivery</h3>
        <p className="mt-2 text-muted-foreground">
          We deploy, test, and provide ongoing support
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Technologies We Use</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We leverage the latest technologies to build modern, scalable solutions
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Frontend</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>React & Next.js</li>
                  <li>Vue & Nuxt</li>
                  <li>Angular</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <Server className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Backend</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>Node.js & Express</li>
                  <li>Python & Django/Flask</li>
                  <li>Java & Spring Boot</li>
                  <li>PHP & Laravel</li>
                  <li>.NET Core</li>
                </ul>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent dark:from-green-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                  <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Database & Cloud</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>PostgreSQL & MySQL</li>
                  <li>MongoDB & Firebase</li>
                  <li>AWS & Azure</li>
                  <li>Google Cloud</li>
                  <li>Docker & Kubernetes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/95">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Start Your Project?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your business goals with custom software
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