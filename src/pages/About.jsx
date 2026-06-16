import { motion } from "framer-motion";
import { Target, Eye, Quote } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stats from "../components/Stats";

const timeline = [
  { year: "2010", title: "Founded", text: "Naira Estates was established with a vision to redefine urban living in India." },
  { year: "2014", title: "First Landmark", text: "Delivered our debut residential tower, setting new standards in design." },
  { year: "2018", title: "National Expansion", text: "Grew our presence to 5 major cities across the country." },
  { year: "2022", title: "5,000 Homes", text: "Crossed the milestone of 5,000 homes delivered to happy families." },
  { year: "2025", title: "Sustainability First", text: "Pioneered eco-conscious developments with green-certified communities." },
];

const leaders = [
  {
    name: "Sansitha Reddy",
    role: "Founder & Chairman",
    bio: "Three decades in real estate, driven by a passion for timeless design.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80",
  },
  {
    name: "Ananya Kapoor",
    role: "Chief Executive Officer",
    bio: "Leads strategy and growth with a focus on customer-first development.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80",
  },
  {
    name: "Rohan Mehta",
    role: "Head of Architecture",
    bio: "Award-winning architect shaping every Naira landmark's signature look.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80",
  },
  {
    name: "Priya Nair",
    role: "Chief Sustainability Officer",
    bio: "Champions green building practices across all our communities.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",
  },
  {
    name: "Arjun Desai",
    role: "Head of Customer Experience",
    bio: "Ensures every resident's journey is seamless from enquiry to handover.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80",
  },
];

function About() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="About Naira Estates"
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
            About Us
          </p>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
            Our Story
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            A legacy of crafting homes that inspire and endure.
          </p>
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80"
              alt="Our journey"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Who We Are
            </p>
            <h2 className="text-navy text-4xl font-bold mb-6 leading-tight">
              Building Trust, One Home at a Time
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Since 2010, Naira Estates has been at the forefront of India's
              luxury real estate landscape. What began as a single vision has
              grown into a trusted name synonymous with quality, innovation, and
              integrity.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Every development we undertake is a promise — to our residents, our
              partners, and the communities we serve. We don't just build
              structures; we craft the backdrop for life's most cherished
              moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10"
          >
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
              <Target size={30} className="text-gold" />
            </div>
            <h3 className="text-navy text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              To create exceptional living spaces that blend timeless design,
              modern comfort, and sustainable practices — enriching the lives of
              every family that calls a Naira residence home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white p-10"
          >
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
              <Eye size={30} className="text-gold" />
            </div>
            <h3 className="text-navy text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              To be India's most trusted luxury developer, recognised for
              landmarks that stand the test of time and communities that thrive
              for generations to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics (reused component) */}
      <Stats />

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Our Journey
            </p>
            <h2 className="text-navy text-4xl md:text-5xl font-bold">
              Milestones Through the Years
            </h2>
          </motion.div>

          <div className="relative border-l-2 border-gold/30 ml-3">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 pb-12 last:pb-0"
              >
                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-gold border-4 border-white"></span>
                <span className="text-gold font-bold text-lg">{item.year}</span>
                <h3 className="text-navy text-xl font-bold mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Leadership
            </p>
            <h2 className="text-navy text-4xl md:text-5xl font-bold mb-4">
              The Minds Behind Naira
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A team of visionaries dedicated to building the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-navy text-lg font-bold">{leader.name}</h3>
                <p className="text-gold text-sm mb-2">{leader.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Quote size={48} className="text-gold/40 mx-auto mb-6" />
          <p className="text-white text-2xl md:text-3xl font-playfair italic leading-relaxed mb-6">
            We don't just build homes. We build the foundations of dreams.
          </p>
          <p className="text-gold text-sm tracking-[0.2em] uppercase">
            Sansitha Reddy, Founder
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;