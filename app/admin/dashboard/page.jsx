"use client";

import StatCards from "@/components/Dashboard/StatCards";

const tractionStats = [
  { title: "Schools Reached", value: "11+", icon: "/images/icon/total_schools.svg", percentageChange: "Across Uganda", timeFrame: "" },
  { title: "Science Learners", value: "2,000+", icon: "/images/icon/total_users.svg", percentageChange: "Science Students", timeFrame: "" },
  { title: "Female Participation", value: "40%", icon: "/images/icon/studentgrad.svg", percentageChange: "Girls enrolled", timeFrame: "" },
  { title: "Inclusive Access", value: "10%", icon: "/images/icon/health-walk-supported.svg", percentageChange: "PWD students", timeFrame: "" },
];

const positiveOutcomes = [
  { pct: "35%", desc: "improvement in science comprehension" },
  { pct: "25%", desc: "increase in exam performance" },
];

const keyPartnerships = [
  "Ministry of Education & Sports (MoES)",
  "HivoLabs",
  "National Council for Higher Education (NCHE)",
  "National Curriculum Development Centre (NCDC)",
  "Education Standards Agency",
  "Health Professional Councils",
  "Secondary Science and Mathematics Teachers",
];

const Page = () => {
  return (
    <div className="p-2 md:p-3 lg:p-4 flex flex-col gap-3 lg:gap-5">

      {/* Header */}
      <div className="bg-white rounded-md p-3 md:p-4 shadow-sm flex flex-col gap-0.5">
        <p className="font-semibold text-blue-950 lg:text-lg">Platform Overview</p>
        <p className="text-xs text-slate-500">Traction and impact metrics — Uganda</p>
      </div>

      {/* Headline stats */}
      <StatCards stats={tractionStats} />

      {/* Outcomes & Partnerships */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">

        <div className="bg-white rounded-md shadow-sm p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <p className="font-semibold text-blue-950 text-sm">Positive Outcomes</p>
            <span className="text-xs text-slate-400">Active schools — offline lab packs</span>
          </div>
          {positiveOutcomes.map((o) => (
            <div key={o.pct} className="flex items-center gap-3">
              <span className="text-sm font-bold text-bgBlue bg-blue-50 border border-blue-100 rounded-md px-3 py-2 min-w-14 text-center shrink-0">
                {o.pct}
              </span>
              <p className="text-sm text-gray-600">{o.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-md shadow-sm p-4 flex flex-col gap-3">
          <p className="font-semibold text-blue-950 text-sm border-b border-gray-100 pb-2">Key Partnerships</p>
          <ul className="flex flex-col gap-0">
            {keyPartnerships.map((p) => (
              <li key={p} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                <span className="w-1.5 h-1.5 rounded-full bg-bgBlue shrink-0" />
                <span className="text-sm text-gray-600">{p}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Page;
