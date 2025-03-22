"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { CalendarIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";

interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      const docRef = doc(db, "blogs", slug as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setBlog({
          id: slug as string,
          title: data.title,
          content: data.content,
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : data.createdAt,
        });
      }
    };
    fetchBlog();
  }, [slug]);

  if (!blog) return <p className="text-center text-lg">Loading...</p>;

  return (
    <>
      {/* Dynamic SEO Meta Tags */}
      <Head>
        <title>{blog.title} | Pixelowave</title>
        <meta name="description" content={blog.content.substring(0, 150)} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.content.substring(0, 150)} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://pixelowave.com/blog/${blog.id}`} />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Next-SEO for Better Optimization */}
      <NextSeo
        title={`${blog.title} | Pixelowave`}
        description={blog.content.substring(0, 150)}
        canonical={`https://pixelowave.com/blog/${blog.id}`}
        openGraph={{
          url: `https://pixelowave.com/blog/${blog.id}`,
          title: blog.title,
          description: blog.content.substring(0, 150),
          article: {
            publishedTime: blog.createdAt,
            authors: ["https://pixelowave.com"],
          },
        }}
      />

      {/* Structured Data for Blog (Article JSON-LD) */}
      <ArticleJsonLd
        url={`https://pixelowave.com/blog/${blog.id}`}
        title={blog.title}
        images={["https://pixelowave.com/default-blog-image.jpg"]}
        datePublished={blog.createdAt}
        authorName="Pixelowave"
        publisherName="Pixelowave"
        description={blog.content.substring(0, 150)}
      />

      {/* Breadcrumb JSON-LD for SEO */}
      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: "Home", item: "https://pixelowave.com" },
          { position: 2, name: "Blog", item: "https://pixelowave.com/blog" },
          { position: 3, name: blog.title, item: `https://pixelowave.com/blog/${blog.id}` },
        ]}
      />

      <div className="container mx-auto py-12 px-4">
        {/* Blog Content */}
        <motion.div
          className="max-w-3xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Blog Title */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{blog.title}</h1>

          {/* Blog Meta */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>

          {/* Blog Content - Render HTML properly */}
          <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </motion.div>
      </div>
    </>
  );
}
