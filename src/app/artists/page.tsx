"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { Frame, Palette, Sparkles, Users, Star, Award } from "lucide-react";
import EarlyAccessForm from "@/components/ui/early-access-form";
import { useState } from "react";

export default function ArtistsPage() {
  const [showForm, setShowForm] = useState(false);

  const benefits = [
    { icon: Frame, title: "Feature on Homepage", desc: "Prime visibility for your work" },
    { icon: Sparkles, title: "Social Amplification", desc: "We echo your whispers loudly" },
    { icon: Users, title: "Portfolio Links", desc: "Permanent showcase for your art" },
    { icon: Palette, title: "Community Sessions", desc: "Collaborative brainstorming circles" }
  ];

  const featuredArtists = [
    {
      name: "Sarah Chen",
      specialty: "Minimalist Portraits",
      description: "Master of emotional subtlety in single frames",
      panels: 24
    },
    {
      name: "Marcus Rivera",
      specialty: "Abstract Narratives",
      description: "Storytelling through geometric simplicity",
      panels: 18
    },
    {
      name: "Elena Vasquez",
      specialty: "Urban Silence",
      description: "Finding quiet moments in city chaos",
      panels: 31
    }
  ];

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
            <Palette className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
            style={{ fontFamily: fonts.heading }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            You Create. We Echo.
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-[#6B5B4F] max-w-3xl mx-auto"
            style={{ fontFamily: fonts.body }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            This is not just a gallery—it's a loud whisper for your work. We amplify the quiet voices that deserve to be heard.
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: colors.card }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#2C1810]" style={{ fontFamily: fonts.heading }}>
              What We Offer Artists
            </h2>
            <p className="text-lg text-[#6B5B4F]" style={{ fontFamily: fonts.body }}>
              More than exposure—a platform for artistic growth and community connection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl hover:shadow-md transition-all duration-300"
                style={{ backgroundColor: colors.background }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-[#2C1810]" style={{ fontFamily: fonts.heading }}>
                    {benefit.title}
                  </h3>
                  <p className="text-[#6B5B4F]" style={{ fontFamily: fonts.body }}>
                    {benefit.desc}
                  </p>
                </div>
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
              className="bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300"
              style={{ fontFamily: fonts.button }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join as Artist
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#2C1810]" style={{ fontFamily: fonts.heading }}>
              Featured Artists
            </h2>
            <p className="text-lg text-[#6B5B4F]" style={{ fontFamily: fonts.body }}>
              Meet the masters of minimalist storytelling.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArtists.map((artist, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: colors.card }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#2C1810]" style={{ fontFamily: fonts.heading }}>
                  {artist.name}
                </h3>
                <p className="text-[#8B2635] font-medium mb-3" style={{ fontFamily: fonts.body }}>
                  {artist.specialty}
                </p>
                <p className="text-[#6B5B4F] mb-4" style={{ fontFamily: fonts.body }}>
                  {artist.description}
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-[#6B5B4F]">
                  <Award className="w-4 h-4" />
                  <span>{artist.panels} panels featured</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EarlyAccessForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
}