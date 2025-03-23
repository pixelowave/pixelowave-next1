import axios from "axios";

// Function to generate blog content
const generateBlogContent = async (): Promise<string> => {
  try {
    const aiResponse = await axios.get("http://pixelowave.com/api/generateBlog");
    if (!aiResponse.data?.blogContent) {
      throw new Error("No blog content received from API.");
    }
    return aiResponse.data.blogContent;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`[${new Date().toISOString()}] ❌ Error generating blog content:`, error.message);
    }
    throw error;
  }
};

// Function to post blog content
const postBlog = async (title: string, content: string): Promise<void> => {
  try {
    await axios.post("http://pixelowave.com/api/postBlog", { title, content });
    console.log(`[${new Date().toISOString()}] ✅ AI Blog Posted Successfully!`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`[${new Date().toISOString()}] ❌ Error posting blog:`, error.message);
    }
  }
};

// Main function to execute the blog generation and posting
const autoPostBlog = async (): Promise<void> => {
  try {
    const blogContent = await generateBlogContent();

    const lines = blogContent.split("\n").filter(line => line.trim() !== "");
    const title = lines[0] || "Untitled Blog";
    const content = lines.slice(1).join("\n").trim();

    if (!content) {
      throw new Error("Blog content is empty or invalid.");
    }

    await postBlog(title, content);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`[${new Date().toISOString()}] ❌ Blog automation failed:`, error.message);
    }
  }
};

// Run daily using setInterval
setInterval(autoPostBlog, 3 * 60 * 60 * 1000);
console.log(`[${new Date().toISOString()}] 🚀 Blog automation started. Blogs will be posted every 6 hours.`);
