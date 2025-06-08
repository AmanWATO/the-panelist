'use client'

import { colors, fonts } from '@/utils/theme';
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const ComingSoonSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 18,
    minutes: 33
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: colors.card }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <motion.div
              className="w-32 h-32 mx-auto mb-6 relative"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full border-4 border-[#6E1A2C] rounded-full relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#6E1A2C] to-transparent opacity-20"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-[#6E1A2C]" />
              </div>
            </motion.div>
          </div>

          <h2
            className="text-5xl md:text-6xl font-bold mb-6 text-[#1E1E1E]"
            style={{ fontFamily: fonts.heading }}
          >
            One Frame Wonder
          </h2>

          <p
            className="text-xl mb-8 text-[#7A7A7A]"
            style={{ fontFamily: fonts.body }}
          >
            Our inaugural contest launches soon. Get ready to draw silence.
          </p>

          <blockquote
            className="text-2xl md:text-3xl italic mb-12 text-[#6E1A2C]"
            style={{ fontFamily: fonts.heading }}
          >
            {`"When everyone draws noise, draw silence."`}
          </blockquote>

          <div className="flex justify-center space-x-8 mb-12">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[#6E1A2C] rounded-full flex items-center justify-center mb-2">
                  <span
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: fonts.button }}
                  >
                    {item.value}
                  </span>
                </div>
                <span
                    className="text-sm text-[#7A7A7A]"
                    style={{ fontFamily: fonts.body }}
                  >
                    {item.label}
                  </span>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="bg-[#6E1A2C] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#8B2538] hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ fontFamily: fonts.button }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Notify Me When It Launches
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};


export default ComingSoonSection