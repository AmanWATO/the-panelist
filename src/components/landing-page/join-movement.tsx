'use client'

import { colors, fonts } from "@/utils/theme";
import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";

const JoinMovementSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  interface FormEvent {
    preventDefault: () => void;
  }

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <section
      id="community"
      className="py-20 px-6"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 text-[#1E1E1E]"
            style={{ fontFamily: fonts.heading }}
          >
            Join the Movement
          </h2>

          <p
            className="text-3xl italic mb-8 text-[#6E1A2C]"
            style={{ fontFamily: fonts.heading }}
          >
            Draw. Whisper. Repeat.
          </p>

          <p
            className="text-xl mb-12 text-[#7A7A7A] max-w-2xl mx-auto"
            style={{ fontFamily: fonts.body }}
          >
            Early access, exclusive drops, and panel prompts delivered to your
            inbox. Be part of the quiet revolution.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-full border-2 border-[#6E1A2C] focus:outline-none focus:ring-2 focus:ring-[#6E1A2C] focus:border-transparent"
                style={{ fontFamily: fonts.body, backgroundColor: colors.card }}
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                type="submit"
                className="bg-[#6E1A2C] text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
                style={{ fontFamily: fonts.button }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? "Joined!" : "Get Notified"}
              </motion.button>
            </div>
          </motion.form>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#"
              className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinMovementSection;
