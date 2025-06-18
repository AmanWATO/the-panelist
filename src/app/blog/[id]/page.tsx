
"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  // Sample blog data (in a real app, this would come from an API)
  const blogPost = {
    id: 1,
    title: "The Philosophy of Single-Panel Art",
    excerpt: "Why one frame holds more power than a thousand words. Exploring the minimalist approach to visual storytelling.",
    content: `
      <p>In a world saturated with visual noise, the single-panel art form emerges as a beacon of clarity and intention. Unlike traditional multi-panel comics or elaborate illustrations, single-panel art distills complex emotions, narratives, and concepts into one powerful frame.</p>
      
      <h2>The Power of Restraint</h2>
      <p>Restraint in art is not limitation—it's liberation. When an artist commits to expressing their vision within the confines of a single panel, they are forced to make every element count. Every line, every color choice, every spatial decision becomes intentional and meaningful.</p>
      
      <h2>Silence as a Language</h2>
      <p>Single-panel art speaks in the language of silence. It invites viewers to pause, to contemplate, and to fill in the narrative gaps with their own experiences and interpretations. This collaborative aspect between artist and viewer creates a unique intimacy that multi-panel works often cannot achieve.</p>
      
      <h2>The One Wonder Frame Competition</h2>
      <p>Our upcoming competition on August 11th celebrates this very philosophy. We invite artists to submit their most powerful single-panel works—pieces that demonstrate how constraint can lead to creative breakthrough.</p>
      
      <h2>Creating Your Panel</h2>
      <p>When approaching single-panel art, consider these elements:</p>
      <ul>
        <li><strong>Focus:</strong> What is the one essential message you want to convey?</li>
        <li><strong>Composition:</strong> How can the arrangement of elements guide the viewer's eye?</li>
        <li><strong>Negative Space:</strong> What you don't include is often as important as what you do.</li>
        <li><strong>Emotional Resonance:</strong> Does your panel evoke a feeling or memory?</li>
      </ul>
      
      <p>The beauty of single-panel art lies not in what it shows, but in what it suggests. It's an invitation to the viewer to become an active participant in the creative process, to bring their own stories and experiences to complete the narrative.</p>
    `,
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Philosophy",
    image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1200"
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Glass Effect */}
      <section className="relative py-16 px-4 sm:px-6 overflow-hidden">
        {/* Background with blur effect */}
        <div className="absolute inset-0">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>

        {/* Glass card */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <motion.button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span style={{ fontFamily: fonts.body }}>Back to Blog</span>
            </motion.button>

            {/* Category Badge */}
            <motion.span
              className="inline-block bg-[#8B2635]/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {blogPost.category}
            </motion.span>

            {/* Title */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight"
              style={{ fontFamily: fonts.heading }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {blogPost.title}
            </motion.h1>

            {/* Meta Information */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-white/80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm" style={{ fontFamily: fonts.body }}>
                  {new Date(blogPost.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm" style={{ fontFamily: fonts.body }}>
                  {blogPost.readTime}
                </span>
              </div>
              <motion.button
                className="flex items-center space-x-2 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Share2 className="w-4 h-4" />
                <span className="text-sm" style={{ fontFamily: fonts.body }}>Share</span>
              </motion.button>
            </motion.div>

            {/* Excerpt */}
            <motion.p
              className="text-lg text-white/90 leading-relaxed"
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
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-12 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div 
              className="prose prose-lg max-w-none text-[#2C1810]"
              style={{ fontFamily: fonts.body }}
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-[#8B2635]/10 to-[#D4A574]/10 backdrop-blur-sm border border-[#8B2635]/20 rounded-2xl p-8">
              <h3 
                className="text-2xl font-bold mb-4 text-[#2C1810]"
                style={{ fontFamily: fonts.heading }}
              >
                Ready to Share Your Vision?
              </h3>
              <p 
                className="text-[#6B5B4F] mb-6"
                style={{ fontFamily: fonts.body }}
              >
                Join the One Wonder Frame competition and showcase your single-panel masterpiece.
              </p>
              <motion.button
                className="bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                style={{ fontFamily: fonts.button }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply for Competition
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
