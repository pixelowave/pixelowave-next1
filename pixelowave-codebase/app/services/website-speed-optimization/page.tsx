'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const speedData = [
  { name: 'Before Optimization', speed: 50 },
  { name: 'After Optimization', speed: 95 }
];

const engagementData = [
  { name: 'Before Optimization', engagement: 30 },
  { name: 'After Optimization', engagement: 85 }
];

export default function WebsiteSpeedOptimization() {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-20 md:py-24 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Website Speed Optimization
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Improve your website performance with advanced optimization techniques. Faster loading times enhance user experience, SEO rankings, and conversion rates.
            </p>
            <div className="mt-8">
              <Button size="lg" className="h-12 px-8 text-base">
                <Link href="/contact" className="flex items-center">
                  Get a Free Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-xl">
              <h3 className="text-xl font-semibold">Performance Improvement</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={speedData}>
                  <XAxis dataKey="name" stroke="#8884d8" />
                  <YAxis stroke="#8884d8" />
                  <Tooltip />
                  <Line type="monotone" dataKey="speed" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Additional Panel with Different Graph Type */}
        <div className="mt-32 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-xl">
            <h3 className="text-xl font-semibold">Engagement Impact</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#82ca9d" />
                <YAxis stroke="#82ca9d" />
                <Tooltip />
                <Bar dataKey="engagement" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Why Website Speed Matters</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A fast-loading website enhances user experience, improves search engine rankings, and increases conversion rates. Studies show that a 1-second delay in load time can lead to a significant drop in customer engagement and revenue.
            </p>
            <h3 className="mt-6 text-2xl font-semibold">Our Optimization Process</h3>
            <ul className="mt-4 list-disc list-inside text-muted-foreground">
              <li>Minimizing HTTP requests and optimizing assets</li>
              <li>Leveraging browser caching for faster load times</li>
              <li>Compressing images without losing quality</li>
              <li>Implementing Content Delivery Networks (CDNs)</li>
              <li>Reducing server response time and optimizing databases</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}