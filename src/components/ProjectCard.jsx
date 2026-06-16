import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Status badge */}
        <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-semibold px-3 py-1 tracking-wide uppercase">
          {project.status}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-center text-gold text-sm mb-3">
          <MapPin size={16} className="mr-1.5" />
          {project.location}
        </div>

        <h3 className="text-navy text-2xl font-bold mb-2">{project.name}</h3>

        <p className="text-text-secondary text-sm mb-4 leading-relaxed">
          {project.tagline}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-navy font-semibold">{project.price}</span>
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center text-sm font-medium text-navy group-hover:text-gold transition-colors"
          >
            View Details
            <ArrowRight
              size={16}
              className="ml-1 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;