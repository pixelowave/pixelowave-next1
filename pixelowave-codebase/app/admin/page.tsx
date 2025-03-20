"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc, serverTimestamp } from "firebase/firestore";
import dynamic from "next/dynamic";
import Head from "next/head";
import moment from "moment";

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
      if (!user) router.push("/login"); // Redirect if not logged in
      setUser(user);
    });
    fetchBlogs();
    return () => unsubscribe();
  }, [router]);

  const fetchBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const blogList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setBlogs(blogList);
  };

  const handlePost = async () => {
    if (!title || !content) {
      alert("Title and Content are required");
      return;
    }

    if (editId) {
      await updateDoc(doc(db, "blogs", editId), {
        title,
        content,
        updatedAt: serverTimestamp(),
      });
      alert("Blog updated successfully!");
    } else {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
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
      <Head>
        <title>Admin Panel - Blog Management</title>
        <meta name="description" content="Admin panel for managing blog posts" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6">Manage Blogs</h1>
        {user && <p className="mb-4">Logged in as: {user.email}</p>}

        <div className="mb-8">
          <input
            className="border p-2 w-full mb-4"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Editor value={content} onChange={setContent} className="border p-2 w-full mb-4" />
          <button onClick={handlePost} className="bg-blue-600 text-white px-4 py-2 rounded">
            {editId ? "Update Blog" : "Post Blog"}
          </button>
          <button onClick={() => signOut(auth)} className="bg-red-600 text-white px-4 py-2 ml-4 rounded">
            Logout
          </button>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Existing Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-6 bg-white shadow rounded-lg">
              <h2 className="text-2xl font-bold">{blog.title}</h2>
              <p className="text-gray-500 text-sm mb-2">
                Published on {blog.createdAt ? moment(blog.createdAt.toDate()).format("MMMM DD, YYYY") : "Unknown Date"}
              </p>
              <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: blog.content }} />
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