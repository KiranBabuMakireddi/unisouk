import BlogSection from "./components/BlogSection";
import FeatureSection from "./components/FeatureSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TeamSection from "./components/TeamSection";
import TrustedLogos from "./components/TrustedLogos";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedLogos/>
        <FeatureSection/>
        <FeaturesSection/>
        <TeamSection/>
        <BlogSection/>
      </main>
      <Footer/>
    </>
  );
}
