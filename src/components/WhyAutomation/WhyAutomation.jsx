import { motion } from "framer-motion";
import { FaShieldAlt, FaLeaf, FaChartLine, FaClock } from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt className="text-3xl mb-4 text-blue-400" />,
    title: "Enhanced Security",
    description:
      "Protect your home and business with advanced security systems and smart locks.",
  },
  {
    icon: <FaLeaf className="text-3xl mb-4 text-green-400" />,
    title: "Energy Efficiency",
    description:
      "Reduce energy consumption and costs with smart lighting and HVAC systems.",
  },
  {
    icon: <FaChartLine className="text-3xl mb-4 text-yellow-400" />,
    title: "Increased Productivity",
    description:
      "Streamline operations and improve efficiency in industrial settings.",
  },
  {
    icon: <FaClock className="text-3xl mb-4 text-purple-400" />,
    title: "Time-Saving",
    description:
      "Automate routine tasks and free up time for more important activities.",
  },
];

const WhyAutomation = () => {
  return (
    <section id="why-automation" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Why Choose Automation?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              {reason.icon}
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAutomation;
