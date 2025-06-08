"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { Frame } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="py-12 px-6 border-t border-[#6E1A2C]/20"
      style={{ backgroundColor: colors.card }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Frame className="w-6 h-6 text-[#6E1A2C]" />
              <span
                className="text-xl font-bold text-[#1E1E1E]"
                style={{ fontFamily: fonts.heading }}
              >
                The Panelist
              </span>
            </div>
            <p
              className="text-[#7A7A7A] text-sm"
              style={{ fontFamily: fonts.body }}
            >
              Where art speaks in silence. A platform for minimalist
              storytelling and single-panel mastery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4
              className="font-bold mb-4 text-[#1E1E1E]"
              style={{ fontFamily: fonts.heading }}
            >
              Philosophy
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ fontFamily: fonts.body }}
            >
              <li>
                <a
                  href="#"
                  className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors"
                >
                  The Manifesto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors"
                >
                  Minimalist Art
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors"
                >
                  Single Panel Guide
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4
              className="font-bold mb-4 text-[#1E1E1E]"
              style={{ fontFamily: fonts.heading }}
            >
              Community
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ fontFamily: fonts.body }}
            >
              <li>
                <a
                  href="#"
                  className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors"
                >
                  Artist Portal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors"
                >
                  Brainstorm Sessions
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4
              className="font-bold mb-4 text-[#1E1E1E]"
              style={{ fontFamily: fonts.heading }}
            >
              Connect
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ fontFamily: fonts.body }}
            >
              <li>
                <a
                  href="#"
                  className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-[#6E1A2C]/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p
            className="text-[#7A7A7A] text-sm mb-4 md:mb-0"
            style={{ fontFamily: fonts.body }}
          >
            © 2025 The Panelist. All rights reserved. Made with silence in mind.
          </p>
          <div
            className="flex space-x-6 text-sm"
            style={{ fontFamily: fonts.body }}
          >
            <a
              href="#"
              className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors"
            >
              Support
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
