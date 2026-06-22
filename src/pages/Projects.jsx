import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Download } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

function ProjectRow({ project, index, total }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const num = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
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

function Projects() {
  return (
    <div className="overflow-x-clip bg-mist">
      <Navbar />

      <section className="pt-40 pb-20 md:pt-48 md:pb-28 max-w-[1500px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-muted text-xs tracking-[0.3em] uppercase mb-6"
        >
          Our Portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-8xl font-light leading-[0.95] text-ink max-w-4xl"
        >
          A collection of landmarks.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted text-lg max-w-xl mt-8"
        >
          Every Naira development is an address with intent — explore our
          residences across India's most coveted cities.
        </motion.p>
      </section>

      {projects.map((p, i) => (
        <ProjectRow key={p.id} project={p} index={i} total={projects.length} />
      ))}

      <Footer />
    </div>
  );
}

export default Projects;