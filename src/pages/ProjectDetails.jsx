import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Check,
  ArrowLeft,
  Maximize2,
  Waves,
  Dumbbell,
  ShieldCheck,
  Trees,
  Car,
  Building2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import { db } from "../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { sendEnquiryEmail } from "../config/emailjs";

const projectAmenities = [
  { icon: Waves, label: "Swimming Pool" },
  { icon: Dumbbell, label: "Gymnasium" },
  { icon: Trees, label: "Landscaped Gardens" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Car, label: "Covered Parking" },
  { icon: Building2, label: "Clubhouse" },
];

const floorPlans = [
  {
    type: "2 BHK",
    area: "1,250 sq.ft",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    type: "3 BHK",
    area: "1,850 sq.ft",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
  },
  {
    type: "4 BHK",
    area: "2,600 sq.ft",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

const fallbackImg =
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [lightboxImg, setLightboxImg] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!project) {
    return (
      <div>
        <Navbar />
        <div className="h-screen flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-navy text-3xl font-bold mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-gold font-medium">
            ← Back to all projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1. Save to Firestore
      await addDoc(collection(db, "enquiries"), {
        ...form,
        project: project.name,
        createdAt: serverTimestamp(),
      });
      // 2. Send email notification (won't block success if email fails)
      try {
        await sendEnquiryEmail({ ...form, project: project.name });
      } catch (emailErr) {
        console.error("Email failed:", emailErr);
      }
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Error saving enquiry:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[80vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-16"
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-200 hover:text-gold mb-6 text-sm"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>
          <span className="inline-block bg-gold text-navy text-xs font-semibold px-3 py-1 uppercase tracking-wide mb-4">
            {project.status}
          </span>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-3">
            {project.name}
          </h1>
          <div className="flex items-center text-gray-200">
            <MapPin size={18} className="mr-2 text-gold" />
            {project.location}
          </div>
        </motion.div>
      </section>

      {/* Overview + Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Overview
            </p>
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-6">
              {project.tagline}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <h3 className="text-navy text-xl font-bold mb-5">
              Project Highlights
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-gold" />
                  </span>
                  <span className="text-text-secondary">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-light-bg p-8 sticky top-28">
              <p className="text-text-secondary text-sm mb-1">Starting Price</p>
              <p className="text-navy text-3xl font-bold mb-6">
                {project.price}
              </p>
              <div className="space-y-3 text-sm border-t border-gray-200 pt-6">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Configuration</span>
                  <span className="text-navy font-medium">{project.bhk}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Type</span>
                  <span className="text-navy font-medium">{project.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Status</span>
                  <span className="text-navy font-medium">{project.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Location</span>
                  <span className="text-navy font-medium">{project.location}</span>
                </div>
              </div>
              <a
                href="#enquiry"
                className="block text-center bg-navy text-white mt-6 py-3.5 text-sm font-semibold hover:bg-gold hover:text-navy transition-all"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 text-center">
            Gallery
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-12 text-center">
            A Closer Look
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxImg(img)}
                className="group relative h-64 overflow-hidden cursor-pointer"
              >
                <img
                  src={img}
                  alt={`${project.name} ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 text-center">
            Lifestyle
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-12 text-center">
            Amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {projectAmenities.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.label}
                  className="flex flex-col items-center text-center p-6 border border-gray-100 hover:border-gold transition-colors"
                >
                  <Icon size={28} className="text-gold mb-3" />
                  <span className="text-navy text-sm font-medium">{a.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 text-center">
            Layouts
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-12 text-center">
            Floor Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {floorPlans.map((plan) => (
              <div
                key={plan.type}
                className="bg-white shadow-sm group overflow-hidden"
              >
                <div className="h-64 overflow-hidden bg-white">
                  <img
                    src={plan.image}
                    alt={`${plan.type} floor plan`}
                    onError={(e) => {
                      e.target.src = fallbackImg;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-navy text-xl font-bold">{plan.type}</h3>
                  <p className="text-text-secondary text-sm mt-1">{plan.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location — live map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 text-center">
            Location
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-12 text-center">
            Find Us Here
          </h2>
          <div className="h-96 border border-gray-200 overflow-hidden">
            <iframe
              title={`Map of ${project.location}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                project.location
              )}&z=13&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 text-center">
            Get In Touch
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-3 text-center">
            Enquire About {project.name}
          </h2>
          <p className="text-gray-300 text-center mb-10">
            Fill in your details and our team will reach out shortly.
          </p>

          {submitted ? (
            <div className="bg-white p-10 text-center">
              <Check size={48} className="text-gold mx-auto mb-4" />
              <h3 className="text-navy text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-text-secondary">
                Your enquiry has been received. We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gold text-navy py-4 font-semibold hover:bg-navy hover:text-white transition-all"
              >
                Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-6 cursor-pointer"
        >
          <img
            src={lightboxImg}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ProjectDetails;