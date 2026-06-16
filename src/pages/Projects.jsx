import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

// Build the filter list dynamically from the data
const cities = ["All", ...new Set(projects.map((p) => p.city))];

function Projects() {
  const [activeCity, setActiveCity] = useState("All");

  const filteredProjects =
    activeCity === "All"
      ? projects
      : projects.filter((p) => p.city === activeCity);

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Naira developments"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/75"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Our Developments
          </p>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
            Explore Our Projects
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Discover signature residences across India's most vibrant cities.
          </p>
        </motion.div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeCity === city
                    ? "bg-navy text-white"
                    : "bg-white text-navy hover:bg-gold hover:text-navy"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Empty state (just in case) */}
          {filteredProjects.length === 0 && (
            <p className="text-center text-text-secondary mt-10">
              No projects found in this city.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Projects;