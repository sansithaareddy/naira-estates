import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { projects } from "../data/projects";

const navItems = [
  { name: "Home", path: "/", image: projects[0]?.image },
  { name: "Projects", path: "/projects", image: projects[2]?.image },
  {
    name: "About",
    path: "/about",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  },
  { name: "Contact", path: "/contact", image: projects[4]?.image },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(0);
  const [time, setTime] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  // scroll background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // live Hyderabad clock
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const barText = menuOpen ? "text-ivory" : "text-ink";
  const close = () => setMenuOpen(false);

  return (
    <>
      {/* Scroll progress line */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-ink origin-left z-[101]"
      />

      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled && !menuOpen
            ? "bg-ivory/90 backdrop-blur-md border-b border-ink/10 py-4"
            : "py-6"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link
            to="/"
            onClick={close}
            className={`font-serif text-2xl md:text-3xl font-light tracking-tight transition-colors ${barText}`}
          >
            Naira Estates
          </Link>

          <div className={`flex items-center gap-6 ${barText}`}>
            <span className="hidden sm:block font-sans text-[11px] tracking-[0.2em] uppercase opacity-70">
              Hyderabad {time}
            </span>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-3"
              aria-label="Toggle menu"
            >
              <span className="text-xs tracking-[0.2em] uppercase">
                {menuOpen ? "Close" : "Menu"}
              </span>
              <span className="relative block w-7 h-4">
                <span
                  className={`absolute left-0 h-px w-7 bg-current transition-all duration-300 ${
                    menuOpen ? "top-1/2 rotate-45" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 h-px w-7 bg-current transition-all duration-300 ${
                    menuOpen ? "top-1/2 -rotate-45" : "bottom-1"
                  }`}
                ></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen gallery menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] bg-ink"
          >
            <div className="h-full max-w-[1500px] mx-auto px-6 md:px-10 pt-32 pb-12 grid lg:grid-cols-2 gap-10">
              {/* Links */}
              <nav
                className="flex flex-col justify-center"
                onMouseLeave={() => setActive(0)}
              >
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                  >
                    <Link
                      to={item.path}
                      onClick={close}
                      onMouseEnter={() => setActive(i)}
                      className="group flex items-baseline gap-4 md:gap-6 py-2 md:py-3"
                    >
                      <span className="font-sans text-xs text-ivory/40">
                        0{i + 1}
                      </span>
                      <span
                        className={`font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] transition-all duration-300 group-hover:translate-x-3 ${
                          active === i ? "text-ivory" : "text-ivory/40"
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Image preview (desktop) */}
              <div className="relative hidden lg:block overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active}
                    src={navItems[active].image}
                    alt=""
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Footer row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-0 left-0 right-0 border-t border-ivory/15"
            >
              <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-ivory/60 text-sm">
                <div className="flex items-center gap-6">
                  <button
                    onClick={() =>
                      (window.location.href = "mailto:hello@nairaestates.com")
                    }
                    className="hover:text-ivory transition-colors"
                  >
                    hello@nairaestates.com
                  </button>
                  <button
                    onClick={() => (window.location.href = "tel:+919876543210")}
                    className="hover:text-ivory transition-colors"
                  >
                    +91 98765 43210
                  </button>
                </div>
                <span className="font-sans text-[11px] tracking-[0.2em] uppercase">
                  Hyderabad · {time} IST
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;