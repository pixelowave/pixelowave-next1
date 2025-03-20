"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";

interface Blog {
  title: string;
  content: string;
  createdAt: string;
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      const docRef = doc(db, "blogs", slug as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlog(docSnap.data() as Blog);
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-gray-600 mt-4">{blog.content}</p>
    </div>
  );
}
