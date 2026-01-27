export default function CompareModesSection() {
  const modes = [
    {
      mode: "Guided",
      bestFor: "First exposure; safety, scaffolds",
      teacherControl: "Step locks, hints, timer",
      scoring: "optional, formative",
    },
    {
      mode: "Exploratory",
      bestFor: "Inquiry & practice",
      teacherControl: "Looser constraints",
      scoring: "No (scored: reflection",
    },
    {
      mode: "Assessment",
      bestFor: "Checks for understanding",
      teacherControl: "Time windows, attempts",
      scoring: "Auto-graded with rubrics",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4 relative inline-block">
            <span className="relative">
              Compare
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C50 2 100 1 150 2C200 3 250 4 298 6"
                  stroke="#0483e2"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Modes At A Glance
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left py-4 px-6 font-semibold text-base lg:text-lg rounded-tl-xl">
                  Mode
                </th>
                <th className="text-left py-4 px-6 font-semibold text-base lg:text-lg">
                  Best For
                </th>
                <th className="text-left py-4 px-6 font-semibold text-base lg:text-lg">
                  Teacher Control
                </th>
                <th className="text-left py-4 px-6 font-semibold text-base lg:text-lg rounded-tr-xl">
                  Scoring
                </th>
              </tr>
            </thead>
            <tbody>
              {modes.map((mode, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } border-b border-gray-200`}
                >
                  <td className="py-4 px-6 font-semibold text-secondary text-sm lg:text-base">
                    {mode.mode}
                  </td>
                  <td className="py-4 px-6 text-gray-700 text-sm lg:text-base">
                    {mode.bestFor}
                  </td>
                  <td className="py-4 px-6 text-gray-700 text-sm lg:text-base">
                    {mode.teacherControl}
                  </td>
                  <td className="py-4 px-6 text-gray-700 text-sm lg:text-base">
                    {mode.scoring}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
