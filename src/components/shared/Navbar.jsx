import { Link } from "react-router";
import { FaHome, FaClock, FaChartPie, FaTachometerAlt } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  const navItems = [
    { path: "/", text: "Home", icon: <FaHome /> },
    { path: "/history", text: "History", icon: <FaClock /> },
    { path: "/analytics", text: "Analytics", icon: <FaChartPie /> },
    { path: "/dashboard", text: "Dashboard", icon: <FaTachometerAlt /> },
  ];

  return (
    <nav className="shadow bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo - text only, no image */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="font-bold text-xl text-gray-800">BondTrack</span>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-4 sm:gap-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <MyNavLink to={item.path}>
                {item.icon}
                <span className="hidden sm:inline">{item.text}</span>
              </MyNavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
