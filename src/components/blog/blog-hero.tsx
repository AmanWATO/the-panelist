"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { BookOpen, Feather, Sparkles } from "lucide-react";

const BlogHero = () => {
  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#8B2635] rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <motion.div
              className="w-full h-full bg-gradient-to-br from-[#8B2635] to-[#D4A574] rounded-2xl flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <BookOpen className="w-10 h-10 text-white" />
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-[#D4A574] rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Feather className="w-3 h-3 text-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
          style={{ fontFamily: fonts.heading }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Stories Behind
          <motion.span
            className="block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            the Silence
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-[#6B5B4F] mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: fonts.body }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Insights, inspiration, and the art of saying more with less. Dive into the philosophy and practice of single-panel storytelling.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {["Art Philosophy", "Artist Spotlights", "Creative Process", "Community Stories"].map((tag, index) => (
            <motion.span
              key={tag}
              className="px-4 py-2 bg-gradient-to-r from-[#8B2635]/10 to-[#D4A574]/10 text-[#8B2635] rounded-full border border-[#8B2635]/20"
              style={{ fontFamily: fonts.body }}
              whileHover={{ scale: 1.05, backgroundColor: "#8B2635", color: "white" }}
              transition={{ duration: 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;