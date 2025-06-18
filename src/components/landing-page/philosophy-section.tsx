'use client'

import { colors, fonts } from '@/utils/theme';
import { motion } from 'framer-motion'
import { ArrowRight, Brush } from 'lucide-react';


const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-20 px-6" style={{ backgroundColor: colors.card }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#1E1E1E]" style={{ fontFamily: fonts.heading }}>
            Not Just a Platform, A Perspective
          </h2>
          <div className="w-24 h-1 bg-[#6E1A2C] mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl md:text-3xl italic mb-8 text-[#6E1A2C]" style={{ fontFamily: fonts.heading }}>
              {`${"This is not a comic. It's not a meme. It's not a story. It's a suggestion of one."}`}
            </blockquote>
            
            <p className="text-lg mb-6 text-[#7A7A7A] leading-relaxed" style={{ fontFamily: fonts.body }}>
              In a world drowning in noise, we celebrate the whisper. The Panelist is a sanctuary for artists who understand that restraint is the highest form of expression, that a single frame can hold infinite stories.
            </p>
            
            <p className="text-lg text-[#7A7A7A] leading-relaxed" style={{ fontFamily: fonts.body }}>
              We champion the art of layered captions, where words and images dance together in perfect, minimal harmony. Each panel is a pause, a breath, a moment of contemplation in our chaotic digital age.
            </p>
            
            <motion.button
              className="mt-8 text-[#6E1A2C] font-medium hover:underline flex items-center space-x-2"
              style={{ fontFamily: fonts.button }}
              whileHover={{ x: 5 }}
              onClick={() => window.location.href = '/manifesto'}
            >
              <span>Read the Manifesto</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-[#F1EDE5] rounded-2xl p-8 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#6E1A2C]/10 to-transparent"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <Brush className="w-16 h-16 text-[#6E1A2C] mx-auto mb-4" />
                  <p className="text-lg italic text-[#7A7A7A]" style={{ fontFamily: fonts.heading }}>
                    {`"Less is the new more"`}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default PhilosophySection