'use client'

import { colors, fonts } from '@/utils/theme';
import { motion } from 'framer-motion'
import { Eye, Heart, Sparkles } from 'lucide-react';

const PowerOfOneSection = () => {
  const features = [
    { icon: Eye, title: "Emotional Pause", desc: "A single moment that lingers in memory" },
    { icon: Heart, title: "Interpretive Richness", desc: "Layers of meaning in minimal space" },
    { icon: Sparkles, title: "Artistic Restraint", desc: "The superpower of saying more with less" }
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#1E1E1E]" style={{ fontFamily: fonts.heading }}>
            The Power of One
          </h2>
          <p className="text-xl text-[#7A7A7A] max-w-3xl mx-auto" style={{ fontFamily: fonts.body }}>
            Why one panel? Because brevity is the soul of wit, and a single frame lingers longer in the mind than ten thousand pixels in motion.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: colors.card }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-[#6E1A2C] rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#1E1E1E]" style={{ fontFamily: fonts.heading }}>
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-[#7A7A7A]" style={{ fontFamily: fonts.body }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-3xl md:text-4xl italic text-[#6E1A2C] max-w-4xl mx-auto" style={{ fontFamily: fonts.heading }}>
            {`"A single frame lingers longer in the mind than ten thousand pixels in motion."`}
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};


export default PowerOfOneSection