import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Smartphone, Tablet, Laptop, Zap, Layers, RefreshCw } from 'lucide-react';

export default function MobileDevelopmentPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-24 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
                Mobile App Development
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We create engaging, high-performance mobile applications for iOS and Android that delight users and drive business results. Our expert team delivers native and cross-platform solutions tailored to your needs.
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
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-600 opacity-30 blur-xl"></div>
              <div className="relative rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-xl">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                    <h3 className="font-semibold">Native Apps</h3>
                    <p className="text-sm text-muted-foreground">iOS and Android apps with platform-specific features</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <Layers className="h-6 w-6 text-blue-600" />
                    <h3 className="font-semibold">Cross-Platform</h3>
                    <p className="text-sm text-muted-foreground">React Native and Flutter for multiple platforms</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <Zap className="h-6 w-6 text-green-600" />
                    <h3 className="font-semibold">Performance</h3>
                    <p className="text-sm text-muted-foreground">Optimized for speed and battery efficiency</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border p-4">
                    <RefreshCw className="h-6 w-6 text-red-600" />
                    <h3 className="font-semibold">Updates</h3>
                    <p className="text-sm text-muted-foreground">Continuous improvement and maintenance</p>
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
            <h2 className="text-3xl font-bold sm:text-4xl">Our Mobile Development Approach</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We build mobile apps that users love and businesses rely on
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <Smartphone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">User-Centered Design</h3>
                <p className="mt-4 text-muted-foreground">
                  We create intuitive interfaces that prioritize user experience, ensuring your app is easy to navigate and enjoyable to use.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Scalable Architecture</h3>
                <p className="mt-4 text-muted-foreground">
                  We build apps with clean, maintainable code that can grow with your business and adapt to changing requirements.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent dark:from-green-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                  <RefreshCw className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Continuous Improvement</h3>
                <p className="mt-4 text-muted-foreground">
                  We provide ongoing support, updates, and enhancements to keep your app performing at its best and meeting user needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Mobile Technologies We Use</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We leverage the best tools and frameworks to build exceptional mobile experiences
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Smartphone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Native Development</h3>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">iOS</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>Swift</li>
                    <li>SwiftUI</li>
                    <li>Objective-C</li>
                    <li>Xcode</li>
                  </ul>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Android</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>Kotlin</li>
                    <li>Jetpack Compose</li>
                    <li>Java</li>
                    <li>Android Studio</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <Layers className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Cross-Platform Development</h3>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">React Native</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>JavaScript/TypeScript</li>
                    <li>Redux</li>
                    <li>React Navigation</li>
                    <li>Expo</li>
                  </ul>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Flutter</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>Dart</li>
                    <li>BLoC Pattern</li>
                    <li>Provider</li>
                    <li>Material Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/95">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Build Your Mobile App?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how we can help you create a successful mobile application
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