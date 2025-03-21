import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Users, Award, Clock, Heart, Zap, TrendingUp, Rocket, Lightbulb } from 'lucide-react';
import { Briefcase, Code, Megaphone } from "lucide-react";


export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-24 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                About Pixelowave
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We're a team of passionate digital experts dedicated to helping businesses thrive in the digital landscape. With our combined expertise in software development and digital marketing, we deliver comprehensive solutions that drive growth and success.
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
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Our team collaborating" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/95">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Story</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Driving digital transformation with passion and expertise
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[{
              title: "Scaling Up",
              description: "Pixelowave quickly established itself as a trusted name in digital innovation, expanding our expertise and client base.",
              icon: <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            }, {
              title: "Industry Leadership",
              description: "Our team of specialists delivers cutting-edge solutions that help businesses thrive in a competitive digital landscape.",
              icon: <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            }, {
              title: "Shaping the Future",
              description: "With a strong foundation and forward-thinking mindset, Pixelowave continues to innovate and redefine digital excellence.",
              icon: <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            }].map((item, index) => (
              <div key={index} className="relative flex flex-col items-center text-center p-6 group transition-transform transform hover:scale-105">
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

      {/* <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Innovation</h3>
                <p className="mt-4 text-muted-foreground">
                  We embrace new technologies and creative approaches to solve complex problems and deliver cutting-edge solutions.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Excellence</h3>
                <p className="mt-4 text-muted-foreground">
                  We strive for the highest quality in everything we do, from code to communication, ensuring exceptional results for our clients.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent dark:from-green-950/50"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                  <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Integrity</h3>
                <p className="mt-4 text-muted-foreground">
                  We build relationships based on trust, transparency, and ethical practices, always putting our clients' best interests first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}



<section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/95">
  <div className="container">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Our Team</h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Meet the experts behind our success
      </p>
    </div>
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 mx-auto">
          <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-300" />
        </div>

        <h3 className="mt-4 text-xl font-semibold">Mark</h3>
        <p className="text-sm text-muted-foreground">Founder & CEO</p>
        <p className="mt-4 text-muted-foreground">
          With over 15 years of experience in software development and digital strategy, David leads our team with vision and expertise.
        </p>
      </div>
      <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900 mx-auto">
          <Code className="w-8 h-8 text-green-600 dark:text-green-300" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Hanery</h3>
        <p className="text-sm text-muted-foreground">CTO</p>
        <p className="mt-4 text-muted-foreground">
          Sarah brings deep technical knowledge and innovative thinking to our development processes and technology stack.
        </p>
      </div>
      <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900 mx-auto">
          <Megaphone className="w-8 h-8 text-yellow-600 dark:text-yellow-300" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Michael Rodriguez</h3>
        <p className="text-sm text-muted-foreground">Marketing Director</p>
        <p className="mt-4 text-muted-foreground">
          Michael's strategic approach to digital marketing helps our clients achieve exceptional growth and ROI.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Join Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're always looking for talented individuals to join our growing team
            </p>
            <div className="mt-8">
              <Button size="lg" className="h-12 px-8 text-base">
                <Link href="/faq" className="flex items-center">
                  View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}