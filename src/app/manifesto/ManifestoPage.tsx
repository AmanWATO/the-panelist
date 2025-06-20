"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { Quote, Pause, Layers, Target } from "lucide-react";

function ManifestoPage() {
  const principles = [
    {
      icon: Pause,
      title: "The Power of Pause",
      description:
        "In a world of endless scroll, we create moments that stop time.",
    },
    {
      icon: Layers,
      title: "Infinite Depth",
      description: "One frame can contain universes of meaning and emotion.",
    },
    {
      icon: Target,
      title: "Intentional Creation",
      description:
        "Every element serves a purpose, every choice is deliberate.",
    },
  ];

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
              <Quote className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C1810] to-[#8B2635] bg-clip-text text-transparent"
              style={{ fontFamily: fonts.heading }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Panelist Manifesto
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-[#6B5B4F] max-w-3xl mx-auto"
              style={{ fontFamily: fonts.body }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A declaration of our commitment to the art of restraint, the
              beauty of minimalism, and the power of a single frame.
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <section
          className="py-16 px-4 sm:px-6"
          style={{ backgroundColor: colors.card }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <blockquote
                  className="text-2xl lg:text-3xl italic text-center text-[#8B2635] border-none p-8 bg-gradient-to-r from-[#8B2635]/5 to-[#D4A574]/5 rounded-2xl"
                  style={{ fontFamily: fonts.accent }}
                >
                  {`"This is not a comic. It's not a meme. It's not a story. It's a suggestion of one."`}
                </blockquote>

                <div
                  className="space-y-6 text-[#6B5B4F]"
                  style={{ fontFamily: fonts.body }}
                >
                  <h2
                    className="text-3xl font-bold text-[#2C1810] mb-4"
                    style={{ fontFamily: fonts.heading }}
                  >
                    We Believe
                  </h2>

                  <p className="text-lg leading-relaxed">
                    In an age where content multiplies exponentially and
                    attention fragments into microseconds, The Panelist stands
                    as a sanctuary for the deliberate, the thoughtful, and the
                    profound. We are not here to add to the noise—we are here to
                    create silence within it.
                  </p>

                  <p className="text-lg leading-relaxed">
                    We believe that the most powerful art whispers rather than
                    shouts. That a single panel, carefully crafted and
                    thoughtfully presented, can contain more truth than a
                    thousand-page novel. That restraint is not limitation—it is
                    liberation.
                  </p>

                  <h2
                    className="text-3xl font-bold text-[#2C1810] mb-4 mt-12"
                    style={{ fontFamily: fonts.heading }}
                  >
                    Our Mission
                  </h2>

                  <p className="text-lg leading-relaxed">
                    {`The Panelist exists to champion artists who understand that less is more, that negative space speaks as loudly as filled space, and that the viewer's imagination is the most powerful storytelling tool of all. We curate not just art, but moments of contemplation in our chaotic digital landscape.`}
                  </p>

                  <p className="text-lg leading-relaxed">
                    Each panel featured on our platform represents an
                    invitation—an invitation to pause, to reflect, to complete
                    the story with your own experiences and emotions. We are not
                    passive consumers here; we are active participants in the
                    creative process.
                  </p>

                  <h2
                    className="text-3xl font-bold text-[#2C1810] mb-4 mt-12"
                    style={{ fontFamily: fonts.heading }}
                  >
                    The Art of Suggestion
                  </h2>

                  <p className="text-lg leading-relaxed">
                    Traditional media seeks to explain everything, to leave no
                    question unanswered, no emotion unexplored. Single-panel art
                    operates on a different frequency. It suggests rather than
                    states, implies rather than explains, and trusts the viewer
                    to bring their own depth to the experience.
                  </p>

                  <p className="text-lg leading-relaxed">
                    This is not art for passive consumption—it is art for active
                    engagement. Each viewer becomes a collaborator, bringing
                    their own stories, memories, and emotions to complete what
                    the artist has begun.
                  </p>

                  <h2
                    className="text-3xl font-bold text-[#2C1810] mb-4 mt-12"
                    style={{ fontFamily: fonts.heading }}
                  >
                    Our Community
                  </h2>

                  <p className="text-lg leading-relaxed">
                    {`The Panelist community is built on shared values: respect for craft, appreciation for subtlety, and understanding that art's highest purpose is not entertainment but transformation. We are artists and art lovers who believe that in a world of excess, choosing less is a radical act.`}
                  </p>

                  <p className="text-lg leading-relaxed">
                    {`We foster dialogue that goes beyond surface appreciation. Our discussions explore technique, meaning, emotional resonance, and the infinite ways a single image can be interpreted. We celebrate not just the art, but the thoughtful engagement it inspires.`}
                  </p>

                  <h2
                    className="text-3xl font-bold text-[#2C1810] mb-4 mt-12"
                    style={{ fontFamily: fonts.heading }}
                  >
                    A Call to Action
                  </h2>

                  <p className="text-lg leading-relaxed">
                    {`To artists: Create with intention. Trust your audience's intelligence. Embrace the challenge of saying more with less. Remember that what you leave out is often more powerful than what you include.`}
                  </p>

                  <p className="text-lg leading-relaxed">
                    To viewers: Slow down. Look deeper. Allow yourself to be
                    moved by subtlety. Engage with art not as passive
                    entertainment but as active meditation. Bring your own
                    stories to complete what the artist has begun.
                  </p>

                  <p className="text-lg leading-relaxed">
                    {`To everyone: In a world that profits from your distraction,
                    choosing to engage deeply with single-panel art is an act of
                    rebellion. It's a declaration that you value quality over
                    quantity, depth over surface, and meaning over noise.`}
                  </p>

                  <div className="text-center mt-12 p-8 bg-gradient-to-r from-[#8B2635]/10 to-[#D4A574]/10 rounded-2xl">
                    <p
                      className="text-xl italic text-[#8B2635]"
                      style={{ fontFamily: fonts.accent }}
                    >
                      {`"The Panelist: Where less becomes more, and silence speaks
                      loudest."`}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Principles */}
        <section
          className="py-16 px-4 sm:px-6"
          style={{ backgroundColor: colors.background }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#2C1810]"
              style={{ fontFamily: fonts.heading }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Core Principles
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 rounded-2xl"
                  style={{ backgroundColor: colors.card }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#8B2635] to-[#D4A574] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-4 text-[#2C1810]"
                    style={{ fontFamily: fonts.heading }}
                  >
                    {principle.title}
                  </h3>
                  <p
                    className="text-[#6B5B4F]"
                    style={{ fontFamily: fonts.body }}
                  >
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ManifestoPage;
