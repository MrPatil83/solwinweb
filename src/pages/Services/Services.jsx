import { motion } from "framer-motion";
import { FaIndustry, FaServer, FaTools, FaChartLine } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      {/* Services Hero Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center text-white"
          >
            Our Comprehensive Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center text-gray-300 mb-12"
          >
            From home automation to industrial solutions, we offer a wide range
            of services to meet your needs
          </motion.p>
        </div>
      </section>

      {/* Home Automation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Home Automation
              </h2>
              <p className="text-gray-600 mb-6">
                Transform your home into a smart, efficient, and secure living
                space with our cutting-edge home automation solutions.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Smart lighting control systems</li>
                <li>Advanced security and surveillance</li>
                <li>Energy management and optimization</li>
                <li>Automated HVAC and climate control</li>
                <li>Voice-activated home assistants integration</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Home Automation"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industrial Automation Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-8 md:mb-0 md:pl-8"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Industrial Automation
              </h2>
              <p className="text-gray-600 mb-6">
                Optimize your industrial processes with our state-of-the-art
                automation solutions, designed to increase efficiency and
                productivity.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>PLC and SCADA system integration</li>
                <li>Robotic process automation</li>
                <li>Industrial IoT implementations</li>
                <li>Manufacturing execution systems (MES)</li>
                <li>Custom control panel design and fabrication</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1565939974-1285a7144df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Industrial Automation"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* IT Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                IT Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                Empower your business with robust IT infrastructure and
                solutions tailored to your specific needs.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Network design and implementation</li>
                <li>Server solutions and cloud integration</li>
                <li>Cybersecurity and data protection</li>
                <li>VoIP and unified communications</li>
                <li>IT consulting and managed services</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="IT Solutions"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Electrical Work Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-8 md:mb-0 md:pl-8"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Electrical Work
              </h2>
              <p className="text-gray-600 mb-6">
                From installation to maintenance, our expert electricians ensure
                safe and efficient electrical systems for your home or business.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Commercial and industrial electrical installations</li>
                <li>Electrical system upgrades and retrofitting</li>
                <li>Emergency power systems and generators</li>
                <li>Energy-efficient lighting solutions</li>
                <li>Electrical safety inspections and maintenance</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Electrical Work"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800"
          >
            Our Service Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaChartLine />,
                title: "Consultation",
                description:
                  "We start by understanding your unique needs and challenges.",
              },
              {
                icon: <FaTools />,
                title: "Custom Design",
                description:
                  "Our experts create a tailored solution to address your specific requirements.",
              },
              {
                icon: <FaIndustry />,
                title: "Implementation",
                description:
                  "We efficiently implement the solution with minimal disruption to your operations.",
              },
              {
                icon: <FaServer />,
                title: "Ongoing Support",
                description:
                  "We provide continuous maintenance and support to ensure optimal performance.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
