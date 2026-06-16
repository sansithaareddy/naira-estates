import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { db } from "../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { sendEnquiryEmail } from "../config/emailjs";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Hitech City, Hyderabad", "Telangana 500081, India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210", "+91 98765 43211"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@nairaestates.com", "sales@nairaestates.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon – Sat: 9AM – 7PM", "Sunday: By appointment"],
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. Save to Firestore
      await addDoc(collection(db, "contactMessages"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      // 2. Send email notification (won't block success if email fails)
      try {
        await sendEnquiryEmail({ ...form, project: "General Contact" });
      } catch (emailErr) {
        console.error("Email failed:", emailErr);
      }
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Error saving message:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[55vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
            alt="Contact Naira Estates"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Let's start a conversation.
          </p>
        </motion.div>
      </section>

      {/* Info Cards + Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Reach Out
            </p>
            <h2 className="text-navy text-4xl font-bold mb-6 leading-tight">
              Let's Build Something Together
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              Whether you're looking for your dream home or have a question about
              our developments, our team is here to help.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-navy font-semibold mb-1">
                        {info.title}
                      </h3>
                      {info.lines.map((line) => (
                        <p key={line} className="text-text-secondary text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-light-bg p-8 md:p-10"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <Check size={56} className="text-gold mb-5" />
                <h3 className="text-navy text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-text-secondary">
                  Your message has been received. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-navy text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-navy text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-navy text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-navy text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-navy text-white py-4 font-semibold hover:bg-gold hover:text-navy transition-all disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-96 border border-gray-200 overflow-hidden">
            <iframe
              title="Naira Estates Office Location"
              src="https://maps.google.com/maps?q=Hitech%20City%20Hyderabad&z=14&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;