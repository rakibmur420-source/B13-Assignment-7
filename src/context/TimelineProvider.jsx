import { useState } from "react";
import { TimelineContext } from "./TimelineContext";

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEntry = (friend, type) => {
    const now = new Date();
    const newEntry = {
      id: Date.now(),
      friendName: friend.name,
      friendPicture: friend.picture,
      type,
      title: `${type} with ${friend.name}`,
      date: now.toISOString(),
    };
    setTimeline((prev) => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;
