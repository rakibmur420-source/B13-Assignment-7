import { Link } from "react-router";
import { FaUserPlus, FaHistory } from "react-icons/fa";
import FriendCard from "../ui/FriendCard";

const FriendsSection = ({ friends }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Your Friends</h2>
        

        
        <div className="flex gap-2 justify-center mt-4">
          
          
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