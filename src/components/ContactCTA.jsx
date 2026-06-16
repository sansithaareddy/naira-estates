import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Luxury building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6">
          Get In Touch
        </p>
        <h2 className="text-white text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Let's Build Your Future Together
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Schedule a consultation with our team and discover the perfect home
          for you and your family.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-gold text-navy px-10 py-4 text-sm font-semibold tracking-wide hover:bg-white transition-all duration-300"
        >
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
}

export default ContactCTA;