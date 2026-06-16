import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const socialIcons = [FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter];

const quickLinks = ["Home", "Projects", "About", "Contact"];

const projectLinks = ["Naira Skyview", "Naira Greens", "Naira Waterfront"];

function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-playfair text-2xl font-bold mb-2">
              Naira Estates
            </h3>
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">
              Building Tomorrow's Landmarks
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting premium residences that redefine urban living across
              India's most vibrant cities.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-5">
              Our Projects
            </h4>
            <ul className="space-y-3 text-sm">
              {projectLinks.map((item) => (
                <li key={item}>
                  <Link
                    to="/projects"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <span>Hitech City, Hyderabad, Telangana 500081</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span>hello@nairaestates.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Naira Estates. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;