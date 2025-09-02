import { Footer } from "@/components/layout/Footer";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Download } from "./components/Download";
import { Support } from "./components/Support";
import { Testimonial } from "./components/Testimonial";

export const LandingViewPage = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonial />

      {/* Download Section */}
      <Download />

      {/* Call to Action Section */}
      <Support />

      {/* Footer */}
      <Footer />
    </div>
  );
};
