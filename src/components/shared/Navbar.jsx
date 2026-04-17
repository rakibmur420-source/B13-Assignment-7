import { Link } from "react-router";
import { FaHome, FaClock, FaChartPie } from "react-icons/fa";
import MyNavLink from "./MyNavLink";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  const navItems = [
    { path: "/", text: "Home", icon: <FaHome /> },
    { path: "/history", text: "History", icon: <FaClock /> },
    { path: "/analytics", text: "Analytics", icon: <FaChartPie /> },
  ];

  return (
    <nav className="shadow bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="BondTrack" className="w-10 h-10 object-contain" />
          <span className="font-bold text-xl text-gray-800">BondTrack</span>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-6">
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
