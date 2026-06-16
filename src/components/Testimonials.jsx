import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Menon",
    location: "Naira Skyview, Hyderabad",
    review:
      "The quality and attention to detail exceeded our expectations. From the first site visit to handover, the Naira team was professional and transparent.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Priya Sharma",
    location: "Naira Greens, Bangalore",
    review:
      "Living in a community that genuinely cares about sustainability has been wonderful. The green spaces and amenities make every day feel like a retreat.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Arjun Nair",
    location: "Naira Waterfront, Mumbai",
    review:
      "Waking up to sea views every morning is a dream realised. Naira Estates delivered exactly what they promised, on time and with impeccable finishing.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-navy text-4xl md:text-5xl font-bold mb-4">
            What Our Residents Say
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Trusted by thousands of families across India.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote size={40} className="text-gold/30 mb-4" />
              <p className="text-text-secondary leading-relaxed mb-8 italic">
                "{t.review}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-navy font-semibold">{t.name}</p>
                  <p className="text-text-secondary text-sm">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;