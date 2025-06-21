"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { Trophy, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import EarlyAccessForm from "@/components/ui/early-access-form";

export default function ContestPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-08-11T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const rules = [
    "Single panel artwork only",
    "Original work created specifically for the contest",
    "Include a subtle, meaningful caption",
    "Submit in high resolution (minimum 2000px)",
    "One entry per artist",
    "Must be submitted by contest deadline",
  ];

  return (
    <>
      <div className="min-h-screen max-md:pt-10 pt-20">
        {/* Hero Section */}
        <section
          className="py-16 max-md:py-14 px-5 sm:px-6"
          style={{ backgroundColor: colors.background }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="w-24 h-24 mx-auto mb-8 max-md:mb-4 relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-full border-4 border-[#8B2635] rounded-full relative overflow-hidden bg-gradient-to-br from-[#8B2635]/10 to-[#D4A574]/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Trophy className="w-12 h-12 text-[#8B2635]" />
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
              style={{ fontFamily: fonts.heading }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              One Frame Wonder
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-[#6B5B4F] max-w-3xl mx-auto mb-8 max-md:mb-4"
              style={{ fontFamily: fonts.body }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our inaugural contest launches August 11th, 2025. Get ready to
              draw silence.
            </motion.p>

            <motion.blockquote
              className="text-2xl lg:text-3xl italic mb-8 max-md:mb-0 text-[#8B2635] max-w-3xl mx-auto"
              style={{ fontFamily: fonts.accent }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {`"When everyone draws noise, draw silence."`}
            </motion.blockquote>
          </div>
        </section>

        {/* Countdown Timer */}
        <section
          className="py-16 max-md:py-12 px-5 sm:px-6"
          style={{ backgroundColor: colors.card }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4 text-[#2C1810]"
                style={{ fontFamily: fonts.heading }}
              >
                Contest Begins In
              </h2>
              <p
                className="text-lg text-[#6B5B4F]"
                style={{ fontFamily: fonts.body }}
              >
                Mark your calendars for August 11th, 2025
              </p>
            </motion.div>

            <div className="grid grid-cols-4 sm:grid-cols-4 gap-1 sm:gap-8 max-md:mb-10 mb-12">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#8B2635] to-[#A52A3A] rounded-2xl flex items-center justify-center mb-3 mx-auto shadow-lg">
                    <span
                      className="text-xl sm:text-2xl font-bold text-white"
                      style={{ fontFamily: fonts.button }}
                    >
                      {item.value.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span
                    className="text-xs sm:text-sm text-[#6B5B4F] font-medium"
                    style={{ fontFamily: fonts.body }}
                  >
                    {item.label}
                  </span>
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
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl flex items-center space-x-3 mx-auto"
                style={{ fontFamily: fonts.button }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                <span>Notify Me When Contest Opens</span>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Prizes Section */}
        <section
          className="py-16 max-md:py-12 px-5 sm:px-6"
          style={{ backgroundColor: colors.background }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center max-md:mb-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4 text-[#2C1810]"
                style={{ fontFamily: fonts.heading }}
              >
                Prizes & Recognition
              </h2>
              <p
                className="text-lg text-[#6B5B4F]"
                style={{ fontFamily: fonts.body }}
              >
                Celebrating excellence in single-panel artistry
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 max-md:p-6 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-2xl max-md:text-xl font-bold mb-4 text-[#2C1810]"
                style={{ fontFamily: fonts.heading }}
              >
                Recognition & Exhibition
              </h3>
              <p
                className="text-[#6B5B4F] max-md:text-sm leading-relaxed"
                style={{ fontFamily: fonts.body }}
              >
                {`Selected works will be featured in our permanent exhibition,
                providing ongoing exposure to our growing community of art
                enthusiasts. Winners receive recognition as featured panelists
                and become part of The Panelist's curated collection.`}
              </p>
            </motion.div>

            {/* Contest Features */}
            {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {contestFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: colors.card }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2 text-[#2C1810]"
                    style={{ fontFamily: fonts.heading }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm text-[#6B5B4F]"
                    style={{ fontFamily: fonts.body }}
                  >
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div> */}
          </div>
        </section>

        {/* Rules Section */}
        <section
          className="py-16 max-md:py-12 px-5 sm:px-6"
          style={{ backgroundColor: colors.card }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12 max-md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4 text-[#2C1810]"
                style={{ fontFamily: fonts.heading }}
              >
                Contest Rules
              </h2>
              <p
                className="text-lg text-[#6B5B4F]"
                style={{ fontFamily: fonts.body }}
              >
                Simple guidelines for a fair and inspiring competition
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-md:gap-8">
              {rules.map((rule, index) => (
                <motion.div
                  key={index}
                  className="flex items-start max-md:items-center space-x-3 p-4 rounded-lg max-md:shadow-lg"
                  style={{ backgroundColor: colors.background }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 max-md:h-8 max-md:w-8 bg-[#8B2635] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs max-md:text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <p
                    className="text-[#6B5B4F]"
                    style={{ fontFamily: fonts.body }}
                  >
                    {rule}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <EarlyAccessForm isOpen={showForm} onClose={() => setShowForm(false)} />
      </div>
    </>
  );
}
