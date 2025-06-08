/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { colors, fonts } from "@/utils/theme";
import { motion } from "framer-motion";
import { Frame } from "lucide-react";
import { useState } from "react";

const SamplePanelsSection = () => {
  const [selectedPanel, setSelectedPanel] = useState<{
    id: number;
    title: string;
    artist: string;
    caption: string;
  } | null>(null);

  const samplePanels = [
    {
      id: 1,
      title: "Untitled #1",
      artist: "Anonymous",
      caption: "Sometimes the loudest conversations happen in silence.",
    },
    {
      id: 2,
      title: "Untitled #2",
      artist: "Anonymous",
      caption: "What remains when everything else fades?",
    },
    {
      id: 3,
      title: "Untitled #3",
      artist: "Anonymous",
      caption: "The space between words holds the deepest truths.",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 px-6"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 text-[#1E1E1E]"
            style={{ fontFamily: fonts.heading }}
          >
            See the Silence
          </h2>
          <p
            className="text-xl text-[#7A7A7A] max-w-3xl mx-auto"
            style={{ fontFamily: fonts.body }}
          >
            {`A preview of what's to come. Real artwork, subtle captions, infinite interpretations.`}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {samplePanels.map((panel, index) => (
            <motion.div
              key={panel.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedPanel(panel)}
            >
              <div className="aspect-square bg-gradient-to-br from-[#6E1A2C]/20 to-[#6E1A2C]/5 rounded-2xl p-8 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-[#6E1A2C]/10"
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-2 border-[#6E1A2C] rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Frame className="w-8 h-8 text-[#6E1A2C]" />
                    </div>
                    <p
                      className="text-sm text-[#7A7A7A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontFamily: fonts.body }}
                    >
                      {panel.title}
                    </p>
                  </div>
                </div>
              </div>
              <motion.div
                className="mt-4 p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: colors.card }}
              >
                <p
                  className="text-sm italic text-[#7A7A7A]"
                  style={{ fontFamily: fonts.heading }}
                >
                  {`"${panel.caption}"`}
                </p>
              </motion.div>
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
            className="border-2 border-[#6E1A2C] text-[#6E1A2C] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#6E1A2C] hover:text-white transition-all duration-300"
            style={{ fontFamily: fonts.button }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Want Yours Featured Here?
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SamplePanelsSection;
