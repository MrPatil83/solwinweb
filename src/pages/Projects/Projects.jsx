import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart City Integration",
    description:
      "Implemented IoT solutions for traffic management and energy conservation in a major metropolitan area.",
    image:
      "https://s41585.pcdn.co/wp-content/uploads/2020/08/Smart-City_Img_3_v1.jpg",
    category: "Urban Development",
  },
  {
    title: "Factory Automation Overhaul",
    description:
      "Modernized a manufacturing plant with state-of-the-art robotics and control systems, increasing productivity by 40%.",
    image:
      "http://raneen-world.com/wp-content/uploads/2021/05/Electrical-Automation-Solutions.jpg",
    category: "Industrial Automation",
  },
  {
    title: "Sustainable Smart Home",
    description:
      "Designed and installed a fully integrated smart home system with a focus on energy efficiency and sustainability.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Home Automation",
  },
  {
    title: "Corporate Network Infrastructure",
    description:
      "Designed and implemented a comprehensive network solution for a multi-story office building, improving connectivity and security.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "IT Solutions",
  },
  {
    title: "Automated Warehouse System",
    description:
      "Developed a custom PLC-controlled inventory management and logistics system for a large distribution center.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Industrial Automation",
  },
  {
    title: "Smart Grid Implementation",
    description:
      "Collaborated on the development and implementation of a smart grid system for a regional power company.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Energy Management",
  },
];

const Projects = () => {
  return (
    <div>
      {/* Projects Hero Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
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
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center text-gray-300 mb-12"
          >
            Explore our portfolio of innovative solutions across various
            industries
          </motion.p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
                  <span className="text-blue-600 text-sm font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Lets discuss how we can bring your ideas to life with our innovative
            solutions.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
