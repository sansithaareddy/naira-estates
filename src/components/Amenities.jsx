import { motion } from "framer-motion";
import {
  Waves,
  Building2,
  Dumbbell,
  Baby,
  Trees,
  Zap,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

const amenities = [
  { icon: Waves, label: "Swimming Pool" },
  { icon: Building2, label: "Clubhouse" },
  { icon: Dumbbell, label: "Gymnasium" },
  { icon: Baby, label: "Children's Play Area" },
  { icon: Trees, label: "Landscaped Gardens" },
  { icon: Zap, label: "EV Charging" },
  { icon: ShieldCheck, label: "Smart Security" },
  { icon: Briefcase, label: "Co-working Spaces" },
];

function Amenities() {
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
            Lifestyle
          </p>
          <h2 className="text-navy text-4xl md:text-5xl font-bold mb-4">
            World-Class Amenities
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Every Naira residence is designed to elevate everyday living.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={amenity.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
                  <Icon
                    size={28}
                    className="text-navy group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <p className="text-navy font-medium">{amenity.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Amenities;