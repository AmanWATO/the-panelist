
"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { Users, Award, Palette, Star } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

export default function ArtistsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Artist Panel Exhibition",
    "description": "Discover our curated collection of single-panel artists. When you apply for our panel exhibition program, your work will be featured here for our growing community to appreciate and connect with.",
    "url": "https://thepanelist.com/artists",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Featured Artists",
      "description": "Curated collection of exceptional single-panel artists"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Panelist",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thepanelist.com/the_panelist.png"
      }
    }
  };

  return (
    <>
      <Script
        id="artists-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: colors.background }}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-[#8B2635]/20 to-[#D4A574]/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
            style={{ fontFamily: fonts.heading }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Artist Panel Exhibition
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-[#6B5B4F] max-w-3xl mx-auto mb-12"
            style={{ fontFamily: fonts.body }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our curated collection of single-panel artists. When you apply for our panel exhibition program, your work will be featured here for our growing community to appreciate and connect with.
          </motion.p>
        </div>
      </section>

      {/* Exhibition Info Section */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: colors.card }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6 text-[#2C1810]"
                style={{ fontFamily: fonts.heading }}
              >
                How to Join Our Panel Exhibition
              </h2>
              <p
                className="text-[#6B5B4F] mb-6 leading-relaxed"
                style={{ fontFamily: fonts.body }}
              >
                Our panel exhibition showcases exceptional single-panel artists who embody the philosophy of minimalist storytelling. Artists featured here represent the finest in contemporary single-panel art.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#8B2635] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-1" style={{ fontFamily: fonts.heading }}>
                      Submit Your Application
                    </h3>
                    <p className="text-[#6B5B4F] text-sm" style={{ fontFamily: fonts.body }}>
                      Apply through our panel application section with your best single-panel work
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#8B2635] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-1" style={{ fontFamily: fonts.heading }}>
                      Curation Review
                    </h3>
                    <p className="text-[#6B5B4F] text-sm" style={{ fontFamily: fonts.body }}>
                      Our team reviews submissions for artistic quality, originality, and alignment with our philosophy
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#8B2635] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-1" style={{ fontFamily: fonts.heading }}>
                      Featured Exhibition
                    </h3>
                    <p className="text-[#6B5B4F] text-sm" style={{ fontFamily: fonts.body }}>
                      Selected artists are featured permanently in our panel exhibition with ongoing exposure
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl">
                <div className="text-center">
                  <Award className="w-16 h-16 text-[#8B2635] mx-auto mb-6" />
                  <h3
                    className="text-2xl font-bold mb-4 text-[#2C1810]"
                    style={{ fontFamily: fonts.heading }}
                  >
                    Exhibition Benefits
                  </h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-[#D4A574]" />
                      <span className="text-[#6B5B4F]" style={{ fontFamily: fonts.body }}>
                        Permanent feature placement
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-[#D4A574]" />
                      <span className="text-[#6B5B4F]" style={{ fontFamily: fonts.body }}>
                        Artist profile and biography
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-[#D4A574]" />
                      <span className="text-[#6B5B4F]" style={{ fontFamily: fonts.body }}>
                        Community recognition
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-[#D4A574]" />
                      <span className="text-[#6B5B4F]" style={{ fontFamily: fonts.body }}>
                        Ongoing exposure to art enthusiasts
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Palette className="w-16 h-16 text-[#8B2635] mx-auto mb-6" />
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 text-[#2C1810]"
              style={{ fontFamily: fonts.heading }}
            >
              Artist Showcase Coming Soon
            </h2>
            <p
              className="text-lg text-[#6B5B4F] mb-8 leading-relaxed"
              style={{ fontFamily: fonts.body }}
            >
              We're currently building our inaugural panel exhibition. The first featured artists will appear here once we begin accepting applications. Be among the first to join our curated community of exceptional single-panel artists.
            </p>
            
            <motion.button
              className="bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-3 mx-auto"
              style={{ fontFamily: fonts.button }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.querySelector('#panel-application')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Award className="w-5 h-5" />
              <span>Apply for Panel Exhibition</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
