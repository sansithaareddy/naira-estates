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
  { type: "2 BHK", area: "1,250 sq.ft", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
  { type: "3 BHK", area: "1,850 sq.ft", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80" },
  { type: "4 BHK", area: "2,600 sq.ft", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
];

const fallbackImg = "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [lightboxImg, setLightboxImg] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!project) {
    return (
      <div className="bg-mist">
        <Navbar />
        <div className="h-screen flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-serif text-5xl font-light text-ink mb-5">Project Not Found</h2>
          <Link to="/projects" className="text-ink text-sm tracking-[0.15em] uppercase border-b border-ink pb-1">
            Back to all projects
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
    setLoading(true);
    try {
      await addDoc(collection(db, "enquiries"), {
        ...form,
        project: project.name,
        createdAt: serverTimestamp(),
      });
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
    } finally {
      setLoading(false);
    }
  };

  const scrollToEnquiry = () => {
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-x-clip bg-mist">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[90vh] overflow-hidden">
        <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/30" />
        <div className="relative z-10 h-full max-w-[1500px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/projects" className="inline-flex items-center gap-2 text-ivory/70 hover:text-ivory text-sm tracking-wide mb-8">
              <ArrowLeft size={16} /> Back to Projects
            </Link>
            <p className="text-ivory/70 text-xs tracking-[0.3em] uppercase mb-5">{project.status}</p>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-ivory leading-[0.95] mb-5">
              {project.name}
            </h1>
            <div className="flex items-center gap-2 text-ivory/85">
              <MapPin size={18} /> {project.location}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview + price card */}
      <section className="py-24 md:py-32 bg-mist">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-muted text-xs tracking-[0.3em] uppercase mb-6">Overview</p>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-ink leading-[1.02] mb-8">
              {project.tagline}
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-12 max-w-2xl">
              {project.description}
            </p>

            <h3 className="font-serif text-2xl text-ink mb-6">Project Highlights</h3>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              {project.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 border-t border-ink/10 pt-4">
                  <Check size={18} className="text-ink shrink-0 mt-0.5" />
                  <span className="text-muted">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-ivory border border-ink/10 p-8 sticky top-28">
              <p className="text-muted text-xs tracking-[0.2em] uppercase mb-2">Starting Price</p>
              <p className="font-serif text-4xl font-light text-ink mb-8">{project.price}</p>
              <div className="space-y-4 text-sm border-t border-ink/10 pt-6">
                <div className="flex justify-between">
                  <span className="text-muted">Configuration</span>
                  <span className="text-ink">{project.bhk}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Type</span>
                  <span className="text-ink">{project.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Status</span>
                  <span className="text-ink">{project.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Location</span>
                  <span className="text-ink">{project.city}</span>
                </div>
              </div>
              <button
                onClick={scrollToEnquiry}
                className="w-full text-center bg-ink text-ivory mt-8 py-3.5 text-sm tracking-[0.1em] uppercase hover:bg-ink/90 transition-colors"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <p className="text-muted text-xs tracking-[0.3em] uppercase mb-5 text-center">Gallery</p>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-ink mb-16 text-center">A Closer Look</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxImg(img)}
                className="group relative h-72 overflow-hidden cursor-pointer"
              >
                <img
                  src={img}
                  alt={`${project.name} ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors flex items-center justify-center">
                  <Maximize2 className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 md:py-32 bg-mist">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <p className="text-muted text-xs tracking-[0.3em] uppercase mb-5 text-center">Lifestyle</p>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-ink mb-16 text-center">Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {projectAmenities.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.label}
                  className="flex flex-col items-center text-center p-8 bg-ivory border border-ink/10 hover:border-ink/40 transition-colors"
                >
                  <Icon size={28} strokeWidth={1.25} className="text-ink mb-4" />
                  <span className="text-ink text-sm">{a.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <p className="text-muted text-xs tracking-[0.3em] uppercase mb-5 text-center">Layouts</p>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-ink mb-16 text-center">Floor Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {floorPlans.map((plan) => (
              <div key={plan.type} className="group overflow-hidden border border-ink/10">
                <div className="h-64 overflow-hidden bg-mist">
                  <img
                    src={plan.image}
                    alt={`${plan.type} floor plan`}
                    onError={(e) => {
                      e.target.src = fallbackImg;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center bg-ivory">
                  <h3 className="font-serif text-2xl text-ink">{plan.type}</h3>
                  <p className="text-muted text-sm mt-1">{plan.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 md:py-32 bg-mist">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <p className="text-muted text-xs tracking-[0.3em] uppercase mb-5 text-center">Location</p>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-ink mb-16 text-center">Find Us Here</h2>
          <div className="h-[480px] border border-ink/10 overflow-hidden grayscale">
            <iframe
              title={`Map of ${project.location}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(project.location)}&z=13&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-24 md:py-32 bg-ink">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-ivory/50 text-xs tracking-[0.3em] uppercase mb-5 text-center">Get In Touch</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-ivory text-center mb-4">
            Enquire about {project.name}
          </h2>
          <p className="text-ivory/60 text-center mb-12">
            Share your details and our team will reach out shortly.
          </p>

          {submitted ? (
            <div className="bg-ivory p-12 text-center">
              <Check size={44} className="text-ink mx-auto mb-5" />
              <h3 className="font-serif text-3xl text-ink mb-2">Thank You</h3>
              <p className="text-muted">Your enquiry has been received. We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-ivory p-8 md:p-10 space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border border-ink/15 px-4 py-3.5 text-ink focus:outline-none focus:border-ink transition-colors"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border border-ink/15 px-4 py-3.5 text-ink focus:outline-none focus:border-ink transition-colors"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border border-ink/15 px-4 py-3.5 text-ink focus:outline-none focus:border-ink transition-colors"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full border border-ink/15 px-4 py-3.5 text-ink focus:outline-none focus:border-ink transition-colors"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-ink text-ivory py-4 text-sm tracking-[0.1em] uppercase hover:bg-ink/90 transition-colors disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 bg-ink/95 z-[100] flex items-center justify-center p-6 cursor-pointer"
        >
          <img src={lightboxImg} alt="Enlarged view" className="max-w-full max-h-full object-contain" />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ProjectDetails;