import BlogHero from "@/components/blog/blog-hero";
import BlogGrid from "@/components/blog/blog-grid";
import BlogNewsletter from "@/components/blog/blog-newsletter";

export const metadata = {
  title: "Blog - The Panelist",
  description: "Insights, stories, and inspiration from the world of single-panel art and minimalist storytelling.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <BlogHero />
      <BlogGrid />
      <BlogNewsletter />
    </div>
  );
}