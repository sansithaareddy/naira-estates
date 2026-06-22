import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur shadow-[0_1px_0_rgba(0,0,0,0.06)] py-4"
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl md:text-[26px] tracking-wide text-ink">
            Naira Estates
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 text-ink"
            aria-label="Open menu"
          >
            <span className="hidden md:inline text-[12px] tracking-[0.25em] uppercase">
              Menu
            </span>
            <Menu size={26} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink text-white flex flex-col"
          >
            <div className="flex justify-between items-center px-6 md:px-10 py-7 max-w-[1500px] mx-auto w-full">
              <span className="font-serif text-2xl tracking-wide">Naira Estates</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={28} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 md:px-16 gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={l.path}
                    onClick={() => setOpen(false)}
                    className="font-serif text-5xl md:text-7xl font-light block py-2 text-white/90 hover:text-white transition-colors"
                  >
                    {l.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-8 md:px-16 pb-10 text-white/50 text-sm tracking-wide">
              hello@nairaestates.com · +91 98765 43210
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;