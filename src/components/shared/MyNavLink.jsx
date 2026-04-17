import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-1 font-semibold pb-1 transition-colors ${
          isActive
            ? "text-emerald-600 border-b-2 border-emerald-600"
            : "text-gray-600 hover:text-emerald-600"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
