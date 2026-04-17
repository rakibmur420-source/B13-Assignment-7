import { Link } from "react-router";
import { FaUserPlus, FaHistory } from "react-icons/fa";
import FriendCard from "../ui/FriendCard";

const FriendsSection = ({ friends }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Centered heading and paragraph */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Your Connections</h2>
        <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
          Stay on top of your relationships by tracking when you last connected and when to reach out next.
        </p>

        {/* Buttons */}
        <div className="flex gap-2 justify-center mt-4">
          <button className="btn btn-sm bg-emerald-600 text-white border-none hover:bg-emerald-700 gap-1">
            <FaUserPlus />
            Add Friend
          </button>
          <Link to="/history" className="btn btn-sm btn-outline gap-1">
            <FaHistory />
            View Timeline
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </section>
  );
};

export default FriendsSection;