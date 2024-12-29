import { motion } from "framer-motion";
import { FaHome, FaIndustry, FaServer, FaBolt } from "react-icons/fa";

const services = [
  {
    title: "Home Automation",
    icon: <FaHome className="text-4xl mb-4" />,
    description:
      "CCTV Cameras, Home Alarms, Digital Smart Locks, LED Smart Lighting, Energy Conservation",
  },
  {
    title: "Industrial Automation",
    icon: <FaIndustry className="text-4xl mb-4" />,
    description:
      "Energy Conservation, HVAC, Lighting Operations, DDC Controllers, PLC Control Panels",
  },
  {
    title: "IT Solutions",
    icon: <FaServer className="text-4xl mb-4" />,
    description:
      "Server Solutions, Network Infrastructure, Workplace and Cubical IO Works",
  },
  {
    title: "Electrical Work",
    icon: <FaBolt className="text-4xl mb-4" />,
    description:
      "Electrical Starter Panels, Star Delta Panels, Ventilation PLC Systems",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
