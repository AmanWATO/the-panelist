'use client'

import { colors, fonts } from '@/utils/theme';
import { motion } from 'framer-motion'
import { Trophy, Calendar, Users, Award } from 'lucide-react';
import { useEffect, useState } from 'react';
import EarlyAccessForm from '@/components/ui/early-access-form';

const ComingSoonSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-08-11T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const contestFeatures = [
    { icon: Trophy, title: "Grand Prize", desc: "$1,000 + Featured Exhibition" },
    { icon: Users, title: "Community Choice", desc: "Voted by our growing community" },
    { icon: Award, title: "Categories", desc: "Multiple themes and styles" },
    { icon: Calendar, title: "Duration", desc: "30 days to create your masterpiece" }
  ];

  return (
    <section id="contest" className="py-16 sm:py-20 px-5 sm:px-6" style={{ backgroundColor: colors.card }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 relative"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full border-4 border-[#8B2635] rounded-full relative overflow-hidden bg-gradient-to-br from-[#8B2635]/10 to-[#D4A574]/10">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#8B2635] to-[#D4A574] opacity-20"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Trophy className="w-8 h-8 sm:w-12 sm:h-12 text-[#8B2635]" />
              </div>
            </div>
          </motion.div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
            style={{ fontFamily: fonts.heading }}
          >
            One Frame Wonder
          </h2>

          <p
            className="text-lg sm:text-xl mb-6 sm:mb-8 text-[#6B5B4F] max-w-2xl mx-auto"
            style={{ fontFamily: fonts.body }}
          >
            Our inaugural contest launches August 11th, 2025. Get ready to draw silence.
          </p>

          <motion.blockquote
            className="text-xl sm:text-2xl lg:text-3xl italic mb-8 sm:mb-12 text-[#8B2635] max-w-3xl mx-auto"
            style={{ fontFamily: fonts.accent }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {`"When everyone draws noise, draw silence."`}
          </motion.blockquote>
        </motion.div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16 max-w-2xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#8B2635] to-[#A52A3A] rounded-2xl flex items-center justify-center mb-2 sm:mb-3 mx-auto shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span
                  className="text-xl sm:text-2xl font-bold text-white"
                  style={{ fontFamily: fonts.button }}
                >
                  {item.value.toString().padStart(2, '0')}
                </span>
              </motion.div>
              <span
                className="text-xs sm:text-sm text-[#6B5B4F] font-medium"
                style={{ fontFamily: fonts.body }}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Contest Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {contestFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: colors.background }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2 text-[#2C1810]" style={{ fontFamily: fonts.heading }}>
                {feature.title}
              </h3>
              <p className="text-sm text-[#6B5B4F]" style={{ fontFamily: fonts.body }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl flex items-center space-x-3 mx-auto"
            style={{ fontFamily: fonts.button }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-5 h-5" />
            <span>Notify Me When Contest Opens</span>
          </motion.button>
        </motion.div>
      </div>

      <EarlyAccessForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
};

export default ComingSoonSection;