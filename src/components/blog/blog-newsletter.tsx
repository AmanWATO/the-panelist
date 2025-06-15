"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { Mail, Send, BookOpen } from "lucide-react";
import { useState } from "react";

const BlogNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail("");
    
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section 
      className="py-16 px-4 sm:px-6" 
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#8B2635]/5 to-[#D4A574]/5 rounded-3xl p-8 sm:p-12 text-center border border-[#8B2635]/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <BookOpen className="w-8 h-8 text-white" />
          </motion.div>

          <h2 
            className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
            style={{ fontFamily: fonts.heading }}
          >
            Never Miss a Story
          </h2>

          <p 
            className="text-lg text-[#6B5B4F] mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: fonts.body }}
          >
            Get our latest insights on minimalist art, artist spotlights, and creative inspiration delivered to your inbox weekly.
          </p>

          {!isSubscribed ? (
            <motion.form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B5B4F]" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-[#E8E0D6] rounded-full focus:ring-2 focus:ring-[#8B2635] focus:border-transparent transition-all bg-white"
                    style={{ fontFamily: fonts.body }}
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  style={{ fontFamily: fonts.button }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Subscribe</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="text-white text-2xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  ✓
                </motion.div>
              </motion.div>
              <h3 className="text-xl font-bold text-[#2C1810] mb-2" style={{ fontFamily: fonts.heading }}>
                Welcome to the Community!
              </h3>
              <p className="text-[#6B5B4F]" style={{ fontFamily: fonts.body }}>
                You'll receive our next story in your inbox soon.
              </p>
            </motion.div>
          )}

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-[#6B5B4F]">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#8B2635] rounded-full"></div>
              <span>Weekly stories</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#D4A574] rounded-full"></div>
              <span>Artist spotlights</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#8B2635] rounded-full"></div>
              <span>No spam, ever</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogNewsletter;