"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Blog[];
      setBlogs(blogList);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto py-12 grid grid-cols-3 gap-8">
      {/* Blog Posts Grid */}
      <div className="col-span-2 grid gap-8 md:grid-cols-2">
        {blogs.map(blog => (
          <div key={blog.id} className="group rounded-2xl bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
              <img
                src="https://source.unsplash.com/random/800x600?blog" 
                alt={blog.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Published on {new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {blog.title}
              </h3>
              <p className="mt-4 text-muted-foreground">
                {blog.content ? blog.content.substring(0, 150) + "..." : "No content available"}
              </p>
              <Link href={`/blog/${blog.id}`} className="mt-6 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar - Latest Blogs */}
      <div className="col-span-1 p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Latest Blogs</h2>
        <ul className="space-y-4">
          {blogs.slice(0, 5).map(blog => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}