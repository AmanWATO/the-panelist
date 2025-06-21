"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { Brush, Eye, Heart, Sparkles, Quote } from "lucide-react";

export default function PhilosophyPage() {
  const principles = [
    {
      icon: Eye,
      title: "Visual Restraint",
      description:
        "In a world of visual noise, we champion the power of a single, carefully crafted frame.",
    },
    {
      icon: Heart,
      title: "Emotional Depth",
      description:
        "One panel can hold infinite emotions, stories, and interpretations.",
    },
    {
      icon: Sparkles,
      title: "Layered Meaning",
      description:
        "The art of saying more with less, where every element serves a purpose.",
    },
  ];

  return (
    <div className="min-h-screen max-md:pt-10 pt-20">
      {/* Hero Section */}
      <section
        className="py-16 max-md:py-14 px-5 sm:px-6"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Brush className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
            style={{ fontFamily: fonts.heading }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Philosophy
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-[#6B5B4F] max-w-3xl mx-auto"
            style={{ fontFamily: fonts.body }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            In a world drowning in noise, we celebrate the whisper. The art of
            restraint, the power of pause, and the beauty of saying more with
            less.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="py-16 max-md:py-14 px-5 sm:px-6"
        style={{ backgroundColor: colors.card }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <blockquote
                className="text-2xl lg:text-3xl italic mb-8 text-[#8B2635]"
                style={{ fontFamily: fonts.accent }}
              >
                {`"This is not a comic. It's not a meme. It's not a story. It's a suggestion of one."`}
              </blockquote>

              <p
                className="text-lg mb-6 text-[#6B5B4F] leading-relaxed"
                style={{ fontFamily: fonts.body }}
              >
                {`The Panelist is more than a platform—it's a philosophy. We
                believe that in our age of information overload, the most
                powerful art is that which invites contemplation rather than
                demanding attention.`}
              </p>

              <p
                className="text-lg text-[#6B5B4F] leading-relaxed"
                style={{ fontFamily: fonts.body }}
              >
                {`Each single panel is a meditation, a moment of pause in our
                chaotic digital landscape. We champion artists who understand
                that restraint is not limitation—it's liberation.`}
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gradient-to-br from-[#8B2635]/10 to-[#D4A574]/10 rounded-2xl p-8 relative overflow-hidden">
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <Quote className="w-16 h-16 text-[#8B2635] mx-auto mb-4" />
                    <p
                      className="text-lg italic text-[#6B5B4F]"
                      style={{ fontFamily: fonts.accent }}
                    >
                      {`"Less is the new more"`}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Principles */}
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl"
                style={{ backgroundColor: colors.background }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold mb-4 text-[#2C1810]"
                  style={{ fontFamily: fonts.heading }}
                >
                  {principle.title}
                </h3>
                <p className="text-[#6B5B4F]" style={{ fontFamily: fonts.body }}>
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
