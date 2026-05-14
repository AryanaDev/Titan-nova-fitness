import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import WorkoutPlan from "@/components/WorkoutPlan";
import Transformations from "@/components/Transformations";
import Calculator from "@/components/Calculator";
import Pricing from "@/components/Pricing";
import BentoFeatures from "@/components/BentoFeatures";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="nova-aurora" aria-hidden="true" />
      <div className="nova-grid" aria-hidden="true" />
      <Navbar />
      <Hero />
      <Programs />
      <WorkoutPlan />
      <Transformations />
      <Calculator />
      <Pricing />
      <BentoFeatures />
      <Footer />
    </main>
  );
}
