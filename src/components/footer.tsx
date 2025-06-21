"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import Image from "next/image";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="py-16 max-md:py-14 max-md:px-5 px-6 border-t border-[#6E1A2C]/20"
      style={{ backgroundColor: colors.card }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-16 max-md:gap-10">
        {/* Left: Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Image
              src="/the_panelist.png"
              alt="The Panelist Logo"
              width={56}
              height={56}
              className="rounded-[12px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            />
            <span
              className="text-2xl font-bold text-[#1E1E1E]"
              style={{ fontFamily: fonts.heading }}
            >
              The Panelist
            </span>
          </div>

          <p
            className="text-[#7A7A7A] text-sm leading-relaxed max-w-sm"
            style={{ fontFamily: fonts.body }}
          >
            Where art speaks in silence. A platform for minimalist storytelling
            and single-panel mastery. Join the quiet revolution.
          </p>
        </motion.div>

        {/* Middle: Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col items-start"
        >
          <h4
            className="text-lg font-semibold text-[#1E1E1E] mb-4"
            style={{ fontFamily: fonts.heading }}
          >
            Legal
          </h4>
          <div className="space-y-2">
            <a
              href="/terms"
              className="text-[#7A7A7A] text-sm hover:text-[#6E1A2C] transition-colors block"
              style={{ fontFamily: fonts.body }}
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy"
              className="text-[#7A7A7A] text-sm hover:text-[#6E1A2C] transition-colors block"
              style={{ fontFamily: fonts.body }}
            >
              Privacy Policy
            </a>
            <a
              href="/faq"
              className="text-[#7A7A7A] text-sm hover:text-[#6E1A2C] transition-colors block"
              style={{ fontFamily: fonts.body }}
            >
              FAQ
            </a>
          </div>
        </motion.div>

        {/* Right: Contact & Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-start"
        >
          <h4
            className="text-lg font-semibold text-[#1E1E1E] mb-4"
            style={{ fontFamily: fonts.heading }}
          >
            Contact
          </h4>

          <div className="flex items-center mb-3">
            <Mail className="w-5 h-5 text-[#6E1A2C] mr-2" />
            <a
              href="mailto:thepanelist25@gmail.com"
              className="text-[#7A7A7A] text-sm hover:text-[#6E1A2C] transition-colors"
              style={{ fontFamily: fonts.body }}
            >
              thepanelist25@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4 mt-2">
            <a
              href="https://instagram.com/thepanelist.art"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors"
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