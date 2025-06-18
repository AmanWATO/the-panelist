"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import Image from "next/image";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="py-16 px-6 border-t border-[#6E1A2C]/20"
      style={{ backgroundColor: colors.card }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-16">
        {/* Left: Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="flex items-center space-x-3 mb-4 md:mb-6">
            <Image
              src="/the_panelist.png"
              alt="The Panelist Logo"
              width={48}
              height={48}
              className="sm:w-14 sm:h-14 rounded-xl drop-shadow-lg"
            />
            <span
              className="text-xl sm:text-2xl font-bold text-[#1E1E1E]"
              style={{ fontFamily: fonts.heading }}
            >
              The Panelist
            </span>
          </div>

          <p
            className="text-[#7A7A7A] text-sm sm:text-base leading-relaxed max-w-sm px-2 md:px-0"
            style={{ fontFamily: fonts.body }}
          >
            Where art speaks in silence. A platform for minimalist storytelling
            and single-panel mastery. Join the quiet revolution.
          </p>
        </motion.div>

        {/* Right: Contact & Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h4
            className="text-lg font-semibold text-[#1E1E1E] mb-4"
            style={{ fontFamily: fonts.heading }}
          >
            Contact
          </h4>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start mb-3">
            <Mail className="w-5 h-5 text-[#6E1A2C] mr-0 sm:mr-2 mb-1 sm:mb-0" />
            <a
              href="mailto:thepanelist25@gmail.com"
              className="text-[#7A7A7A] text-sm hover:text-[#6E1A2C] transition-colors break-all"
              style={{ fontFamily: fonts.body }}
            >
              thepanelist25@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-4 mt-2">
            <a
              href="https://instagram.com/YOUR_INSTAGRAM_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors p-2 rounded-full hover:bg-[#F8F5F0]"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 border-t border-[#6E1A2C]/10 pt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p
          className="text-[#7A7A7A] text-sm"
          style={{ fontFamily: fonts.body }}
        >
          © 2025 The Panelist. All rights reserved. Made with silence in mind.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
