import { useContext, useState } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

const typeConfig = {
  Call: { img: callImg, color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
  Text: { img: textImg, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
  Video: { img: videoImg, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
};

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Call", "Text", "Video"];

  const filtered =
    filter === "All" ? timeline : timeline.filter((e) => e.type === filter);

  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Timeline</h1>
      <p className="text-gray-500 mb-6 text-sm">Your full interaction history.</p>

      
      <div className="flex gap-2 mb-8 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`btn btn-sm ${
              filter === f
                ? "bg-emerald-600 text-white border-none"
                : "btn-outline border-gray-300 text-gray-600 hover:border-emerald-600 hover:text-emerald-600"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <img src={callImg} alt="" className="w-16 h-16 mx-auto mb-4 opacity-20" />
          <p className="text-lg font-medium">No interactions yet.</p>
          <p className="text-sm mt-1">
            Go to a friend's page and log a Call, Text, or Video.
          </p>
        </div>
      ) : (
        <div className="relative">
          
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <ul className="space-y-5 pl-14">
            {filtered.map((entry) => {
              const config = typeConfig[entry.type];
              return (
                <li key={entry.id} className="relative">
                  
                  <div
                    className={`absolute -left-8 w-8 h-8 rounded-full flex items-center justify-center ${config.bg} border-2 border-white shadow`}
                  >
                    <img src={config.img} alt={entry.type} className="w-4 h-4 object-contain" />
                  </div>

                  <div className={`card shadow-sm border ${config.border} bg-base-100`}>
                    <div className="card-body p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={entry.friendPicture}
                          alt={entry.friendName}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-800 truncate">{entry.title}</p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {new Date(entry.date).toLocaleString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              
                            })}
                          </p>
                        </div>
                        <span className={`badge badge-sm ${config.bg} ${config.color} border-none flex-shrink-0`}>
                          {entry.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TimelinePage;
