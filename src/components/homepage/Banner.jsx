const Banner = ({ friends }) => {
  const total = friends.length;
  const strong = friends.filter((f) => f.status === "on-track").length;
  const attention = friends.filter((f) => f.status === "overdue").length;
  const interactionsThisMonth = 24;

  const summaryCards = [
    {
      label: "Total Connections",
      value: total,
      desc: "People you've added in your circle",
      color: "bg-blue-50 border-blue-100 text-blue-700",
    },
    {
      label: "Strong Bonds",
      value: strong,
      desc: "Friends you interact with regularly",
      color: "bg-green-50 border-green-100 text-green-700",
    },
    {
      label: "Needs Attention",
      value: attention,
      desc: "Connections you haven't talked to recently",
      color: "bg-red-50 border-red-100 text-red-700",
    },
    {
      label: "Interactions This Month",
      value: interactionsThisMonth,
      desc: "Messages, calls, or meetups tracked",
      color: "bg-purple-50 border-purple-100 text-purple-700",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Friends to keep close in your life{" "}
          
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto mb-8 text-base md:text-lg">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.
        </p>

        {/* Only Get Started button */}
        <button className="btn bg-emerald-600 text-white border-none hover:bg-emerald-700 mb-12">
          + Add a friend
        </button>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {summaryCards.map((card, i) => (
            <div
              key={i}
              className={`rounded-xl p-5 text-left shadow-sm border ${card.color}`}
            >
              <p className="text-3xl font-bold">{card.value}</p>
              <p className="font-semibold text-sm mt-1">{card.label}</p>
              <p className="text-xs opacity-70 mt-1">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
