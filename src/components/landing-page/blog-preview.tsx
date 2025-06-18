"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogPreview = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Philosophy of Single-Panel Art",
      excerpt: "Why one frame holds more power than a thousand words.",
      date: "2025-01-15",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Philosophy"
    },
    {
      id: 2,
      title: "One Wonder Frame Competition",
      excerpt: "Join our art competition on August 11th and showcase your talent.",
      date: "2025-01-12",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Competition"
    },
    {
      id: 3,
      title: "The Art of Layered Captions",
      excerpt: "Writing captions that add depth without overwhelming.",
      date: "2025-01-10",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Technique"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <BookOpen className="w-8 h-8 text-white" />
          </motion.div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
            style={{ fontFamily: fonts.heading }}
          >
            Stories & Insights
          </h2>

          <p
            className="text-lg sm:text-xl text-[#6B5B4F] max-w-3xl mx-auto mb-8"
            style={{ fontFamily: fonts.body }}
          >
            Dive deeper into the philosophy and practice of minimalist art. Discover the stories behind the silence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <motion.article
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#D4A574]/90 text-[#2C1810] px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-xs text-[#6B5B4F]">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3
                  className="text-lg font-bold mb-3 text-[#2C1810] group-hover:text-[#8B2635] transition-colors line-clamp-2"
                  style={{ fontFamily: fonts.heading }}
                >
                  {post.title}
                </h3>

                <p
                  className="text-[#6B5B4F] text-sm mb-4 leading-relaxed line-clamp-2"
                  style={{ fontFamily: fonts.body }}
                >
                  {post.excerpt}
                </p>

                <motion.div
                  className="flex items-center text-[#8B2635] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </div>
              </motion.article>
            </Link>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/blog">
            <motion.button
              className="bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-3 mx-auto"
              style={{ fontFamily: fonts.button }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-5 h-5" />
              <span>Explore All Stories</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;