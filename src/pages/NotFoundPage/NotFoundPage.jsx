import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl font-black text-emerald-100 select-none">404</div>
      <h1 className="text-3xl font-bold text-gray-800 -mt-4">Page Not Found</h1>
      <p className="text-gray-500 mt-3 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn bg-emerald-600 text-white border-none mt-8 hover:bg-emerald-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
