import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={projects[0]?.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/85" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 py-28 md:py-44 text-center text-ivory">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="text-ivory/60 text-xs tracking-[0.3em] uppercase mb-7"
        >
          Begin the Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-8xl font-light leading-[0.95] mb-8"
        >
          Find the home that
          <br className="hidden md:block" /> was always yours.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-ivory/75 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
        >
          Speak with our team, arrange a private viewing, or simply tell us what
          you're looking for. Your enquiry is the first step toward a Naira
          address.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-5"
        >
          <Link
            to="/contact"
            className="bg-ivory text-ink px-10 py-4 text-sm tracking-[0.1em] uppercase hover:bg-white transition-colors"
          >
            Begin Your Enquiry
          </Link>
          <Link
            to="/projects"
            className="border border-ivory/50 text-ivory px-10 py-4 text-sm tracking-[0.1em] uppercase hover:bg-ivory hover:text-ink transition-colors"
          >
            Explore Residences
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-ivory/50 text-sm tracking-wide mt-14"
        >
          hello@nairaestates.com&nbsp;&nbsp;·&nbsp;&nbsp;+91 98765 43210
        </motion.p>
      </div>
    </section>
  );
}

export default ClosingCTA;