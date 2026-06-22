import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen bg-mist overflow-hidden flex items-center justify-center">
      {/* giant outlined word */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-sans font-medium leading-none text-[30vw] lg:text-[22vw]"
        style={{ WebkitTextStroke: "1.5px #FFFFFF", color: "transparent" }}
      >
        HOME
      </span>

      {/* tagline */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-6"
      >
        <p className="text-lg md:text-3xl tracking-[0.3em] uppercase text-ink leading-[1.9]">
          We build homes
        </p>
        <p className="text-lg md:text-3xl tracking-[0.3em] uppercase text-ink leading-[1.9]">
          that feel like <span className="font-bold">home</span>
        </p>
      </motion.div>

      {/* meta */}
      <div className="absolute bottom-10 left-6 md:left-10 text-[11px] tracking-[0.3em] uppercase text-muted">
        Est. 2010 — Hyderabad
      </div>

      {/* enquire tab */}
      <Link
        to="/contact"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-ink text-white text-[11px] tracking-[0.25em] uppercase px-3 py-7"
        style={{ writingMode: "vertical-rl" }}
      >
        Enquire
      </Link>
    </section>
  );
}

export default Hero;