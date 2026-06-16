import { motion } from "framer-motion";
import { MapPin, Award, Leaf } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Prime Locations",
    description:
      "Every Naira development is strategically positioned in the most sought-after neighbourhoods, close to business hubs, schools, and connectivity.",
  },
  {
    icon: Award,
    title: "Exceptional Craftsmanship",
    description:
      "From premium materials to precision finishes, our homes reflect an uncompromising commitment to quality at every detail.",
  },
  {
    icon: Leaf,
    title: "Sustainable Living",
    description:
      "Energy-efficient design, green spaces, and eco-conscious infrastructure ensure a healthier future for residents and the planet.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
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
            Why Naira Estates
          </p>
          <h2 className="text-navy text-4xl md:text-5xl font-bold mb-4">
            Built on Trust & Excellence
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Three pillars that define everything we build.
          </p>
        </motion.div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group text-center p-8 border border-gray-100 hover:border-gold hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-gold flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                  <Icon
                    size={32}
                    className="text-gold group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-navy text-2xl font-bold mb-4">
                  {reason.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;