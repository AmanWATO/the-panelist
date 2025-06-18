"use client";

import { colors, fonts } from "@/utils/theme";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bell, Sparkles, Palette } from "lucide-react";
import EarlyAccessForm from "@/components/ui/early-access-form";
import { useState } from "react";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [showForm, setShowForm] = useState(false);

  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ backgroundColor: colors.background }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full opacity-20"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
              background: `linear-gradient(45deg, ${colors.accent}, ${colors.secondary})`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
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
        {/* Logo Animation */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.4 }}
        >
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-6 relative">
            <motion.div
              className="w-full h-full border-4 border-[#8B2635] rounded-2xl relative overflow-hidden"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(139, 38, 53, 0.3)",
                  "0 0 40px rgba(139, 38, 53, 0.5)",
                  "0 0 20px rgba(139, 38, 53, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                className="absolute inset-2 bg-gradient-to-br from-[#8B2635] to-[#D4A574] rounded-lg opacity-30"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Palette className="w-8 h-8 sm:w-12 sm:h-12 text-[#8B2635]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-[#2C1810] via-[#8B2635] to-[#D4A574] bg-clip-text text-transparent leading-tight px-2"
          style={{ fontFamily: fonts.heading }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Where Art Speaks
          <motion.span
            className="block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            in Silence
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 lg:mb-12 text-[#6B5B4F] max-w-3xl mx-auto leading-relaxed px-4"
          style={{ fontFamily: fonts.body }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          A single panel. A subtle caption.{" "}
          <motion.span
            className="text-[#8B2635] font-semibold"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            A thousand interpretations.
          </motion.span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:shadow-xl transition-all duration-300 flex items-center space-x-2 sm:space-x-3 group w-full sm:w-auto justify-center"
            style={{ fontFamily: fonts.button }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
            <span>Join the Movement</span>
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-[#8B2635] rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-[#8B2635] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Early Access Form Modal */}
      <EarlyAccessForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
};

export default HeroSection;