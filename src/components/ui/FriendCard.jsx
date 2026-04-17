import { Link } from "react-router";

const statusConfig = {
  overdue: {
    bg: "bg-red-100",
    text: "text-red-600",
    badge: "badge-error",
    label: "Overdue",
  },
  "almost due": {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
    badge: "badge-warning",
    label: "Almost Due",
  },
  "on-track": {
    bg: "bg-green-100",
    text: "text-green-600",
    badge: "badge-success",
    label: "On Track",
  },
};

const FriendCard = ({ friend }) => {
  const config = statusConfig[friend.status] || statusConfig["on-track"];

  return (
    <Link
      to={`/friend/${friend.id}`}
      className={`card shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer ${config.bg}`}
    >
      <div className="card-body p-4 items-center text-center">
        

        <img
          src={friend.picture}
          alt={friend.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow mx-auto"
        />

        
        
        <h3 className="font-semibold text-gray-800">{friend.name}</h3>

        
        
        <span className={`badge badge-sm ${config.badge}`}>
          {config.label}
        </span>

        
        <p className={`text-sm font-medium ${config.text}`}>
          {friend.days_since_contact} days since contact
        </p>

        
        <div className="flex flex-wrap gap-1 justify-center">
          {friend.tags.map((tag, i) => (
            <span key={i} className="badge badge-ghost badge-sm text-xs bg-white/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};


export default FriendCard;
