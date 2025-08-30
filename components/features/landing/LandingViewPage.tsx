import { Footer } from "@/components/layout/Footer";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { Support } from "./Support";
import { Testimonial } from "./Testimonial";

export const LandingViewPage = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonial />

      {/* Call to Action Section */}
      <Support />

      {/* Footer */}
      <Footer />
    </div>
  );
};
