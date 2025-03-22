"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { SearchIcon } from "lucide-react";
import Head from "next/head";
import { NextSeo, BreadcrumbJsonLd } from "next-seo";

interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}
export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogList = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          content: data.content.replace(/<[^>]+>/g, ""), // Remove HTML tags
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : data.createdAt,
        };
      }) as Blog[];

      const sortedBlogs = blogList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setBlogs(sortedBlogs);
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()));

  return (
      <>
        {/* SEO Optimization */}
        <Head>
        <title>Latest Blogs | Pixelowave</title>
        <meta name="description" content="Read the latest blogs on web development, SEO, digital marketing, and more. Stay updated with Pixelowave." />
        <meta name="keywords" content="blog, web development, SEO, digital marketing, Firebase, Next.js, Pixelowave" />
        <meta property="og:title" content="Latest Blogs | Pixelowave" />
        <meta property="og:description" content="Explore our latest blog posts on web development, SEO, and digital marketing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixelowave.com/blog" />
        <meta name="robots" content="index, follow" />
        </Head>

        {/* Next-SEO for Structured Data */}
        <NextSeo
        title="Latest Blogs | Pixelowave"
        description="Stay updated with our latest blogs on web development, SEO, digital marketing, and more."
        canonical="https://pixelowave.com/blog"
        openGraph={{
          url: "https://pixelowave.com/blog",
          title: "Latest Blogs | Pixelowave",
          description: "Read insightful articles on web development, digital marketing, and more.",
          site_name: "Pixelowave",
        }}
        />

        {/* Breadcrumb Structured Data for SEO */}
        <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: "Home", item: "https://pixelowave.com" },
          { position: 2, name: "Blog", item: "https://pixelowave.com/blog" },
        ]}
        />


    <div className="container mx-auto py-12 px-4">
      {/* Search Bar */}
      <div className="w-full mb-8">
        <h1 className="text-4xl text-left mb-6 font-semibold">Latest Blogs</h1>
        <div className="relative w-full">
          <SearchIcon className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search blogs..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Blog Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Blog Listings */}
        <div className="lg:col-span-9 grid gap-6 grid-cols-1 sm:grid-cols-2">
          {filteredBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="relative w-full rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all p-6 flex flex-col gap-2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Date & Icons */}
              <div className="flex items-center justify-between text-sm text-orange-500">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-xs text-orange-500">{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
                <ClockIcon className="w-4 h-4 text-gray-500" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-tight mt-3 mb-2">
                {blog.title}
              </h3>

              {/* Content Preview */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-snug">
                {blog.content ? blog.content.substring(0, 100) + "..." : "No content available"}
              </p>

              {/* Read More Button */}
              <div>
                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium text-sm transition-all group"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Published Blogs Section (No Animation) */}
        <div className="hidden lg:block lg:col-span-3 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg overflow-hidden relative">
          {/* <h2 className="text-2xl font-semibold text-center mb-4">Published Blogs</h2> */}

          <div className="flex flex-col space-y-4">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="p-4 bg-white dark:bg-gray-900 shadow-md rounded-lg flex flex-col items-start"
              >
                <Link
                  href={`/blog/${blog.id}`}
                  className="block text-base text-sm text-blue-500 dark:text-gray-200 hover:text-blue-500"
                >
                  {blog.title}
                </Link>
                <div className="flex items-center justify-between w-full mt-2 text-sm text-orange-500">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span className="text-orange-500">{new Date(blog.createdAt).toLocaleDateString()}</span>
                  </div>
                  <ClockIcon className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
