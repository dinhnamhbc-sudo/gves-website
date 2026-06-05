import About from "../components/About.jsx";
import Capabilities from "../components/Capabilities.jsx";
import Contact from "../components/Contact.jsx";
import CoreValues from "../components/CoreValues.jsx";
import CTASection from "../components/CTASection.jsx";
import FeaturedProjects from "../components/FeaturedProjects.jsx";
import Gallery from "../components/Gallery.jsx";
import HeroSlider from "../components/HeroSlider.jsx";
import News from "../components/News.jsx";
import Services from "../components/Services.jsx";
import Subsidiaries from "../components/Subsidiaries.jsx";
import Team from "../components/Team.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Workflow from "../components/Workflow.jsx";

export default function Home({ onNavigate }) {
  return (
    <>
      <HeroSlider onNavigate={onNavigate} />
      <FeaturedProjects onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} compact />
      <About />
      <CoreValues />
      <Workflow />
      <Capabilities />
      <Gallery />
      <Team />
      <Testimonials />
      <Subsidiaries />
      <News />
      <CTASection onNavigate={onNavigate} />
      <Contact />
    </>
  );
}
