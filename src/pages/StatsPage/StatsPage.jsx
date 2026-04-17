import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = {
  Call: "#22c55e",
  Text: "#3b82f6",
  Video: "#a855f7",
};

const StatsPage = () => {
  const { timeline } = useContext(TimelineContext);

  const counts = { Call: 0, Text: 0, Video: 0 };
  timeline.forEach((e) => {
    if (counts[e.type] !== undefined) counts[e.type]++;
  });

  const data = Object.entries(counts).map(([name, value]) => ({ name, value }));
  const total = timeline.length;

  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Friendship Analytics</h1>
      <p className="text-gray-500 mb-10 text-sm">
        A visual breakdown of how you've been staying in touch.
      </p>

      {total === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg font-medium">No data yet.</p>
          <p className="text-sm mt-1">
            Log some interactions from a friend's page to see your analytics.
          </p>
        </div>
      ) : (
        <>
          {/* Pie Chart Card */}
          <div className="card shadow border border-gray-100 bg-base-100 mb-6">
            <div className="card-body items-center p-6">
              <h2 className="card-title text-gray-700 mb-4">Interaction Breakdown</h2>
              <div className="w-full flex justify-center">
                <PieChart width={300} height={260}>
                  <Pie
                    data={data}
                    cx={145}
                    cy={115}
                    innerRadius={65}
                    outerRadius={105}
                    paddingAngle={4}
                    cornerRadius={6}
                    dataKey="value"
                    isAnimationActive={true}
                  >
                    {data.map((entry) => (
                      <Cell key={entry.name} fill={COLORS[entry.name]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-4">
            {data.map((item) => (
              <div
                key={item.name}
                className="card shadow-sm border border-gray-100 bg-base-100 text-center"
              >
                <div className="card-body p-4">
                  <p
                    className="text-3xl font-bold"
                    style={{ color: COLORS[item.name] }}
                  >
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-500">{item.name}s</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            Total interactions:{" "}
            <span className="font-semibold text-gray-600">{total}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default StatsPage;
