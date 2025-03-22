"use client";

import { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  // SEO-related questions
  { question: "What is SEO?", answer: "SEO (Search Engine Optimization) is the process of optimizing a website to rank higher on search engines like Google." },
  { question: "Why is SEO important?", answer: "SEO helps improve website visibility, drive organic traffic, and increase conversions without paid advertising." },
  { question: "What are the main types of SEO?", answer: "The three main types of SEO are On-Page SEO, Off-Page SEO, and Technical SEO." },
  { question: "What is On-Page SEO?", answer: "On-Page SEO involves optimizing individual web pages, including content, meta tags, images, and internal linking." },
  { question: "What is Off-Page SEO?", answer: "Off-Page SEO focuses on external factors like backlinks, social media signals, and brand mentions to improve rankings." },
  { question: "How does Google rank websites?", answer: "Google uses algorithms considering relevance, quality, user experience, backlinks, and page speed to rank websites." },
  { question: "What is keyword research?", answer: "Keyword research involves finding the right terms that users search for to target in website content." },
  { question: "What is structured data in SEO?", answer: "Structured data helps search engines understand content using schema markup for rich search results." },
  { question: "What is Local SEO?", answer: "Local SEO optimizes businesses for location-based searches using Google My Business, citations, and local keywords." },
  { question: "How do meta tags affect SEO?", answer: "Title tags and meta descriptions impact CTR and rankings in search engine results pages (SERPs)." },
  { question: "What is Core Web Vitals?", answer: "Core Web Vitals measure user experience factors like load time, interactivity, and visual stability." },
  { question: "What is a sitemap?", answer: "A sitemap is an XML file that lists all site pages, helping search engines crawl efficiently." },
  { question: "How does schema markup help SEO?", answer: "Schema markup enhances search listings with rich snippets like star ratings and FAQs." },
  { question: "What is Google’s E-E-A-T?", answer: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness, essential for content ranking." },
  
  // Software Development and AI-related questions
  { question: "What technologies does Pixelowave use for software development?", answer: "We use Next.js, React, Node.js, Python, AI integrations, and cloud solutions." },
  { question: "What is full-stack development?", answer: "Full-stack development involves both front-end and back-end technologies to build complete web applications." },
  { question: "What is AI in software development?", answer: "AI in software development involves machine learning, NLP, and automation to enhance user experiences." },
  { question: "How does chatbot integration benefit a website?", answer: "Chatbots improve user engagement, provide instant support, and enhance customer satisfaction." },
  { question: "What is cloud computing in software development?", answer: "Cloud computing allows hosting applications on scalable, secure, and high-performance cloud platforms." },
  { question: "Why is cybersecurity important in web development?", answer: "Cybersecurity protects websites from data breaches, hacking, and malware attacks." },
  { question: "What is the role of DevOps in software development?", answer: "DevOps enhances collaboration, CI/CD pipelines, and automation for efficient software delivery." },
  { question: "What is API development?", answer: "API development allows seamless communication between different applications and services." },
  { question: "What is mobile-first development?", answer: "Mobile-first development ensures websites are optimized for mobile devices for better UX and SEO." },
  { question: "What is edge computing?", answer: "Edge computing processes data closer to users to reduce latency and improve performance." },
];
export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Pixelowave</title>
        <meta name="description" content="Find answers to common questions about SEO, software development, AI, and digital solutions." />
        <meta property="og:title" content="FAQs | Pixelowave" />
        <meta property="og:url" content="https://pixelowave.com/faq" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }) }} />
      </Head>
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Frequently Asked Questions</h1>

      </section>
      <section className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {faqs.map((faq, index) => (
          <div key={index} className="relative">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-xl"></div>
            <div className="relative rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-xl">
              <button onClick={() => setActiveIndex(activeIndex === index ? null : index)} className="flex justify-between w-full text-lg font-medium">
                {faq.question}
                <span className="text-orange-500 text-3xl">{activeIndex === index ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-4 text-gray-700 dark:text-white">
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
