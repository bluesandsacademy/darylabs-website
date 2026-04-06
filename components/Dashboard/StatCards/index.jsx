"use client";

export default function StatCards({ stats, isLoading = false }) {
  if (isLoading) {
    return (
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="p-4 md:p-5 rounded-xl md:rounded-2xl bg-white shadow-sm animate-pulse">
            <div className="flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-6 bg-gray-200 rounded w-16"></div>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded"></div>
            </div>
            <div className="mt-3 h-4 bg-gray-200 rounded w-20"></div>
            <div className="mt-2 h-4 bg-gray-200 rounded w-32"></div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="p-4 md:p-5 rounded-xl md:rounded-2xl bg-white shadow-sm">
          <div className="flex justify-between items-start">
            <div className="space-y-1 flex-1">
              <h3 className="text-sm md:text-md text-gray-600 font-medium leading-tight">
                {stat.title}
              </h3>
              <p className="text-lg md:text-xl font-semibold text-gray-900">{stat.value}</p>
            </div>
            <div className="flex-shrink-0 ml-2">
              <img src={stat.icon} alt="" className="w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>
          {stat.trendIcon && (
            <div className="mt-3">
              <img src={stat.trendIcon} alt="" className="w-16 h-4 md:w-20 md:h-5" />
            </div>
          )}
          {stat.percentageChange && (
            <div className="mt-2">
              <p className="text-green-600 font-medium text-sm md:text-base">
                {stat.percentageChange}{" "}
                <span className="text-gray-400 font-normal">{stat.timeFrame}</span>
              </p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
