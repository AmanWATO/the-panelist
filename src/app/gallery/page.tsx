"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { Frame, Eye, Heart, MessageCircle, Filter } from "lucide-react";
import { useState } from "react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPanel, setSelectedPanel] = useState<any>(null);

  const categories = ["All", "Minimalist", "Abstract", "Portrait", "Urban", "Nature"];

  const samplePanels: any[] = [];

  const filteredPanels = selectedCategory === "All" 
    ? samplePanels 
    : samplePanels.filter(panel => panel.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Frame className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
            style={{ fontFamily: fonts.heading }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Gallery
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-[#6B5B4F] max-w-3xl mx-auto"
            style={{ fontFamily: fonts.body }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A curated collection of single-panel masterpieces. Each frame tells a story, invites interpretation, and celebrates the art of restraint.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6" style={{ backgroundColor: colors.card }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-[#6B5B4F]" />
              <span className="text-[#6B5B4F] font-medium" style={{ fontFamily: fonts.body }}>
                Filter by category:
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#8B2635] text-white"
                    : "bg-white text-[#6B5B4F] hover:bg-[#8B2635] hover:text-white"
                }`}
                style={{ fontFamily: fonts.body }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-6xl mx-auto">
          {filteredPanels.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Frame className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#2C1810]" style={{ fontFamily: fonts.heading }}>
                Gallery Coming Soon
              </h3>
              <p className="text-[#6B5B4F] mb-8 max-w-md mx-auto" style={{ fontFamily: fonts.body }}>
                We're preparing to showcase amazing single-panel artworks. Submit your panel for the One Wonder Frame competition!
              </p>
              <motion.button
                className="bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                style={{ fontFamily: fonts.button }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply for Competition
              </motion.button>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPanels.map((panel, index) => (
              <motion.div
                key={panel.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPanel(panel)}
              >
                <div className="aspect-square bg-gradient-to-br from-[#8B2635]/20 to-[#D4A574]/20 rounded-2xl p-8 relative overflow-hidden mb-4">
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#D4A574]/90 text-[#2C1810] px-3 py-1 rounded-full text-xs font-medium">
                      {panel.category}
                    </span>
                  </div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 border-2 border-[#8B2635] rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <Frame className="w-8 h-8 text-[#8B2635]" />
                      </div>
                      <p className="text-sm text-[#6B5B4F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: fonts.body }}>
                        {panel.title}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: colors.card }}>
                  <h3 className="font-bold text-[#2C1810] mb-2" style={{ fontFamily: fonts.heading }}>
                    {panel.title}
                  </h3>
                  <p className="text-sm text-[#6B5B4F] mb-2" style={{ fontFamily: fonts.body }}>
                    by {panel.artist}
                  </p>
                  <p className="text-sm italic text-[#8B2635] mb-4" style={{ fontFamily: fonts.accent }}>
                    "{panel.caption}"
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-[#6B5B4F]">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{panel.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{panel.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{panel.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}