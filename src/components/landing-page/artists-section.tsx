'use client'

import { colors, fonts } from '@/utils/theme';
import { motion } from 'framer-motion'
import { Frame, Palette, Sparkles, Users } from "lucide-react";

const ArtistsSection = () => {
  const benefits = [
    { icon: Frame, title: "Feature on Homepage", desc: "Prime visibility for your work" },
    { icon: Sparkles, title: "Social Amplification", desc: "We echo your whispers loudly" },
    { icon: Users, title: "Portfolio Links", desc: "Permanent showcase for your art" },
    { icon: Palette, title: "Community Sessions", desc: "Collaborative brainstorming circles" }
  ];

  return (
    <section id="artists" className="py-20 px-6" style={{ backgroundColor: colors.card }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#1E1E1E]" style={{ fontFamily: fonts.heading }}>
            You Create. We Echo.
          </h2>
          <p className="text-xl text-[#7A7A7A] max-w-3xl mx-auto" style={{ fontFamily: fonts.body }}>
            {`This is not just a gallery—it's a loud whisper for your work. We amplify the quiet voices that deserve to be heard.`}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-xl hover:shadow-md transition-all duration-300"
              style={{ backgroundColor: colors.background }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-12 h-12 bg-[#6E1A2C] rounded-lg flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <benefit.icon className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-[#1E1E1E]" style={{ fontFamily: fonts.heading }}>
                  {benefit.title}
                </h3>
                <p className="text-[#7A7A7A]" style={{ fontFamily: fonts.body }}>
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-[#6E1A2C] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300"
            style={{ fontFamily: fonts.button }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Early Access
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};


export default ArtistsSection