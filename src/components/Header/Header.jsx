import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-black text-white py-4 px-6 fixed w-full z-20">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          <Link
            to="/"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Solwin Enterprises
          </Link>
        </motion.h1>
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black py-4"
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block py-2 px-6 text-white hover:bg-gray-800"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
