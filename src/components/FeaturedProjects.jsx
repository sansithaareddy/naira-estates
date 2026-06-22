import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Download, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

const featured = projects.slice(0, 3);

function FeaturedRow({ project, index, total }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const num = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden snap-start"
    >
      <motion.img
        style={{ y }}
        src={project.image}
        alt={project.name}
        className="absolute inset-0 w-full h-[124%] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/20" />

      <div className="relative z-10 h-full max-w-[1500px] mx-auto px-6 md:px-10 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-ivory"
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-ivory/70 mb-8">
            Signature · {num} / {totalStr}
          </p>
          <p className="text-ivory/85 text-base md:text-lg mb-3">
            {project.location}
          </p>
          <h2 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] mb-6">
            {project.name}
          </h2>
          <div className="flex items-center gap-3 text-ivory/85 text-sm border-t border-b border-ivory/25 py-4 mb-6">
            <Building2 size={18} className="opacity-80" />
            <span>{project.type}</span>
            <span className="text-ivory/40">|</span>
            <span>{project.bhk}</span>
          </div>
          <p className="text-ivory/80 leading-relaxed mb-8 max-w-md">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={`/projects/${project.id}`}
              className="bg-ivory text-ink px-8 py-3.5 text-sm tracking-[0.1em] uppercase hover:bg-white transition-colors"
            >
              View Project
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-ivory/50 text-ivory px-8 py-3.5 text-sm tracking-[0.1em] uppercase hover:bg-ivory hover:text-ink transition-colors"
            >
              Download Brochure <Download size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <div>
      <section className="bg-ink text-ivory py-20 md:py-28">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-ivory/60 text-xs tracking-[0.3em] uppercase mb-5">
              Featured Developments
            </p>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-[0.95]">
              Signature Residences
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase border-b border-ivory/40 pb-1 hover:border-ivory transition-colors"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {featured.map((p, i) => (
        <FeaturedRow
          key={p.id}
          project={p}
          index={i}
          total={featured.length}
        />
      ))}
    </div>
  );
}

export default FeaturedProjects;