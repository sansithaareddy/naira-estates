import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import About from "../components/About";
import Stats from "../components/Stats";
import Amenities from "../components/Amenities";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <About />
      <Stats />
      <Amenities />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default Home;