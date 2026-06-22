import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Counter from "./Counter";

const stats = [
  { value: 15, suffix: "+", label: "Years of Legacy" },
  { value: 42, suffix: "+", label: "Landmarks Delivered" },
  { value: 12, suffix: "M+", label: "Sq.Ft. Delivered" },
  { value: 5, suffix: "K+", label: "Happy Families" },
];

function Legacy() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
        {/* Left: story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted text-base md:text-lg leading-relaxed mb-6 max-w-lg">
            Naira Estates — luxury residential and commercial landmarks across
            Hyderabad, Bangalore and Mumbai.
          </p>

          <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.05] text-ink mb-10">
            We don't build homes.
            <br />
            We build legacies.
          </h2>

          <p className="text-muted leading-relaxed mb-6 max-w-xl">
            From the very first foundation, our conviction has stayed the same —
            a home built with honesty and craft will always stand apart. Over
            fifteen years, that belief has shaped skylines across India, one
            considered decision at a time.
          </p>
          <p className="text-muted leading-relaxed mb-10 max-w-xl">
            We have never built for volume. We build for the people who will
            live, work and grow within what we create — because a great address
            is measured not in square feet, but in the quality of life it makes
            possible.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 border border-ink/40 text-ink px-8 py-3.5 text-sm tracking-[0.15em] uppercase hover:bg-ink hover:text-ivory transition-colors"
          >
            Explore Now <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        {/* Right: framed image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative h-[520px] md:h-[620px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&q=80"
              alt="Naira Estates landmark"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/20" />
            <p className="absolute top-10 left-10 text-ivory/90 font-sans text-sm md:text-base tracking-[0.35em] uppercase leading-loose">
              It's just
              <br />
              for you
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-mist px-6 py-8"
          >
            <p className="font-serif text-5xl md:text-6xl text-ink">
              <Counter end={s.value} suffix={s.suffix} />
            </p>
            <p className="text-muted text-sm tracking-wide mt-3">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Legacy;