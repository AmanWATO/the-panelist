
"use client"

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import Script from "next/script";

function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is The Panelist?",
      answer: "The Panelist is a curated platform dedicated to single-panel art and minimalist visual storytelling. We showcase artists who understand the power of restraint and create art that invites contemplation."
    },
    {
      question: "How do I submit my art to The Panelist?",
      answer: "You can apply to become a panelist through our application form. We review all submissions based on alignment with our philosophy of minimalist, thoughtful art. Selected artists become part of our permanent exhibition."
    },
    {
      question: "What makes art suitable for The Panelist?",
      answer: "We look for single-panel art that demonstrates restraint, emotional depth, and layered meaning. The work should invite contemplation and allow viewers to bring their own interpretation to complete the story."
    },
    {
      question: "Is there a cost to submit or view art?",
      answer: "Viewing art on The Panelist is completely free. There is no cost to submit your work for consideration to become a panelist."
    },
    {
      question: "How is art selected for the platform?",
      answer: "Our curation team reviews submissions based on artistic quality, alignment with our minimalist philosophy, and the work's ability to invite thoughtful engagement. We prioritize depth over popularity."
    },
    {
      question: "Can I share or use art from The Panelist?",
      answer: "All art remains the intellectual property of the original artists. For usage rights or licensing inquiries, please contact the artist directly or reach out to us for assistance."
    },
    {
      question: "How often is new art added to the platform?",
      answer: "We add new art regularly as we review and select outstanding submissions. Quality always takes precedence over quantity in our curation process."
    },
    {
      question: "Can I follow specific artists on the platform?",
      answer: "Currently, our platform focuses on the art itself rather than social media features. However, you can explore all work by specific artists in our artist section."
    },
    {
      question: "What is the One Wonder Frame competition?",
      answer: "The One Wonder Frame is our periodic competition celebrating exceptional single-panel art. Details about rules, submission deadlines, and themes are announced on our platform and blog."
    },
    {
      question: "How can I support The Panelist?",
      answer: "You can support us by engaging thoughtfully with the art, sharing our platform with fellow art lovers, and participating in our community discussions. Your mindful engagement is the greatest support we can receive."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <HelpCircle className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
            style={{ fontFamily: fonts.heading }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-[#6B5B4F] max-w-3xl mx-auto"
            style={{ fontFamily: fonts.body }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Everything you need to know about The Panelist platform and community.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ backgroundColor: colors.card }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-[#8B2635]/10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#8B2635]/5 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3
                    className="text-lg font-semibold text-[#2C1810] pr-4"
                    style={{ fontFamily: fonts.heading }}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#8B2635] flex-shrink-0" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p
                      className="text-[#6B5B4F] leading-relaxed"
                      style={{ fontFamily: fonts.body }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            className="mt-16 text-center p-8 bg-gradient-to-r from-[#8B2635]/10 to-[#D4A574]/10 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl font-bold mb-4 text-[#2C1810]"
              style={{ fontFamily: fonts.heading }}
            >
              Still Have Questions?
            </h3>
            <p
              className="text-[#6B5B4F] mb-6"
              style={{ fontFamily: fonts.body }}
            >
              We're here to help. Reach out to us with any questions about our platform, community, or submission process.
            </p>
            <motion.button
              className="bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              style={{ fontFamily: fonts.button }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'mailto:hello@thepanelist.com'}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}

export default FAQPage;
