import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const menuItems = [
  { name: "About", link: "#" },
  {
    name: "Our Work",
    subMenu: [
      { name: "Web Development", link: "#" },
      { name: "Machine Learning", link: "#" },
      { name: "UI/UX Design", link: "#" },
    ],
  },
  {
    name: "Technologies",
    subMenu: [
      { name: "JavaScript", link: "#" },
      { name: "React", link: "#" },
      { name: "Node.js", link: "#" },
    ],
  },
  { name: "Get Involved", link: "#" },
  { name: "Why Trees", link: "#" },
  { name: "News & Stories", link: "#" },
  { name: "Gifting", link: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <header className="bg-white text-green-800">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-7">
          <a href="#" className="text-2xl font-bold">CallXEarth</a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 z-10">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <a href={item.link} className="flex items-center gap-1 cursor-pointer hover:text-green-400 transition">
                  {item.name}
                  {item.subMenu && <FaChevronDown className="text-xs" />}
                </a>

                {/* Dropdown Menu */}
                {item.subMenu && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white text-green-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="hover:bg-gray-300">
                        <a href={subItem.link} className="block px-4 py-2">{subItem.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Donate Now Button */}
        <a href="#" className="hidden md:block bg-green-700 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
          Donate Now
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white h-screen z-50 transition-transform duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-full"} md:hidden`}>
        <ul className="flex flex-col items-center py-6 space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="w-full text-center">
              <button
                className="w-full py-2 flex items-center justify-center hover:text-green-400 transition"
                onClick={() => setOpenSubMenu(openSubMenu === index ? null : index)}
              >
                {item.name}
                {item.subMenu && <FaChevronDown className="ml-2 text-xs" />}
              </button>

              {/* Mobile Dropdown */}
              {item.subMenu && openSubMenu === index && (
                <ul className="mt-2 bg-gray-100 rounded-md">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="hover:bg-gray-300">
                      <a href={subItem.link} className="block px-6 py-2">{subItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="mt-4">
            <a href="#" className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Donate Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
