import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLightbulb,
  FaIndustry,
  FaServer,
  FaBolt,
  FaChartLine,
} from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0  bg-opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Empowering Your World with Smart Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Revolutionizing industries through cutting-edge automation and
            technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Get Started
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
          >
            About Solwin Enterprises
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                At Solwin Enterprises, we re committed to transforming
                businesses and homes through innovative automation solutions.
                Our mission is to enhance efficiency, security, and comfort in
                every project we undertake.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                Our Expertise
              </h3>
              <p className="text-gray-600">
                With years of experience in home automation, industrial
                automation, IT solutions, and electrical work, we bring a wealth
                of knowledge to every project. Our team of experts is dedicated
                to delivering cutting-edge solutions tailored to your specific
                needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Solwin Enterprises Team"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLightbulb />,
                title: "Home Automation",
                description:
                  "Smart lighting, security systems, and energy management for modern homes.",
              },
              {
                icon: <FaIndustry />,
                title: "Industrial Automation",
                description:
                  "Streamline operations with advanced PLC systems and SCADA solutions.",
              },
              {
                icon: <FaServer />,
                title: "IT Solutions",
                description:
                  "Comprehensive networking and server solutions for businesses of all sizes.",
              },
              {
                icon: <FaBolt />,
                title: "Electrical Work",
                description:
                  "Expert electrical installations, maintenance, and upgrades for commercial and industrial clients.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart City Integration",
                image:
                  "https://s41585.pcdn.co/wp-content/uploads/2020/08/Smart-City_Img_3_v1.jpg",
                description:
                  "Implemented IoT solutions for traffic management and energy conservation in a major metropolitan area.",
              },
              {
                title: "Factory Automation Overhaul",
                image:
                  "http://raneen-world.com/wp-content/uploads/2021/05/Electrical-Automation-Solutions.jpg",
                description:
                  "Modernized a manufacturing plant with state-of-the-art robotics and control systems, increasing productivity by 40%.",
              },
              {
                title: "Sustainable Smart Home",
                image:
                  "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                description:
                  "Designed and installed a fully integrated smart home system with a focus on energy efficiency and sustainability.",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800"
          >
            Why Choose Solwin Enterprises?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChartLine />,
                title: "Industry Expertise",
                description:
                  "With years of experience, we bring unparalleled knowledge to every project.",
              },
              {
                icon: <FaLightbulb />,
                title: "Innovative Solutions",
                description:
                  "We stay at the forefront of technology to provide cutting-edge automation solutions.",
              },
              {
                icon: <FaServer />,
                title: "Scalable Systems",
                description:
                  "Our solutions grow with your business, ensuring long-term value and efficiency.",
              },
              {
                icon: <FaBolt />,
                title: "Energy Efficiency",
                description:
                  "We prioritize sustainable practices and energy-saving technologies in all our projects.",
              },
              {
                icon: <FaIndustry />,
                title: "Custom Automation",
                description:
                  "Tailored solutions designed to meet your specific industry needs and challenges.",
              },
              {
                icon: <FaArrowRight />,
                title: "Ongoing Support",
                description:
                  "We provide continuous support and maintenance to keep your systems running smoothly.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
