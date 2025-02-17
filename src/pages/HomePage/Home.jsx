import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Feature Grid */}
      <FeatureSection />

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Start Building with React UI Kit</h2>
        <p className="text-lg mt-2">
          Use our pre-built components to speed up your development.
        </p>
        <Link
          to="/components"
          className="mt-6 inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
