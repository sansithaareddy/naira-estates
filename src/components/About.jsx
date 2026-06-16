import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80"
              alt="Luxury interior"
              className="w-full h-[520px] object-cover"
            />
            {/* Gold accent box */}
            <div className="absolute -bottom-8 -right-8 bg-gold text-navy p-8 hidden md:block">
              <p className="text-4xl font-playfair font-bold">15+</p>
              <p className="text-sm tracking-wide uppercase">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              About Naira Estates
            </p>
            <h2 className="text-navy text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Crafting Homes That Inspire
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              At Naira Estates, we believe exceptional homes are built on a
              foundation of vision, craftsmanship, and trust. Our developments
              combine modern architecture, thoughtfully designed spaces, and
              premium amenities to create communities that enrich everyday
              living.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              From the bustling heart of Hyderabad to the serene coastlines of
              Mumbai, every Naira residence is a testament to our commitment to
              quality and timeless design.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center bg-navy text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Learn More
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;