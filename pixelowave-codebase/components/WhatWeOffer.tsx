"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Globe, LineChart, Megaphone, MonitorSmartphone, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    title: "SEO Optimization",
    description:
      "Boost your website visibility and attract organic traffic with our data-driven SEO strategies. Our team ensures top search rankings through keyword research, technical SEO, and content optimization.",
    icon: <Globe className="h-12 w-12 text-primary" />,
    image: "/images/seo-optimization.jpg",
    alt: "SEO Optimization Concept",
    link: "/services/seo",
  },
  {
    title: "PPC Advertising",
    description:
      "Maximize your ROI with highly targeted pay-per-click campaigns and data-driven strategies. Our expert team optimizes your ad spend to achieve higher conversions while reducing costs.",
    icon: <LineChart className="h-12 w-12 text-primary" />,
    image: "/images/ppc.jpg",
    alt: "PPC Advertising Campaign",
    link: "/services/ppc",
  },
  {
    title: "Content Marketing",
    description:
      "Engage and convert your audience with high-quality, value-driven content strategies. Our approach includes blog writing, video marketing, and social media storytelling.",
    icon: <Megaphone className="h-12 w-12 text-primary" />,
    image: "/images/content-marketing.jpg",
    alt: "Content Marketing Strategies",
    link: "/services/digital-marketing",
  },
  {
    title: "Web Development",
    description:
      "Get a fast, secure, and scalable website designed for optimal user experience. Our development team builds responsive, SEO-friendly websites that load in milliseconds.",
    icon: <MonitorSmartphone className="h-12 w-12 text-primary" />,
    image: "/images/web-development.jpg",
    alt: "Web Development Process",
    link: "/services/software-web-development",
  },
  {
    title: "UI/UX Design",
    description:
      "Deliver intuitive and engaging digital experiences with our user-centered design approach. We conduct in-depth user research, wireframing, and interactive prototyping.",
    icon: <Palette className="h-12 w-12 text-primary" />,
    image: "/images/ui-ux.jpg",
    alt: "UI/UX Design Prototyping",
    link: "/services/ui-ux-design",
  },
];

export default function WhatWeOffer() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <div className="pt-16 container mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl text-gray-900 dark:text-white">What We Offer</h2>
      </div>

      {/* Navigation Tabs */}
      <div className="mt-8 flex justify-center border-b border-gray-300 dark:border-gray-700">
        {services.map((service, index) => (
          <button
            key={index}
            className={`px-6 py-3 text-lg font-medium transition-all border-b-2 ${
              activeTab === index
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(index)}
            aria-label={`Select ${service.title}`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Service Content Box */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative mt-8 max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden p-6 md:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-4">
              {services[activeTab].icon}
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {services[activeTab].title}
              </h3>
            </div>
            <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              {services[activeTab].description}
            </p>
            <Link
              href={services[activeTab].link}
              className="mt-4 inline-flex items-center text-blue-600 hover:underline font-medium"
            >
              Learn More
              <motion.span
                className="ml-2 text-orange-500"
                initial={{ x: 0 }}
                animate={{ x: 5 }}
                transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.6 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </div>

          {/* Image with Gradient Overlay */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 rounded-xl blur-xl"></div>
            <div className="relative w-[90%] h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={services[activeTab].image}
                alt={services[activeTab].alt}
                layout="fill"
                objectFit="cover"
                priority={activeTab === 0}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
