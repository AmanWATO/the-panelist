
"use client"

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { FileText } from "lucide-react";

function TermsPage() {
  return (
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
            <FileText className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
            style={{ fontFamily: fonts.heading }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Terms & Conditions
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-[#6B5B4F] max-w-3xl mx-auto"
            style={{ fontFamily: fonts.body }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Last updated: January 2025
          </motion.p>
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
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: fonts.heading }}>
                1. Acceptance of Terms
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                By accessing and using The Panelist platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: fonts.heading }}>
                2. Platform Description
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                The Panelist is a curated platform dedicated to single-panel art and minimalist visual storytelling. We provide a space for artists to showcase their work and for art enthusiasts to discover and engage with thoughtful, contemplative art.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: fonts.heading }}>
                3. User Accounts and Registration
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  To access certain features of our platform, you may be required to register for an account. When you register, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information to keep it accurate</li>
                  <li>Maintain the security and confidentiality of your account credentials</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: fonts.heading }}>
                4. Content Submission and Intellectual Property
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  When you submit content to The Panelist:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You retain ownership of your original work</li>
                  <li>You grant us a non-exclusive license to display your work on our platform</li>
                  <li>You confirm that you have the right to submit the content</li>
                  <li>You agree that your content does not violate any third-party rights</li>
                  <li>You understand that submitted content will be reviewed for platform alignment</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: fonts.heading }}>
                5. Content Guidelines
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  All content on The Panelist must:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Align with our philosophy of minimalist, thoughtful art</li>
                  <li>Be original work or properly attributed</li>
                  <li>Not contain offensive, harmful, or inappropriate material</li>
                  <li>Respect copyright and intellectual property rights</li>
                  <li>Maintain the contemplative and respectful nature of our community</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: fonts.heading }}>
                6. Community Guidelines
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                The Panelist community is built on mutual respect and thoughtful engagement. Users are expected to engage constructively, provide respectful feedback, and maintain the contemplative atmosphere that defines our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: fonts.heading }}>
                7. Privacy and Data Protection
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information. By using our platform, you consent to our data practices as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: fonts.heading }}>
                8. Limitation of Liability
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                The Panelist platform is provided "as is" without any warranties. We are not liable for any damages arising from your use of the platform, including but not limited to direct, indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: fonts.heading }}>
                9. Modifications to Terms
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: fonts.heading }}>
                10. Contact Information
              </h2>
              <p className="text-lg leading-relaxed">
                For questions about these Terms & Conditions, please contact us at: 
                <br />
                <strong>legal@thepanelist.com</strong>
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default TermsPage;
