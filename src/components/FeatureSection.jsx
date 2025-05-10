import { Wrench, BarChart, Plug, Rocket, Zap, Target } from 'lucide-react';
import astronautLeft from '../assets/astronaut-left.png';
import astronautRight from '../assets/astronaut-right.png';

const FeatureSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Automated Tasks */}
        <div className="flex flex-col items-center md:items-center">
          <img
            src={astronautLeft}
            alt="Astronaut floating in space"
            loading="lazy"
            className="w-64 h-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-2">Automated Tasks</h2>
          <p className="text-gray-600 mb-4 max-w-md">
            Save time and money with our revolutionary services. We are the leaders in the industry.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-center">
              <Wrench className="text-yellow-500 w-6 h-6 mr-2" />
              Automated task management workflow
            </li>
            <li className="flex items-center">
              <BarChart className="text-yellow-500 w-6 h-6 mr-2" />
              Detailed analytics for your data
            </li>
            <li className="flex items-center">
              <Plug className="text-yellow-500 w-6 h-6 mr-2" />
              Some awesome integrations
            </li>
          </ul>
        </div>

        {/* Boost Productivity */}
        <div className="flex flex-col items-center md:items-center ">
          <h2 className="text-3xl font-bold mb-2">Boost Productivity</h2>
          <p className="text-gray-600 mb-4 max-w-md">
            Build an atmosphere that creates productivity in your organization and your company culture.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-center">
              <Rocket className="text-yellow-500 w-6 h-6 mr-2" />
              Maximize productivity and growth
            </li>
            <li className="flex items-center">
              <Zap className="text-yellow-500 w-6 h-6 mr-2" />
              Speed past your competition
            </li>
            <li className="flex items-center">
              <Target className="text-yellow-500 w-6 h-6 mr-2" />
              Learn the top techniques
            </li>
          </ul>
          <img
            src={astronautRight}
            alt="Astronaut robot with settings window"
            loading="lazy"
            className="w-64 h-auto mb-6"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
