import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Home Integration",
    description:
      "Fully automated lighting, security, and HVAC system for a luxury residence.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Industrial Energy Management",
    description:
      "Implemented energy conservation measures for a large manufacturing plant.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Corporate Network Infrastructure",
    description:
      "Designed and installed a comprehensive network solution for a multi-story office building.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Automated Warehouse System",
    description:
      "Developed a custom PLC-controlled inventory management and logistics system.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Our Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
