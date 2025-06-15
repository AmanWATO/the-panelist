"use client";

import { colors, fonts } from "@/utils/theme";
import { AnimatePresence, motion } from "framer-motion";
import {  Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/the_panelist.png"
            alt="The Panelist Logo"
            width={48}
            height={48}
            className="rounded-[10px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
          />
          <span
            className="text-2xl font-bold text-[#1E1E1E]"
            style={{ fontFamily: fonts.heading }}
          >
            The Panelist
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Philosophy", "Artists", "Gallery", "Community"].map(
            (item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors duration-300"
                style={{ fontFamily: fonts.body }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            )
          )}
          <motion.button
            className="bg-[#6E1A2C] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300"
            style={{ fontFamily: fonts.button }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Early
          </motion.button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-[#F1EDE5] border-t border-[#6E1A2C]/20 p-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {["Philosophy", "Artists", "Gallery", "Community"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#7A7A7A] hover:text-[#6E1A2C] transition-colors duration-300"
                  style={{ fontFamily: fonts.body }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                className="bg-[#6E1A2C] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 w-full"
                style={{ fontFamily: fonts.button }}
              >
                Join Early
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
