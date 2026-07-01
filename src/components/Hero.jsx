import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Swap this URL for your own /video.mp4 in public/ later
const VIDEO_SRC = "/hero.mp4";
const POSTER =
  "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=1600&q=80";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-ink">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={POSTER}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Darkening overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-ivory/70 text-xs md:text-sm tracking-[0.4em] uppercase mb-7"
        >
          Naira Estates — Est. 2010, Hyderabad
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif text-ivory font-light leading-[0.95] text-6xl md:text-8xl lg:text-9xl"
        >
          Building tomorrow's
          <br />
          landmarks.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10"
        >
          <Link
            to="/projects"
            className="bg-ivory text-ink px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors"
          >
            Explore Residences
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex flex-col items-center gap-3 text-ivory/70">
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-9 h-9 rounded-full border border-ivory/40 flex items-center justify-center"
        >
          ↓
        </motion.span>
        <span className="text-[11px] tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  );
}

export default Hero;