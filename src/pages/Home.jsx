import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Legacy from "../components/Legacy";
import FeaturedProjects from "../components/FeaturedProjects";
import WhyNaira from "../components/WhyNaira";
import Testimonials from "../components/Testimonials";
import ClosingCTA from "../components/ClosingCTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <Hero />
      <Legacy />
      <FeaturedProjects />
      <WhyNaira />
      <Testimonials />
      <ClosingCTA />
      <Footer />
    </div>
  );
}

export default Home;