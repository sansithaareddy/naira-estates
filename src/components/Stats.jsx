import { motion } from "framer-motion";
import Counter from "./Counter";

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 5000, suffix: "+", label: "Homes Delivered" },
  { value: 8, suffix: "", label: "Cities" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

function Stats() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-gold text-5xl md:text-6xl font-playfair font-bold mb-3">
                <Counter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-gray-300 text-sm md:text-base tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;