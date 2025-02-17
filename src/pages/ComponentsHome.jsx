import { Link, Outlet } from "react-router-dom";
import { componentsList } from "../utils/homePageUtils";

const ComponentsHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Explore Our Components
        </h1>
        <p className="text-lg md:text-xl">
          Reusable and fully customizable UI components.
        </p>
      </header>

      {/* Components List */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Available Components
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {componentsList
            .slice(0, componentsList.length - 1)
            .map((component, index) => (
              <Link
                key={index}
                to={component.path} // Use relative path
                className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border"
              >
                <h3 className="text-xl font-semibold">{component.name}</h3>
                <p className="text-gray-600 mt-2">{component.desc}</p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ComponentsHome;
