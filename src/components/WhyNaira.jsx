import { motion } from "framer-motion";
import { projects } from "../data/projects";

const features = [
  {
    title: "Strategic Locations",
    short: "Positioned where tomorrow's growth begins.",
    detail:
      "Every Naira Estates development is selected through extensive market research, connectivity planning, infrastructure forecasts, and long-term appreciation potential.",
    img: projects[0]?.image,
  },
  {
    title: "Thoughtful Design",
    short: "Spaces that feel larger, brighter, and smarter.",
    detail:
      "Every home is designed to maximize natural light, ventilation, privacy, functionality, and everyday comfort for modern families.",
    img: projects[1]?.image,
  },
  {
    title: "Uncompromised Quality",
    short: "Built with precision and lasting value.",
    detail:
      "From structural engineering to interior finishes, every detail is carefully executed using trusted materials and rigorous quality standards.",
    img: projects[2]?.image,
  },
  {
    title: "Delivered On Time",
    short: "Commitments that become reality.",
    detail:
      "We follow disciplined project management practices to ensure timely delivery without compromising quality or customer expectations.",
    img: projects[3]?.image,
  },
  {
    title: "Lifestyle-Driven Amenities",
    short: "More than amenities, complete experiences.",
    detail:
      "Clubhouses, wellness spaces, recreation zones, and community facilities are designed to enrich everyday living for all age groups.",
    img: projects[4]?.image,
  },
  {
    title: "Experience Before You Buy",
    short: "See the vision before possession.",
    detail:
      "Through immersive walkthroughs, model homes, and visual experiences, buyers gain confidence in every investment decision.",
    img: projects[5]?.image,
  },
  {
    title: "Transparency In Every Detail",
    short: "No surprises. Only clarity.",
    detail:
      "Specifications, materials, finishes, and construction standards are communicated openly to help customers make informed decisions.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
  },
  {
    title: "End-to-End Accountability",
    short: "One trusted partner throughout the journey.",
    detail:
      "From planning and approvals to construction and handover, Naira Estates maintains complete responsibility across every stage.",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80",
  },
  {
    title: "Customer-Centric Living",
    short: "Homes designed around real people.",
    detail:
      "Every project is planned around the evolving needs of families, creating communities that encourage comfort, connection, and long-term happiness.",
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1400&q=80",
  },
];

function WhyNaira() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-muted text-xs tracking-[0.3em] uppercase mb-5">
            Why Naira Estates
          </p>
          <h2 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] text-ink">
            Crafted on promises,
            <br className="hidden md:block" /> not just concrete.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-start">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            >
              <div className="group relative overflow-hidden min-h-[420px] md:min-h-[460px] flex flex-col justify-end p-8 transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_40px_80px_-25px_rgba(20,20,20,0.5)]">
                <img
                  src={f.img}
                  alt={f.title}
                  onError={(e) => {
                    e.currentTarget.src = projects[0]?.image;
                  }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/45 to-ink/5 transition-all duration-300 group-hover:from-ink group-hover:via-ink/70" />

                <span className="absolute top-7 right-7 z-10 font-sans text-[11px] tracking-[0.25em] text-ivory/60">
                  0{i + 1}
                </span>

                <div className="relative z-10 text-ivory">
                  <h3 className="font-serif text-3xl md:text-[2rem] font-light leading-tight mb-3">
                    {f.title}
                  </h3>
                  <p className="text-ivory/80 text-sm md:text-[15px] leading-relaxed">
                    {f.short}
                  </p>

                  {/* Hover-revealed detail */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <div className="overflow-hidden">
                      <div className="pt-4 mt-4 border-t border-ivory/25 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        <p className="text-ivory/80 text-sm leading-relaxed">
                          {f.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyNaira;