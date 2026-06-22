import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const explore = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const socials = [
  { Icon: FaInstagram, href: "https://www.instagram.com", label: "Instagram" },
  { Icon: FaFacebookF, href: "https://www.facebook.com", label: "Facebook" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com", label: "LinkedIn" },
  { Icon: FaXTwitter, href: "https://www.x.com", label: "X" },
];

function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid gap-14 lg:gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl md:text-4xl font-light mb-5">
              Naira Estates
            </h3>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-xs mb-8">
              Building tomorrow's landmarks across India's most coveted cities —
              homes crafted to hold their beauty, value, and meaning for
              generations.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-ivory/20 flex items-center justify-center text-ivory/70 hover:bg-ivory hover:text-ink hover:border-ivory transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-ivory/50 text-xs tracking-[0.25em] uppercase mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.path}
                    className="text-ivory/80 text-sm hover:text-ivory transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Residences */}
          <div>
            <h4 className="text-ivory/50 text-xs tracking-[0.25em] uppercase mb-6">
              Residences
            </h4>
            <ul className="space-y-3">
              {projects.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/projects/${p.id}`}
                    className="text-ivory/80 text-sm hover:text-ivory transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-ivory/50 text-xs tracking-[0.25em] uppercase mb-6">
              Get in Touch
            </h4>
            <address className="not-italic text-ivory/80 text-sm leading-relaxed space-y-4">
              <p>
                Naira Estates HQ,
                <br />
                Banjara Hills, Hyderabad,
                <br />
                Telangana 500034
              </p>
              <p>
                <a
                  href="mailto:hello@nairaestates.com"
                  className="hover:text-ivory transition-colors"
                >
                  hello@nairaestates.com
                </a>
              </p>
              <p>
               <a 
                  href="tel:+919876543210"
                  className="hover:text-ivory transition-colors"
                >
                  +91 98765 43210
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="border-t border-ivory/10 overflow-hidden">
        <p className="font-serif text-[19vw] leading-[0.8] text-ivory/[0.04] text-center select-none whitespace-nowrap pt-8 pb-2">
          Naira Estates
        </p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/45 text-xs tracking-wide">
            © 2026 Naira Estates. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-ivory/45 text-xs">
            <span className="hover:text-ivory/80 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-ivory/80 transition-colors cursor-pointer">
              Terms of Use
            </span>
            <span className="hover:text-ivory/80 transition-colors cursor-pointer">
              RERA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;