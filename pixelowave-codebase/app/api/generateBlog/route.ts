import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// List of high-ranking keyword blog topics
const topics = [
  "Top Digital Marketing Trends 2024: Stay Ahead of Competitors",
  "Mastering SEO Strategies in 2024: Rank on Google's First Page",
  "AI-Powered Marketing Tools to Transform Your Business",
  "Best E-commerce Platforms for Startups in 2024",
  "Effective Social Media Marketing Techniques for Brand Growth",
  "How to Optimize Google Ads for Maximum ROI in 2024",
  "Influencer Marketing Trends You Can't Ignore This Year",
  "SEO Content Creation Using AI: Best Practices for 2024",
  "Affiliate Marketing Guide: Earning Passive Income Online",
  "Voice Search Optimization: Future-Proof Your SEO Strategy"
];

// Function to get a random topic
const getRandomTopic = () => topics[Math.floor(Math.random() * topics.length)];

export async function GET(req: NextRequest) {
  const topic = getRandomTopic();
  const AI_MODEL = "mistralai/Mistral-7B-Instruct-v0.1";

  try {
    console.log(`Selected Topic: ${topic}`);

    // Generate detailed prompt for SEO optimization
    const prompt = `
      Write a detailed, SEO-friendly blog post on the topic: "${topic}".
      Use primary and secondary keywords related to the topic. 
      Provide actionable insights, examples, and expert tips.
      Maintain a conversational tone.
      Include a clear introduction, key benefits, and a conclusion.
      Add subheadings for better readability.
      Write a persuasive Call to Action (CTA) at the end.
      Ensure it has a keyword-rich meta description (up to 160 characters).
    `;

    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${AI_MODEL}`,
      { inputs: prompt },
      { headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` } }
    );

    console.log("AI Response:", response.data);

    const blogContent = response.data[0]?.generated_text || "Failed to generate content";

    return NextResponse.json({ topic, blogContent });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Failed to generate blog" }, { status: 500 });
  }
}
