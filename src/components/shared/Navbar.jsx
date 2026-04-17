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
        
        {/* Logo Text Only */}
        <Link to="/" className="flex items-center">
          <span className="font-bold text-xl">
            <span className="text-black">Keep</span>
            <span className="text-emerald-600">Keeper</span>
          </span>
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
