"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { Clock, Calendar, ArrowLeft, Share2, User, Tag } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { blogPosts } from "@/utils/blogPostData";
import { useEffect, useState } from "react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

interface StructuredData {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  image: string;
  author: {
    "@type": string;
    name: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: {
    "@type": string;
    "@id": string;
  };
  articleSection: string;
  wordCount: number;
  timeRequired: string;
}

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (params?.id && typeof params.id === "string") {
      // Find blog post by id
      const post = blogPosts.find((post: BlogPost) => post.slug === params.id);
      setBlogPost(post || null);
      setIsLoading(false);
    }
  }, [params?.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-pulse text-[#8B2635] text-xl">Loading...</div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2C1810] mb-4">
            Blog Post Not Found
          </h1>
          <button
            onClick={() => router.push("/blog")}
            className="text-[#8B2635] hover:underline"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const structuredData: StructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blogPost.title,
    description: blogPost.excerpt,
    image: blogPost.image,
    author: {
      "@type": "Organization",
      name: "The Panelist",
    },
    publisher: {
      "@type": "Organization",
      name: "The Panelist",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/the_panelist.png`,
      },
    },
    datePublished: blogPost.date,
    dateModified: blogPost.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${blogPost.slug}`,
    },
    articleSection: blogPost.category,
    wordCount: blogPost.content.replace(/<[^>]*>/g, "").split(" ").length,
    timeRequired: `PT${blogPost.readTime.split(" ")[0]}M`,
  };

  const handleShare = async (): Promise<void> => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogPost.title,
          text: blogPost.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (error) {
        console.log("Error copying to clipboard:", error);
        const textArea = document.createElement("textarea");
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Link copied to clipboard!");
      }
    }
  };

  return (
    <>
      <Script
        id="blog-post-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="min-h-screen pt-20 max-md:pt-10">
        {/* Hero Section with Glass Effect */}
        <section className="relative py-16 max-md:py-14 px-5 sm:px-6 overflow-hidden">
          {/* Background with blur effect */}
          <div className="absolute inset-0">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>

          {/* Glass card */}
          <div className="relative z-10 max-md:w-full max-w-5xl mx-auto">
            <motion.div
              className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-3xl p-6 sm:p-12 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back Button */}
              <motion.button
                onClick={() => router.back()}
                className="flex items-center space-x-2 max-md:mb-4 text-white/90 hover:text-white mb-8 transition-colors group"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span
                  style={{ fontFamily: fonts.body }}
                  className="font-medium"
                >
                  Back to Blog
                </span>
              </motion.button>

              {/* Category Badge */}
              <motion.div
                className="flex items-center space-x-3 mb-6 max-md:mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-flex items-center space-x-2 bg-[#8B2635]/90 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium">
                  <Tag className="w-4 h-4" />
                  <span>{blogPost.category}</span>
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 max-md:mb-6 text-white leading-tight"
                style={{ fontFamily: fonts.heading }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {blogPost.title}
              </motion.h1>

              {/* Meta Information */}
              <motion.div
                className="flex flex-wrap items-center gap-8 max-md:gap-4 max-md:mb-6 text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-5 py-2 max-md:px-3  max-md:space-x-[6px] rounded-full">
                  <User className="w-4 h-4" />
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: fonts.body }}
                  >
                    The Panelist Team
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-5 py-2  max-md:px-3  max-md:space-x-[6px] rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: fonts.body }}
                  >
                    {new Date(blogPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-5 py-2 max-md:space-x-[6px]  max-md:px-3  rounded-full">
                  <Clock className="w-4 h-4" />
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: fonts.body }}
                  >
                    {blogPost.readTime}
                  </span>
                </div>
                <motion.button
                  onClick={handleShare}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-5 py-2 max-md:space-x-[6px]  max-md:px-3  rounded-full hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-4 h-4" />
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: fonts.body }}
                  >
                    Share
                  </span>
                </motion.button>
              </motion.div>

              {/* Excerpt */}
              <motion.p
                className="text-xl text-white/95 max-md:text-base leading-relaxed font-medium"
                style={{ fontFamily: fonts.body }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {blogPost.excerpt}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section
          className="py-20 max-md:py-14 px-5 sm:px-6"
          style={{ backgroundColor: colors.background }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.article
              className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-3xl p-4 sm:p-12 lg:p-16 shadow-xl max-md:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className="blog-content text-lg max-md:text-base "
                style={{
                  fontFamily: fonts.accent,
                  color: "#2C1810",
                }}
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </motion.article>

            {/* Related Articles Suggestion */}
            <motion.div
              className="mt-16 max-md:mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#8B2635]/10 via-[#D4A574]/10 to-[#8B2635]/5 backdrop-blur-sm border border-[#8B2635]/20 rounded-3xl p-6 lg:p-12">
                <div className="text-center">
                  <h3
                    className="text-3xl max-md:text-xl font-bold mb-6 text-[#2C1810]"
                    style={{ fontFamily: fonts.heading }}
                  >
                    Ready to Share Your Vision?
                  </h3>
                  <p
                    className="text-lg max-md:text-base text-[#6B5B4F] mb-8 max-w-2xl mx-auto"
                    style={{ fontFamily: fonts.body }}
                  >
                    Join the One Wonder Frame competition and showcase your
                    single-panel masterpiece. Connect with fellow artists who
                    believe in the power of minimalist storytelling.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      className="bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform"
                      style={{ fontFamily: fonts.button }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        window.location.href = "/#panel-application";
                      }}
                    >
                      Apply to Become a Panelist
                    </motion.button>
                    <motion.button
                      className="border-2 border-[#8B2635] text-[#8B2635] px-8 py-4 rounded-full font-semibold hover:bg-[#8B2635] hover:text-white transition-all duration-300"
                      style={{ fontFamily: fonts.button }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => router.push("/blog")}
                    >
                      Explore More Articles
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .blog-content h2 {
          font-family: ${fonts.heading};
          font-size: 2rem;
          font-weight: 700;
          color: #2c1810;
          margin: 2.5rem 0 1.5rem 0;
          line-height: 1.3;
          position: relative;
        }

        .blog-content h2::before {
          content: "";
          position: absolute;
          left: -2rem;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 2rem;
          background: linear-gradient(to bottom, #8b2635, #d4a574);
          border-radius: 2px;
        }

        .blog-content h3 {
          font-family: ${fonts.heading};
          font-size: 1.5rem;
          font-weight: 600;
          color: #2c1810;
          margin: 2rem 0 1rem 0;
          line-height: 1.4;
        }

        .blog-content p {
          margin: 1.5rem 0;
          color: #4a4a4a;
          line-height: 1.8;
        }

        .blog-content ul {
          margin: 1.5rem 0;
          padding-left: 0;
          list-style: none;
        }

        .blog-content li {
          position: relative;
          margin: 1rem 0;
          padding-left: 2rem;
          color: #4a4a4a;
          line-height: 1.7;
        }

        .blog-content li::before {
          content: "→";
          position: absolute;
          left: 0;
          top: 0;
          color: #8b2635;
          font-weight: bold;
          font-size: 1.1em;
        }

        .blog-content strong {
          color: #8b2635;
          font-weight: 600;
        }

        .blog-content em {
          color: #6b5b4f;
          font-style: italic;
        }

        .blog-content blockquote {
          border-left: 4px solid #d4a574;
          margin: 2rem 0;
          padding: 1.5rem 2rem;
          background: rgba(212, 165, 116, 0.1);
          border-radius: 0 12px 12px 0;
          font-style: italic;
          color: #6b5b4f;
        }

        @media (max-width: 768px) {
          .blog-content {
            font-size: 16px;
            padding: 0 1rem;
          }

          .blog-content h2 {
            font-size: 1.2rem;
            margin: 2rem 0 1rem 0;
          }

          .blog-content h2::before {
            left: -1rem;
            width: 3px;
            height: 1.5rem;
          }

          .blog-content h3 {
            font-size: 1.25rem;
            margin: 1.5rem 0 1rem 0;
          }

          .blog-content p {
            font-size: 1rem;
            line-height: 1.7;
            margin: 0.8rem 0;
          }

          .blog-content li {
            padding-left: 1.2rem;
            font-size: 0.95rem;
          }

          .blog-content li::before {
            font-size: 1em;
            top: 0.1rem;
          }

          .blog-content blockquote {
            padding: 1rem 1.5rem;
            margin: 1.5rem 0;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
}
