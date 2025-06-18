"use client";

import { motion } from "framer-motion";
import { colors, fonts } from "@/utils/theme";
import { Clock, Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  // Sample blog data (in a real app, this would come from an API)
  const blogPosts = {
    1: {
      id: 1,
      title: "The Philosophy of Single-Panel Art",
      excerpt: "Why one frame holds more power than a thousand words. Exploring the minimalist approach to visual storytelling.",
      content: `
        <p>In a world saturated with visual noise, the single-panel art form emerges as a beacon of clarity and intention. Unlike traditional multi-panel comics or elaborate illustrations, single-panel art distills complex emotions, narratives, and concepts into one powerful frame.</p>

        <h2>The Power of Restraint</h2>
        <p>Restraint in art is not limitation—it's liberation. When an artist commits to expressing their vision within the confines of a single panel, they are forced to make every element count. Every line, every color choice, every spatial decision becomes intentional and meaningful.</p>

        <h2>Silence as a Language</h2>
        <p>Single-panel art speaks in the language of silence. It invites viewers to pause, to contemplate, and to fill in the narrative gaps with their own experiences and interpretations. This collaborative aspect between artist and viewer creates a unique intimacy that multi-panel works often cannot achieve.</p>

        <h2>The One Wonder Frame Competition</h2>
        <p>Our upcoming competition on August 11th celebrates this very philosophy. We invite artists to submit their most powerful single-panel works—pieces that demonstrate how constraint can lead to creative breakthrough.</p>

        <h2>Creating Your Panel</h2>
        <p>When approaching single-panel art, consider these elements:</p>
        <ul>
          <li><strong>Focus:</strong> What is the one essential message you want to convey?</li>
          <li><strong>Composition:</strong> How can the arrangement of elements guide the viewer's eye?</li>
          <li><strong>Negative Space:</strong> What you don't include is often as important as what you do.</li>
          <li><strong>Emotional Resonance:</strong> Does your panel evoke a feeling or memory?</li>
        </ul>

        <p>The beauty of single-panel art lies not in what it shows, but in what it suggests. It's an invitation to the viewer to become an active participant in the creative process, to bring their own stories and experiences to complete the narrative.</p>
      `,
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Philosophy",
      image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    2: {
      id: 2,
      title: "One Wonder Frame Competition Guidelines",
      excerpt: "Everything you need to know about our upcoming art competition on August 11th. Rules, submission process, and what makes a winning panel.",
      content: `
        <p>The One Wonder Frame Competition represents the pinnacle of single-panel artistry. Scheduled for August 11th, this prestigious event brings together artists from around the world to showcase their mastery of minimalist visual storytelling.</p>

        <h2>Competition Overview</h2>
        <p>One Wonder Frame is more than just a contest—it's a celebration of the power that lies within a single artistic moment. Participants are challenged to create a panel that captures an entire narrative, emotion, or concept within one frame.</p>

        <h2>Submission Guidelines</h2>
        <p>All submissions must adhere to the following criteria:</p>
        <ul>
          <li><strong>Format:</strong> Single panel artwork in digital format (PNG, JPG, or PDF)</li>
          <li><strong>Dimensions:</strong> Minimum 300 DPI, maximum file size 10MB</li>
          <li><strong>Originality:</strong> All work must be original and created specifically for this competition</li>
          <li><strong>Theme:</strong> Open theme - express your unique vision and style</li>
        </ul>

        <h2>Judging Criteria</h2>
        <p>Panels will be evaluated based on:</p>
        <ul>
          <li>Visual impact and composition</li>
          <li>Narrative depth and emotional resonance</li>
          <li>Technical execution and artistic skill</li>
          <li>Innovation and creative interpretation</li>
        </ul>

        <h2>Prizes and Recognition</h2>
        <p>Winners will receive:</p>
        <ul>
          <li>Featured placement on The Panelist artist panel</li>
          <li>Professional critique and feedback</li>
          <li>Recognition in our artist community</li>
          <li>Opportunity for ongoing collaboration</li>
        </ul>

        <p>The deadline for submissions is August 1st, giving participants ample time to craft their masterpiece. Join us in celebrating the art of saying more with less.</p>
      `,
      date: "2025-01-12",
      readTime: "8 min read",
      category: "Competition",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    3: {
      id: 3,
      title: "The Art of Layered Captions",
      excerpt: "How to write captions that add depth without overwhelming the visual narrative.",
      content: `
        <p>In single-panel art, captions serve as the bridge between visual and verbal storytelling. Unlike traditional comics where dialogue drives the narrative, single-panel captions must enhance rather than explain, suggest rather than state.</p>

        <h2>The Delicate Balance</h2>
        <p>Writing effective captions for single-panel art requires a delicate balance. Too much text overwhelms the visual; too little leaves the viewer confused. The goal is to create a symbiotic relationship where words and image enhance each other's impact.</p>

        <h2>Types of Effective Captions</h2>
        <p>Consider these approaches when crafting your captions:</p>
        <ul>
          <li><strong>Contextual:</strong> Provide setting or background information</li>
          <li><strong>Emotional:</strong> Convey the internal state of characters</li>
          <li><strong>Temporal:</strong> Establish when the scene takes place</li>
          <li><strong>Ironic:</strong> Create contrast between text and image</li>
        </ul>

        <h2>The Power of Subtext</h2>
        <p>The most powerful captions work on multiple levels. They tell the obvious story while hinting at deeper meanings. This layered approach allows readers to discover new interpretations with each viewing.</p>

        <h2>Practical Techniques</h2>
        <p>When writing your captions, consider:</p>
        <ul>
          <li>Using present tense for immediacy</li>
          <li>Employing active voice for dynamic energy</li>
          <li>Creating rhythm through sentence structure</li>
          <li>Leaving space for reader interpretation</li>
        </ul>

        <h2>The Silent Alternative</h2>
        <p>Sometimes the most powerful choice is no caption at all. Trust your artwork to communicate. If the image can stand alone, let it. Silence can be more eloquent than words.</p>

        <p>Remember: in single-panel art, every word counts. Make them meaningful, make them purposeful, and make them serve the greater artistic vision.</p>
      `,
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Technique",
      image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    4: {
      id: 4,
      title: "Building Community Through Quiet Art",
      excerpt: "How minimalist art creates deeper connections and more meaningful conversations.",
      content: `
        <p>In our hyperconnected world, quiet art serves as a refuge—a space for contemplation, reflection, and genuine human connection. Single-panel art, with its emphasis on simplicity and depth, naturally fosters community through shared moments of understanding.</p>

        <h2>The Intimacy of Simplicity</h2>
        <p>When an artwork strips away the unnecessary, what remains is pure emotion and meaning. This clarity creates an intimate connection between artist and viewer, a shared understanding that transcends words and cultural barriers.</p>

        <h2>Slow Art in a Fast World</h2>
        <p>Single-panel art encourages us to slow down, to pause and truly see. In galleries, coffee shops, and online spaces, these quiet moments become gathering points for like-minded individuals seeking depth over speed.</p>

        <h2>The Conversation Starter</h2>
        <p>A well-crafted single panel often generates more discussion than elaborate multi-page works. The economy of elements invites interpretation, and interpretation invites conversation. Each viewer brings their own perspective, creating a rich tapestry of meanings.</p>

        <h2>Building Our Community</h2>
        <p>The Panelist community grows through:</p>
        <ul>
          <li>Shared appreciation for minimalist aesthetics</li>
          <li>Respectful dialogue about artistic interpretation</li>
          <li>Support for emerging and established artists</li>
          <li>Commitment to quality over quantity</li>
        </ul>

        <h2>The Digital Gallery</h2>
        <p>Our online platform serves as more than a showcase—it's a meeting place for artists and art lovers who value thoughtful, purposeful creativity. Every panel featured here represents an invitation to pause, reflect, and connect.</p>

        <h2>Future Gatherings</h2>
        <p>We envision physical exhibitions, artist talks, and workshops where our community can gather to explore the profound impact of single-panel art. These events will celebrate not just the art, but the human connections it fosters.</p>

        <p>In a world of endless content, we choose depth. In a time of constant noise, we create spaces for silence. Join us in building a community centered on the transformative power of quiet art.</p>
      `,
      date: "2025-01-08",
      readTime: "4 min read",
      category: "Community",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    5: {
      id: 5,
      title: "From Sketch to Statement",
      excerpt: "A behind-the-scenes look at the creative process behind powerful single-panel art.",
      content: `
        <p>Every powerful single panel begins with a spark—an idea, emotion, or observation that demands artistic expression. The journey from initial concept to finished statement is one of refinement, reduction, and intentional choices.</p>

        <h2>The Initial Spark</h2>
        <p>Ideas for single-panel art can come from anywhere: an overheard conversation, a fleeting emotion, a striking visual moment. The key is recognizing which ideas have the depth and universality to sustain a complete artistic statement.</p>

        <h2>The Sketching Phase</h2>
        <p>Early sketches are about exploration, not perfection. This is where artists test different compositions, experiment with character placement, and explore various ways to convey their core message. The goal is to find the visual language that best serves the idea.</p>

        <h2>The Art of Subtraction</h2>
        <p>Perhaps the most crucial skill in single-panel art is knowing what to leave out. Each element must earn its place in the composition. This process of elimination continues throughout the creative journey, refining the panel until only the essential remains.</p>

        <h2>Composition Considerations</h2>
        <p>Effective single panels employ:</p>
        <ul>
          <li><strong>Rule of thirds:</strong> Placing key elements at intersection points</li>
          <li><strong>Leading lines:</strong> Guiding the viewer's eye through the composition</li>
          <li><strong>Negative space:</strong> Using empty areas to create emphasis</li>
          <li><strong>Scale relationships:</strong> Establishing hierarchy through size</li>
        </ul>

        <h2>Color and Mood</h2>
        <p>Color choices in single-panel art carry enormous weight. A limited palette can create unity and focus, while strategic color contrasts can establish mood, hierarchy, and emotional tone.</p>

        <h2>The Final Edit</h2>
        <p>Before considering a panel complete, artists must ask: Does every element serve the central idea? Can the message be understood at a glance? Does the composition guide the viewer's eye effectively? Sometimes the most difficult decision is knowing when to stop.</p>

        <p>The finished panel should feel inevitable—as if it could not exist in any other form. This sense of rightness comes from the careful, thoughtful process of moving from sketch to statement.</p>
      `,
      date: "2025-01-05",
      readTime: "7 min read",
      category: "Process",
      image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    6: {
      id: 6,
      title: "The Future of Visual Storytelling",
      excerpt: "Where single-panel art fits in our increasingly digital and fast-paced world.",
      content: `
        <p>As technology accelerates and attention spans fragment, single-panel art emerges not as a relic of the past, but as a response to our contemporary moment. In a world of infinite scroll and constant stimulation, the single panel offers something increasingly rare: completeness.</p>

        <h2>Digital Renaissance</h2>
        <p>Digital platforms have democratized art creation and distribution, allowing single-panel artists to reach global audiences instantly. Social media, originally designed for quick consumption, has paradoxically become a perfect venue for art that rewards contemplation.</p>

        <h2>The Attention Economy</h2>
        <p>In an attention economy, single-panel art offers both immediate impact and lasting depth. A powerful panel can stop the scroll, invite closer inspection, and provide the kind of meaningful engagement that algorithms increasingly favor.</p>

        <h2>Interactive Possibilities</h2>
        <p>Technology opens new possibilities for single-panel art:</p>
        <ul>
          <li><strong>Animated elements:</strong> Subtle movements that enhance without overwhelming</li>
          <li><strong>Interactive details:</strong> Hidden elements revealed through user interaction</li>
          <li><strong>Augmented reality:</strong> Panels that exist in physical spaces</li>
          <li><strong>Collaborative creation:</strong> Community-driven artistic projects</li>
        </ul>

        <h2>Sustainability in Art</h2>
        <p>Single-panel art aligns with growing consciousness about sustainability—both environmental and cognitive. By creating complete experiences in minimal formats, artists reduce resource consumption while maximizing impact.</p>

        <h2>Cultural Relevance</h2>
        <p>Young audiences, raised on memes and visual culture, intuitively understand single-panel communication. This art form speaks their language while offering the depth and nuance often missing from purely digital content.</p>

        <h2>The Role of AI</h2>
        <p>Artificial intelligence will likely influence single-panel art creation, but the human elements—emotional intelligence, cultural context, and personal experience—remain irreplaceable. Technology can assist the process, but cannot replicate the soul of artistic expression.</p>

        <h2>Looking Ahead</h2>
        <p>The future of single-panel art lies in its ability to evolve while maintaining its core principles: clarity, intention, and emotional resonance. As our world becomes more complex, the need for art that distills meaning into powerful, accessible forms will only grow.</p>

        <p>We stand at the beginning of a new golden age for single-panel art—one where ancient storytelling wisdom meets cutting-edge technology to create experiences that are both timeless and thoroughly contemporary.</p>
      `,
      date: "2025-01-03",
      readTime: "5 min read",
      category: "Future",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  };

  const blogPost = blogPosts[parseInt(id as string)] || blogPosts[1];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogPost.title,
    "description": blogPost.excerpt,
    "image": blogPost.image,
    "author": {
      "@type": "Organization",
      "name": "The Panelist"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Panelist",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thepanelist.com/the_panelist.png"
      }
    },
    "datePublished": blogPost.date,
    "dateModified": blogPost.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://thepanelist.com/blog/${blogPost.id}`
    },
    "articleSection": blogPost.category,
    "wordCount": blogPost.content.split(' ').length,
    "timeRequired": `PT${blogPost.readTime.split(' ')[0]}M`
  };

  return (
    <>
      <Script
        id="blog-post-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    
    <div className="min-h-screen pt-20">
      {/* Hero Section with Glass Effect */}
      <section className="relative py-16 px-4 sm:px-6 overflow-hidden">
        {/* Background with blur effect */}
        <div className="absolute inset-0">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>

        {/* Glass card */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <motion.button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span style={{ fontFamily: fonts.body }}>Back to Blog</span>
            </motion.button>

            {/* Category Badge */}
            <motion.span
              className="inline-block bg-[#8B2635]/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {blogPost.category}
            </motion.span>

            {/* Title */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight"
              style={{ fontFamily: fonts.heading }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {blogPost.title}
            </motion.h1>

            {/* Meta Information */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-white/80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm" style={{ fontFamily: fonts.body }}>
                  {new Date(blogPost.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm" style={{ fontFamily: fonts.body }}>
                  {blogPost.readTime}
                </span>
              </div>
              <motion.button
                className="flex items-center space-x-2 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Share2 className="w-4 h-4" />
                <span className="text-sm" style={{ fontFamily: fonts.body }}>Share</span>
              </motion.button>
            </motion.div>

            {/* Excerpt */}
            <motion.p
              className="text-lg text-white/90 leading-relaxed"
              style={{ fontFamily: fonts.body }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {blogPost.excerpt}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-12 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div 
              className="prose prose-lg max-w-none text-[#2C1810]"
              style={{ fontFamily: fonts.body }}
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-[#8B2635]/10 to-[#D4A574]/10 backdrop-blur-sm border border-[#8B2635]/20 rounded-2xl p-8">
              <h3 
                className="text-2xl font-bold mb-4 text-[#2C1810]"
                style={{ fontFamily: fonts.heading }}
              >
                Ready to Share Your Vision?
              </h3>
              <p 
                className="text-[#6B5B4F] mb-6"
                style={{ fontFamily: fonts.body }}
              >
                Join the One Wonder Frame competition and showcase your single-panel masterpiece.
              </p>
              <motion.button
                className="bg-gradient-to-r from-[#8B2635] to-[#A52A3A] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                style={{ fontFamily: fonts.button }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = '/#panel-application';
                }}
              >
                Apply to Become a Panelist
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}