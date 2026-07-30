import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Problem from "./components/Problem.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import AnimationDemo from "./components/AnimationDemo.jsx";
import CaseStudy from "./components/CaseStudy.jsx";
import Features from "./components/Features.jsx";
import Pricing from "./components/Pricing.jsx";
import VideoSection from "./components/VideoSection.jsx";
import Comparison from "./components/Comparison.jsx";
import FAQ from "./components/FAQ.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Problem />
        <HowItWorks />
        <AnimationDemo />
        <CaseStudy />
        <Features />
        <Pricing />
        <VideoSection />
        <Comparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
