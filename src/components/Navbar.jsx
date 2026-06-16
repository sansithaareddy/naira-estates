import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect scroll to switch navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span
            className={`font-playfair text-2xl font-bold tracking-tight ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Naira Estates
          </span>
          <span
            className={`text-[10px] tracking-[0.3em] uppercase mt-0.5 ${
              scrolled ? "text-gold" : "text-gold"
            }`}
          >
            Building Tomorrow's Landmarks
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-wide relative group transition-colors ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              {link.name}
              {/* Gold underline on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <Link
            to="/contact"
            className="bg-gold text-navy px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-navy hover:text-white transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={scrolled || mobileOpen ? "text-navy" : "text-white"} size={28} />
          ) : (
            <Menu className={scrolled ? "text-navy" : "text-white"} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-navy text-base font-medium py-2 border-b border-gray-100"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-gold text-navy px-6 py-3 text-center text-sm font-semibold mt-2"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;