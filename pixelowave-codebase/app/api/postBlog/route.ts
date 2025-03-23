import { NextRequest, NextResponse } from "next/server";
import admin from "firebase-admin";

// Avoid reinitializing Firebase Admin in case of hot reload
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  });
}

const adminDb = admin.firestore();

export async function POST(req: NextRequest) {
  try {
    const { title, content } = await req.json();

    if (!title || !content) {
      console.error("Missing title or content"); // Debugging missing fields
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    // Log the title and content to check
    console.log("Title:", title);
    console.log("Content:", content);

    const newPost = {
      title,
      content,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    // Adding the blog post to Firestore
    const docRef = await adminDb.collection("blogs").add(newPost);

    console.log("Blog saved to Firestore with ID:", docRef.id); // Debugging the saved ID

    return NextResponse.json({ message: "Blog posted successfully!", id: docRef.id });
  } catch (error) {
    // TypeScript error handling for 'unknown' error type
    if (error instanceof Error) {
      // Now you can safely access error.message
      console.error("Error posting blog:", error.message); // Debugging the exact error message
      return NextResponse.json({ error: `Failed to save blog: ${error.message}` }, { status: 500 });
    } else {
      // Handle unexpected error types (not an instance of Error)
      console.error("Unexpected error:", error);
      return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
  }
}
