"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [blog, setBlog] = useState("");


  const handlePost = () => {
    console.log("Blog Posted:", blog);
    setBlog("");
  };

  if (!session) return null;

  return (
    <>
      <NextSeo
        title="Admin Dashboard | MySite"
        description="Manage blog posts from the admin dashboard."
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <textarea
          className="border w-full p-2 mt-4"
          placeholder="Write your blog..."
          value={blog}
          onChange={(e) => setBlog(e.target.value)}
        />
        <button onClick={handlePost} className="bg-green-500 text-white p-2 mt-2 rounded-md">
          Post Blog
        </button>
        <button onClick={() => signOut()} className="bg-red-500 text-white p-2 mt-2 rounded-md">
          Logout
        </button>
      </div>
    </>
  );
}
