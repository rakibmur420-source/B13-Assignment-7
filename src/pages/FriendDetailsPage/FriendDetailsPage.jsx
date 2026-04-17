import { useParams } from "react-router";
import { useContext } from "react";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";
import {
  FaClock,
  FaArchive,
  FaTrash,
  FaEnvelope,
  FaEdit,
} from "react-icons/fa";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";
import useFriends from "../../hooks/useFriends";
import { TimelineContext } from "../../context/TimelineContext";

const statusConfig = {
  overdue: {
    badge: "badge-error",
    label: "Overdue",
    border: "border-red-200",
    bg: "bg-red-50",
  },
  "almost due": {
    badge: "badge-warning",
    label: "Almost Due",
    border: "border-yellow-200",
    bg: "bg-yellow-50",
  },
  "on-track": {
    badge: "badge-success",
    label: "On Track",
    border: "border-green-200",
    bg: "bg-green-50",
  },
};

const FriendDetailsPage = () => {
  const { id } = useParams();
  const { friends, loading } = useFriends();
  const { addEntry } = useContext(TimelineContext);

  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <HashLoader color="#059669" />
      </div>
    );
  }

  const friend = friends.find((f) => String(f.id) === id);

  if (!friend) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <p className="text-gray-500 text-xl">Friend not found.</p>
      </div>
    );
  }

  const config = statusConfig[friend.status] || statusConfig["on-track"];

  const handleCheckIn = (type) => {
    addEntry(friend, type);
    toast.success(`${type} with ${friend.name} logged! 🎉`);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT COLUMN — Friend Info Card */}
        <div className={`card shadow border ${config.border} ${config.bg}`}>
          <div className="card-body items-center text-center gap-3 p-6">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
            />
            <h2 className="text-2xl font-bold text-gray-800">{friend.name}</h2>
            <span className={`badge ${config.badge} badge-lg`}>{config.label}</span>

            <div className="flex flex-wrap gap-2 justify-center">
              {friend.tags.map((tag, i) => (
                <span key={i} className="badge badge-ghost badge-sm">{tag}</span>
              ))}
            </div>

            <p className="text-gray-500 text-sm">{friend.bio}</p>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FaEnvelope />
              <span className="break-all">{friend.email}</span>
            </div>

            {/* Action Buttons */}
            <div className="divider my-1"></div>
            <div className="flex flex-col gap-2 w-full">
              <button className="btn btn-outline btn-sm gap-2">
                <FaClock /> Snooze 2 Weeks
              </button>
              <button className="btn btn-outline btn-sm gap-2">
                <FaArchive /> Archive
              </button>
              <button className="btn btn-outline btn-error btn-sm gap-2">
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* ① Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="card bg-blue-50 shadow-sm border border-blue-100">
              <div className="card-body p-4 text-center">
                <p className="text-3xl font-bold text-blue-700">{friend.days_since_contact}</p>
                <p className="text-xs text-blue-500 font-medium mt-1">Days Since Contact</p>
              </div>
            </div>
            <div className="card bg-emerald-50 shadow-sm border border-emerald-100">
              <div className="card-body p-4 text-center">
                <p className="text-3xl font-bold text-emerald-700">{friend.goal}</p>
                <p className="text-xs text-emerald-500 font-medium mt-1">Goal (days)</p>
              </div>
            </div>
            <div className="card bg-purple-50 shadow-sm border border-purple-100">
              <div className="card-body p-4 text-center">
                <p className="text-lg font-bold text-purple-700">
                  {new Date(friend.next_due_date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                  })}
                </p>
                <p className="text-xs text-purple-500 font-medium mt-1">Next Due Date</p>
              </div>
            </div>
          </div>

          {/* ② Relationship Goal Card */}
          <div className="card shadow border border-gray-100 bg-base-100">
            <div className="card-body p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-gray-700 text-lg">Relationship Goal</h3>
                <button className="btn btn-ghost btn-sm gap-1 text-emerald-600">
                  <FaEdit /> Edit
                </button>
              </div>
              <p className="text-gray-500 text-sm mb-3">
                Your goal is to contact{" "}
                <span className="font-semibold text-gray-800">{friend.name}</span> every{" "}
                <span className="font-semibold text-emerald-600">{friend.goal} days</span>.
              </p>
              <progress
                className="progress progress-success w-full"
                value={Math.min(friend.days_since_contact, friend.goal)}
                max={friend.goal}
              ></progress>
              <p className="text-xs text-gray-400 mt-1">
                {friend.days_since_contact} / {friend.goal} days used
              </p>
            </div>
          </div>

          {/* ③ Quick Check-In Card */}
          <div className="card shadow border border-gray-100 bg-base-100">
            <div className="card-body p-5">
              <h3 className="font-bold text-gray-700 text-lg mb-4">Quick Check-In</h3>
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => handleCheckIn("Call")}
                  className="btn bg-green-500 text-white border-none hover:bg-green-600 gap-2 flex-1 min-w-[100px]"
                >
                  <img src={callImg} alt="Call" className="w-5 h-5 object-contain" />
                  Call
                </button>
                <button
                  onClick={() => handleCheckIn("Text")}
                  className="btn bg-blue-500 text-white border-none hover:bg-blue-600 gap-2 flex-1 min-w-[100px]"
                >
                  <img src={textImg} alt="Text" className="w-5 h-5 object-contain" />
                  Text
                </button>
                <button
                  onClick={() => handleCheckIn("Video")}
                  className="btn bg-purple-500 text-white border-none hover:bg-purple-600 gap-2 flex-1 min-w-[100px]"
                >
                  <img src={videoImg} alt="Video" className="w-5 h-5 object-contain" />
                  Video
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
