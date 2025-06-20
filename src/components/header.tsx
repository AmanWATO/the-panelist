"use client";

import { fonts } from "@/utils/theme";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Feather, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EarlyAccessForm from "./ui/early-access-form";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const navItems = [
    { name: "Philosophy", href: "/philosophy" },
    { name: "Artists", href: "/artists" },
    { name: "Blog", href: "/blog" },
    { name: "Contest", href: "/contest" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 bg-[#FEFCF8]`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
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
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        </Link>

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
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B2635] to-[#D4A574] group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
          <motion.button
            className="bg-gradient-to-r cursor-pointer from-[#8B2635] to-[#A52A3A] text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-medium flex items-center space-x-2"
            style={{ fontFamily: fonts.button }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
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
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#E8E0D6]">
                  <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 border-2 border-[#8B2635] rounded-lg flex items-center justify-center">
                      <Palette className="w-5 h-5 text-[#8B2635]" />
                    </div>
                    <span
                      className="text-lg sm:text-xl font-bold text-[#2C1810]"
                      style={{ fontFamily: fonts.heading }}
                    >
                      The Panelist
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-[#F8F5F0] rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-[#2C1810]" />
                  </button>
                </div>

                <nav className="flex-1 p-4 sm:p-6">
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-3 px-4 text-base sm:text-lg font-medium text-[#2C1810] hover:bg-[#F8F5F0] rounded-lg transition-colors"
                        style={{ fontFamily: fonts.body }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <EarlyAccessForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </motion.header>
  );
};

export default Header;
