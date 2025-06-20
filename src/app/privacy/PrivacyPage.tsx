"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { Shield } from "lucide-react";

function PrivacyPage() {
  return (
    <>
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
              <Shield className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
              style={{ fontFamily: fonts.heading }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Privacy Policy
            </motion.h1>
          </div>
        </section>

        {/* Content */}
        <section
          className="py-16 px-4 sm:px-6"
          style={{ backgroundColor: colors.card }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="space-y-8 text-[#6B5B4F]"
              style={{ fontFamily: fonts.body }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <section>
                <h2
                  className="text-2xl font-bold text-[#2C1810] mb-4"
                  style={{ fontFamily: fonts.heading }}
                >
                  1. Information We Collect
                </h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    <strong>Personal Information:</strong> When you register or
                    submit art, we may collect your name, email address, and
                    artist profile information.
                  </p>
                  <p className="text-lg leading-relaxed">
                    <strong>Usage Data:</strong> We collect information about
                    how you interact with our platform, including pages visited,
                    time spent, and engagement patterns.
                  </p>
                  <p className="text-lg leading-relaxed">
                    <strong>Cookies:</strong> We use cookies to improve your
                    experience and understand platform usage patterns.
                  </p>
                </div>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold text-[#2C1810] mb-4"
                  style={{ fontFamily: fonts.heading }}
                >
                  2. How We Use Your Information
                </h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    We use collected information to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and maintain our platform services</li>
                    <li>Process and curate art submissions</li>
                    <li>
                      Communicate with you about your account and platform
                      updates
                    </li>
                    <li>Improve our platform and user experience</li>
                    <li>Send newsletters and updates (with your consent)</li>
                    <li>Ensure platform security and prevent misuse</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold text-[#2C1810] mb-4"
                  style={{ fontFamily: fonts.heading }}
                >
                  3. Information Sharing and Disclosure
                </h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties except in these circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and safety</li>
                    <li>
                      With trusted service providers who assist in platform
                      operations (under strict confidentiality agreements)
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold text-[#2C1810] mb-4"
                  style={{ fontFamily: fonts.heading }}
                >
                  4. Data Security
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction. However, no method of transmission
                  over the internet is 100% secure, and we cannot guarantee
                  absolute security.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold text-[#2C1810] mb-4"
                  style={{ fontFamily: fonts.heading }}
                >
                  5. Your Rights and Choices
                </h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and review your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Restrict processing of your information</li>
                    <li>
                      Data portability (receive your data in a structured
                      format)
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold text-[#2C1810] mb-4"
                  style={{ fontFamily: fonts.heading }}
                >
                  6. Cookies and Tracking Technologies
                </h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    We use cookies and similar tracking technologies to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Understand how you use our platform</li>
                    <li>Improve platform functionality</li>
                    <li>Provide relevant content and features</li>
                  </ul>
                  <p className="text-lg leading-relaxed">
                    You can control cookies through your browser settings, but
                    some platform features may not function properly if cookies
                    are disabled.
                  </p>
                </div>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold text-[#2C1810] mb-4"
                  style={{ fontFamily: fonts.heading }}
                >
                  7. {`Children's Privacy`}
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  Our platform is not directed to children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13. If you become aware that a child has
                  provided us with personal information, please contact us
                  immediately.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold text-[#2C1810] mb-4"
                  style={{ fontFamily: fonts.heading }}
                >
                  8. International Data Transfers
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure appropriate
                  safeguards are in place to protect your information in
                  accordance with this privacy policy.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold text-[#2C1810] mb-4"
                  style={{ fontFamily: fonts.heading }}
                >
                  9. Changes to This Privacy Policy
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  {`We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "last updated" date.`}
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold text-[#2C1810] mb-4"
                  style={{ fontFamily: fonts.heading }}
                >
                  10. Contact Us
                </h2>
                <p className="text-lg leading-relaxed">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us at:
                  <br />
                  <strong>thepanelist25@gmail.com</strong>
                  <br />
                  <br />
                  For data protection inquiries in the EU, please contact our
                  Data Protection Officer at:
                  <br />
                  <strong>thepanelist25@gmail.com</strong>
                </p>
              </section>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PrivacyPage;
