"use client";

import { colors, fonts } from "@/utils/theme";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Feather } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Artists", href: "#artists" },
    { name: "Gallery", href: "#gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contest", href: "#contest" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/90 shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center space-x-2 sm:space-x-3"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative">
            <Image
              src="/the_panelist.png"
              alt="The Panelist Logo"
              width={40}
              height={40}
              className="sm:w-12 sm:h-12 rounded-lg shadow-lg"
            />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
            style={{ fontFamily: fonts.heading }}
          >
            The Panelist
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="relative text-[#6B5B4F] hover:text-[#8B2635] transition-colors duration-300 font-medium group"
                style={{ fontFamily: fonts.body }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B2635] to-[#D4A574] group-hover:w-full transition-all duration-300"
                />
              </Link>
            </motion.div>
          ))}
          <motion.button
            className="bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-medium flex items-center space-x-2"
            style={{ fontFamily: fonts.button }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Feather className="w-4 h-4" />
            <span>Join Early</span>
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden p-2 rounded-lg hover:bg-[#F8F5F0] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-[#8B2635]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-[#8B2635]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#E8E0D6] shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block text-[#6B5B4F] hover:text-[#8B2635] transition-colors duration-300 font-medium py-2"
                    style={{ fontFamily: fonts.body }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                className="w-full bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-6 py-3 rounded-full font-medium flex items-center justify-center space-x-2 mt-4"
                style={{ fontFamily: fonts.button }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Feather className="w-4 h-4" />
                <span>Join Early</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;