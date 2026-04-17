import { Link } from "react-router";
import logoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logoImg} alt="BondTrack" className="w-8 h-8 object-contain" />
              <span className="font-bold text-white text-lg">BondTrack</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Keep your meaningful connections close. Never lose touch with the people who matter most.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h4 className="font-semibold text-white mb-3">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><Link to="/history" className="hover:text-emerald-400 transition-colors">History</Link></li>
                <li><Link to="/analytics" className="hover:text-emerald-400 transition-colors">Analytics</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                <li><a href="#terms" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          Copyright © 2026 BondTrack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
