"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc, serverTimestamp, query, orderBy, limit } from "firebase/firestore";
import dynamic from "next/dynamic";
import Head from "next/head";
import moment from "moment";
import { NextSeo, BreadcrumbJsonLd } from "next-seo";

// Dynamically import React Quill to prevent SSR issues
const Editor = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function BlogPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/login");
      setUser(user);
    });
    fetchBlogs();
    return () => unsubscribe();
  }, [router]);

  const fetchBlogs = async () => {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"), limit(4));
    const querySnapshot = await getDocs(q);
    const blogList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  
    setBlogs(blogList);
  };
  const formatContent = (input: string) => {
    return input.trim().length > 0 ? input : "<p>No content provided.</p>";
  };

  const handlePost = async () => {
    if (!title || !content) {
      alert("Title and Content are required");
      return;
    }

    const formattedContent = formatContent(content);

    if (editId) {
      await updateDoc(doc(db, "blogs", editId), {
        title,
        content: formattedContent,
        updatedAt: serverTimestamp(),
      });
      alert("Blog updated successfully!");
    } else {
      await addDoc(collection(db, "blogs"), {
        title,
        content: formattedContent,
        createdAt: serverTimestamp(),
      });
      alert("Blog posted successfully!");
    }

    setTitle("");
    setContent("");
    setEditId(null);
    fetchBlogs();
  };

  const handleEdit = (blog: any) => {
    setTitle(blog.title);
    setContent(blog.content);
    setEditId(blog.id);
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "blogs", id));
    alert("Blog deleted successfully!");
    fetchBlogs();
  };

  return (
    <>
      {/* ✅ SEO Optimized Head Metadata */}
      <Head>
        <title>Admin Panel - Blog Management | Pixelowave</title>
        <meta name="description" content="Manage and publish blog posts with SEO optimization." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Blog Management Admin Panel" />
        <meta property="og:description" content="Easily create, edit, and delete blog posts with a user-friendly admin panel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixelowave.com/admin/blog" />
        <meta property="og:image" content="https://pixelowave.com/preview-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Admin Panel - Blog Management" />
        <meta name="twitter:description" content="Manage blog posts seamlessly with an SEO-optimized admin panel." />
        <meta name="twitter:image" content="https://pixelowave.com/preview-image.jpg" />
      </Head>

      {/* ✅ Next-SEO for Better Search Engine Optimization */}
      <NextSeo
        title="Admin Panel - Blog Management | Pixelowave"
        description="Manage and publish blog posts with SEO optimization."
        canonical="https://pixelowave.com/admin/blog"
        openGraph={{
          url: "https://pixelowave.com/admin/blog",
          title: "Admin Panel - Blog Management | Pixelowave",
          description: "Easily create, edit, and delete blog posts with a user-friendly admin panel.",
          images: [{ url: "https://pixelowave.com/preview-image.jpg", width: 1200, height: 630, alt: "Admin Panel" }],
          site_name: "Pixelowave",
        }}
        twitter={{
          handle: "@pixelowave",
          site: "@pixelowave",
          cardType: "summary_large_image",
        }}
      />

      {/* ✅ Breadcrumbs for Google Ranking */}
      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: "Home", item: "https://pixelowave.com" },
          { position: 2, name: "Admin", item: "https://pixelowave.com/admin" },
          { position: 3, name: "Blog Management", item: "https://pixelowave.com/admin/blog" },
        ]}
      />

      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6">Manage Blogs</h1>
        {user && <p className="mb-4">Logged in as: {user.email}</p>}

        {/* ✅ Blog Input Form */}
        <div className="mb-8 bg-white p-6 shadow rounded-lg">
          <input
            className="border p-2 w-full mb-4"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Editor
            value={content}
            onChange={setContent}
            className="border p-2 w-full mb-4"
            placeholder="Write your blog content here..."
          />
          <div className="flex gap-4">
            <button onClick={handlePost} className="bg-blue-600 text-white px-4 py-2 rounded">
              {editId ? "Update Blog" : "Post Blog"}
            </button>
            <button onClick={() => signOut(auth)} className="bg-red-600 text-white px-4 py-2 rounded">
              Logout
            </button>
          </div>
        </div>

        {/* ✅ Blog List */}
        <h2 className="text-3xl font-semibold mb-4">Existing Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-6 bg-white shadow rounded-lg">
              <h2 className="text-2xl font-bold">{blog.title}</h2>
              <p className="text-gray-500 text-sm mb-2">
                Published on {blog.createdAt ? moment(blog.createdAt.toDate()).format("MMMM DD, YYYY") : "Unknown Date"}
              </p>
              <div className="text-gray-700 prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
              <div className="mt-4 flex space-x-2">
                <button onClick={() => handleEdit(blog)} className="bg-yellow-500 text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button onClick={() => handleDelete(blog.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
