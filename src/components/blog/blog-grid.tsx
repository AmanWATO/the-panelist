"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

const BlogGrid = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Philosophy of Single-Panel Art",
      excerpt: "Why one frame holds more power than a thousand words. Exploring the minimalist approach to visual storytelling.",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Philosophy",
      image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "One Wonder Frame Competition Guidelines",
      excerpt: "Everything you need to know about our upcoming art competition on August 11th. Rules, submission process, and what makes a winning panel.",
      date: "2025-01-12",
      readTime: "8 min read",
      category: "Competition",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "The Art of Layered Captions",
      excerpt: "How to write captions that add depth without overwhelming the visual narrative.",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Technique",
      image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Building Community Through Quiet Art",
      excerpt: "How minimalist art creates deeper connections and more meaningful conversations.",
      date: "2025-01-08",
      readTime: "4 min read",
      category: "Community",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "From Sketch to Statement",
      excerpt: "A behind-the-scenes look at the creative process behind powerful single-panel art.",
      date: "2025-01-05",
      readTime: "7 min read",
      category: "Process",
      image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "The Future of Visual Storytelling",
      excerpt: "Where single-panel art fits in our increasingly digital and fast-paced world.",
      date: "2025-01-03",
      readTime: "5 min read",
      category: "Future",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const categories = ["All", "Philosophy", "Competition", "Technique", "Community", "Process", "Future"];

  return (
    <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: colors.card }}>
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0 
                  ? "bg-[#8B2635] text-white" 
                  : "bg-white text-[#6B5B4F] hover:bg-[#8B2635] hover:text-white"
              }`}
              style={{ fontFamily: fonts.body }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#8B2635] text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4 text-sm text-[#6B5B4F]">
                  <span className="bg-[#D4A574]/20 text-[#8B2635] px-3 py-1 rounded-full font-medium">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <h2 
                  className="text-2xl lg:text-3xl font-bold mb-4 text-[#2C1810]"
                  style={{ fontFamily: fonts.heading }}
                >
                  {blogPosts[0].title}
                </h2>
                <p 
                  className="text-[#6B5B4F] mb-6 leading-relaxed"
                  style={{ fontFamily: fonts.body }}
                >
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-end">
                  <motion.button
                    className="flex items-center space-x-2 text-[#8B2635] font-medium hover:text-[#A52A3A] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
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
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#D4A574]/90 text-[#2C1810] px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
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
                  className="text-lg font-bold mb-3 text-[#2C1810] group-hover:text-[#8B2635] transition-colors"
                  style={{ fontFamily: fonts.heading }}
                >
                  {post.title}
                </h3>
                
                <p 
                  className="text-[#6B5B4F] text-sm mb-4 leading-relaxed"
                  style={{ fontFamily: fonts.body }}
                >
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-end">
                  <motion.div
                    className="text-[#8B2635] opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 3 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="border-2 border-[#8B2635] text-[#8B2635] px-8 py-3 rounded-full font-medium hover:bg-[#8B2635] hover:text-white transition-all duration-300"
            style={{ fontFamily: fonts.button }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogGrid;