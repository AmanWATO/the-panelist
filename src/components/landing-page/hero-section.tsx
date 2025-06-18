"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { ArrowDown, Sparkles, Feather } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: colors.background }}
      >
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 border-4 border-[#8B2635] rounded-2xl" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#2C1810]" style={{ fontFamily: fonts.heading }}>
            Where Art Speaks in Silence
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Animated background elements - reduced for mobile performance */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B2635] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-[#8B2635]/5" />

      <motion.div
        className="text-center max-w-5xl mx-auto px-4 sm:px-6 relative z-10"
        style={{ y, opacity }}
      >
        {/* Logo Animation - Simplified for mobile */}
        <motion.div
          className="mb-6 sm:mb-8 md:mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 relative">
            <motion.div
              className="w-full h-full border-3 sm:border-4 border-[#8B2635] rounded-xl sm:rounded-2xl relative overflow-hidden shadow-lg"
              animate={{ 
                boxShadow: [
                  "0 0 15px rgba(139, 38, 53, 0.2)",
                  "0 0 25px rgba(139, 38, 53, 0.4)",
                  "0 0 15px rgba(139, 38, 53, 0.2)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                className="absolute inset-1 sm:inset-2 bg-gradient-to-br from-[#8B2635] to-[#D4A574] rounded-lg opacity-20"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  <Feather className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#8B2635]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Heading - Better mobile scaling */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent leading-tight px-2"
          style={{ fontFamily: fonts.heading }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Where Art Speaks in Silence
        </motion.h1>

        {/* Subheading - Better mobile readability */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#6B5B4F] mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          style={{ fontFamily: fonts.body }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          A platform for minimalist storytelling and single-panel mastery. 
          Join the quiet revolution where every frame tells a complete story.
        </motion.p>

        {/* CTA Buttons - Better mobile layout */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-8 sm:mb-12 md:mb-16 px-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2 sm:space-x-3 group w-full sm:w-auto justify-center"
            style={{ fontFamily: fonts.button }}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Feather className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
            <span>Join Early Access</span>
          </motion.button>

          <motion.button
            className="border-2 border-[#8B2635] text-[#8B2635] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#8B2635] hover:text-white transition-all duration-300 flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-center"
            style={{ fontFamily: fonts.button }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Explore Philosophy</span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator - Simplified for mobile */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer p-2"
          >
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B2635]" />
          </motion.div>
          <span className="text-xs sm:text-sm text-[#6B5B4F] mt-1 sm:mt-2" style={{ fontFamily: fonts.body }}>
            Scroll to explore
          </span>
        </motion.div>
      </motion.div>

      {/* Early Access Form Modal */}
      <EarlyAccessForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
};

export default HeroSection;