"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User, Palette, Send } from "lucide-react";
import { useState } from "react";
import {  fonts } from "@/utils/theme";

interface EarlyAccessFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const EarlyAccessForm = ({ isOpen, onClose }: EarlyAccessFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    interests: [] as string[],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roles = ["Artist", "Art Enthusiast", "Collector", "Curator", "Student", "Other"];
  const interests = ["Single Panel Art", "Minimalist Design", "Visual Storytelling", "Art Contests", "Community"];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({ name: "", email: "", role: "", interests: [] });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Form Container */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", bounce: 0.3 }}
          >
            {/* Header */}
            <div className="p-6 border-b border-[#E8E0D6]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-lg flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#2C1810]" style={{ fontFamily: fonts.heading }}>
                      Join Early Access
                    </h2>
                    <p className="text-sm text-[#6B5B4F]" style={{ fontFamily: fonts.body }}>
                      Be part of the quiet revolution
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 cursor-pointer hover:bg-[#F8F5F0] rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-[#6B5B4F]" />
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-2" style={{ fontFamily: fonts.body }}>
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B5B4F]" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full pl-10 pr-4 py-2.5 border border-[#E8E0D6] rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-transparent transition-all placeholder-[#6B5B4F]"
                        placeholder="Enter your name"
                        required
                        style={{ fontFamily: fonts.body }}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-2" style={{ fontFamily: fonts.body }}>
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B5B4F]" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full pl-10 pr-4 py-2.5 border border-[#E8E0D6] rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-transparent transition-all placeholder-[#6B5B4F]"
                        placeholder="your@email.com"
                        required
                        style={{ fontFamily: fonts.body }}
                      />
                    </div>
                  </div>

                  {/* Role Selection */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-2" style={{ fontFamily: fonts.body }}>
                      I am a...
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-[#E8E0D6] rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-transparent transition-all text-[#6B5B4F]"
                      required
                      style={{ fontFamily: fonts.body }}
                    >
                      <option value="">Select your role</option>
                      {roles.map(role => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-3" style={{ fontFamily: fonts.body }}>
                      Interested in (select all that apply)
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {interests.map(interest => (
                        <label key={interest} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestToggle(interest)}
                            className="w-4 h-4 text-[#8B2635] border-[#E8E0D6] rounded focus:ring-[#8B2635]"
                          />
                          <span className="text-sm text-[#6B5B4F]" style={{ fontFamily: fonts.body }}>
                            {interest}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full cursor-pointer bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white py-2.5 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                    style={{ fontFamily: fonts.button }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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
                        <span>Join the Movement</span>
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-8"
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
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      ✓
                    </motion.div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#2C1810] mb-2" style={{ fontFamily: fonts.heading }}>
                    Welcome to the Movement!
                  </h3>
                  <p className="text-[#6B5B4F]" style={{ fontFamily: fonts.body }}>
                    {`You'll be the first to know when we launch.`}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EarlyAccessForm;
