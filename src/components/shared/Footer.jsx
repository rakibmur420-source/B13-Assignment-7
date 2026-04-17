const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="container mx-auto px-4 text-center">
        
        {/* Brand Name */}
        <h2 className="text-2xl font-bold">
          <span className="text-white">Keen</span>
          <span className="text-emerald-500">Keeper</span>
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm text-gray-400 max-w-md mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most
        </p>

        {/* Social Link Title */}
        <h3 className="mt-6 text-lg font-semibold text-white">
          Social Link
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mt-4">
          <img src="/assets/facebook.png" alt="facebook" className="w-8 h-8" />
          <img src="/assets/twitter.png" alt="twitter" className="w-8 h-8" />
          <img src="/assets/instagram.png" alt="instagram" className="w-8 h-8" />
        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-500">
          © 2026 KeenKeeper. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
