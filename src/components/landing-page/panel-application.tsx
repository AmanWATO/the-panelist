"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { Award, Trophy, Sparkles } from "lucide-react";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const PanelApplication = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "panelist"), {
        email: email.trim(),
        submittedAt: serverTimestamp(),
      });
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Failed to submit panelist application:", error);
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  const features = [
    {
      icon: Award,
      title: "Permanent Exhibition",
      description:
        "Your selected panels will be permanently featured on our artist panel section",
    },
    {
      icon: Trophy,
      title: "Panelist Status",
      description:
        "Become a recognized member of The Panelist artist community",
    },
    {
      icon: Sparkles,
      title: "Ongoing Exposure",
      description:
        "Continuous showcase of your work to our growing art-loving audience",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: colors.card }}
      id="panel-application"
    >
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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-8"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Award className="w-10 h-10 text-white" />
          </motion.div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
            style={{ fontFamily: fonts.heading }}
          >
            Become a Panelist Artist
          </h2>

          <p
            className="text-lg sm:text-xl text-[#6B5B4F] max-w-3xl mx-auto mb-8"
            style={{ fontFamily: fonts.body }}
          >
            Join our curated community of single-panel artists. Submit your work
            to be featured as a permanent panelist and showcase your art to our
            growing audience.
          </p>

          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#8B2635]/10 to-[#D4A574]/10 px-6 py-3 rounded-full border border-[#8B2635]/20"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-[#8B2635]" />
            <span
              className="text-[#8B2635] font-medium"
              style={{ fontFamily: fonts.body }}
            >
              Rolling Applications - Apply Anytime
            </span>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-xl flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3
                className="text-xl font-bold mb-4 text-[#2C1810]"
                style={{ fontFamily: fonts.heading }}
              >
                {feature.title}
              </h3>
              <p
                className="text-[#6B5B4F] leading-relaxed"
                style={{ fontFamily: fonts.body }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Application Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-12 shadow-xl">
            <h3
              className="text-2xl font-bold mb-6 text-center text-[#2C1810]"
              style={{ fontFamily: fonts.heading }}
            >
              Apply to Become a Panelist
            </h3>

            {isSubmitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <p
                  className="text-lg font-medium text-green-600"
                  style={{ fontFamily: fonts.body }}
                >
                  {`Thank you! We'll notify you when submissions open.`}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#6B5B4F] mb-2"
                    style={{ fontFamily: fonts.body }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                   className="w-full pl-4 pr-4 py-2.5 border border-[#E8E0D6] rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-[#8B2635] focus:outline-none transition-all text-[#2C1810] placeholder-[#9B8B7F]"
                    placeholder="your.email@example.com"
                    required
                    style={{ fontFamily: fonts.body }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3"
                  style={{ fontFamily: fonts.button }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Award className="w-5 h-5" />
                  <span>Apply to Become a Panelist</span>
                </motion.button>
              </form>
            )}

            <p
              className="text-xs text-[#6B5B4F] text-center mt-4"
              style={{ fontFamily: fonts.body }}
            >
              {`We'll email you with application guidelines and submission process
              details.`}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PanelApplication;
