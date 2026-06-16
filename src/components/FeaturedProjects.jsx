import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function FeaturedProjects() {
  return (
    <section className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Our Portfolio
          </p>
          <h2 className="text-navy text-4xl md:text-5xl font-bold mb-4">
            Featured Developments
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Discover our signature residential communities.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link
            to="/projects"
            className="inline-flex items-center border border-navy text-navy px-8 py-4 text-sm font-semibold tracking-wide hover:bg-navy hover:text-white transition-all duration-300"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedProjects;