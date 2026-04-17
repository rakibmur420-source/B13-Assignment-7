import { Link } from "react-router";
import { FaUserPlus, FaHistory } from "react-icons/fa";
import FriendCard from "../ui/FriendCard";

const FriendsSection = ({ friends }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Your Connections</h2>
          <p className="text-gray-500 text-sm mt-1">
            Stay on top of your relationships by tracking when you last connected and when to reach out next.
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
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
