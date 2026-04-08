"use client";

import ExperimentCard from "@/components/Dashboard/Experiments/ExperimentCards";
import StatCards from "@/components/Dashboard/StatCards";
import WelcomeBanner from "@/components/Dashboard/WelcomeBanner";
import { getPhetSimulations } from "@/services/dashboard-service";
import FilterButton from "@/services/FilterButton";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CardGridSkeleton } from "@/components/ui/Skeleton";

export default function DashboardExperimentsPage() {
  const [experimentData, setExperimentData] = useState([]);
  const { user, token } = useUser();
  const firstName = user?.fullName?.split(" ")[0];

  const filters = ["All Experiments", "Physics", "Chemistry", "Biology", "Math", "Earth & Space"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const [fetchFilters, setFetchFilters] = useState({
    physics: "", chemistry: "", biology: "", math: "", earthSpace: "", search: "",
  });
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchExperiments() {
      setLoading(true);
      try {
        const data = await getPhetSimulations(token, { ...fetchFilters, page, pageSize });
        setExperimentData(data.items || []);
        setTotal(data.total || 0);
      } catch (err) {
        console.error("Error fetching experiments:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchExperiments();
  }, [token, fetchFilters, page, pageSize]);

  const handleFetchFilterChange = (e) => {
    setFetchFilters({ ...fetchFilters, [e.target.name]: e.target.value });
    setPage(1);
  };

  const handleCourseFilterChange = (filter) => {
    setActiveFilter(filter);
    setFetchFilters({
      ...fetchFilters,
      physics: filter === "Physics" ? "true" : "",
      chemistry: filter === "Chemistry" ? "true" : "",
      biology: filter === "Biology" ? "true" : "",
      math: filter === "Math" ? "true" : "",
      earthSpace: filter === "Earth & Space" ? "true" : "",
    });
    setPage(1);
  };

  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxPages = 5;
    if (totalPages <= maxPages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      let start = Math.max(1, page - 2);
      let end = Math.min(totalPages, page + 2);
      if (page <= 3) end = maxPages;
      else if (page >= totalPages - 2) start = totalPages - maxPages + 1;
      for (let i = start; i <= end; i++) pages.push(i);
    }
    return pages;
  };

  const expStats = [
    { title: "Average Grade", value: "0%", icon: "/images/icon/grad.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
    { title: "Number of Experiments", value: `${total}`, icon: "/images/icon/test-tube.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
    { title: "Number of Attempts", value: "0", icon: "/images/icon/clipboard.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
    { title: "Pre-Experiment Assessments", value: "0", icon: "/images/icon/beaker_01.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
    { title: "Post-Experiment Assessments", value: "0", icon: "/images/icon/microscope.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  ];

  return (
    <div className="m-1">
      <WelcomeBanner firstName={firstName || ""} />
      <StatCards stats={expStats} />

      <div className="flex justify-end p-2">
        <form className="flex gap-3 items-center">
          <input
            className="p-2 text-xs lg:text-sm rounded-md border border-gray-200"
            type="text"
            name="search"
            value={fetchFilters.search}
            onChange={handleFetchFilterChange}
            placeholder="Search experiments..."
          />
        </form>
      </div>

      <FilterButton
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={handleCourseFilterChange}
      />

      {loading && <CardGridSkeleton count={6} />}

      {!loading && experimentData.length > 0 && (
        <>
          <div className="flex flex-wrap gap-4 m-4">
            {experimentData.map((lab) => (
              <ExperimentCard
                key={lab.id}
                lab={{ title: lab.title, url: lab.runnableResource, description: lab.description }}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 mt-6">
            <div className="text-sm text-gray-600">
              Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, total)} of {total} results
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="pageSize" className="text-sm text-gray-600">Show:</label>
              <select id="pageSize" value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }} className="p-2 text-sm rounded-md border border-gray-200">
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} className="p-2 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                <FaChevronLeft />
              </button>
              {page > 3 && totalPages > 5 && (
                <><button onClick={() => handlePageChange(1)} className="px-3 py-1 rounded-md border border-gray-200 hover:bg-gray-100">1</button><span className="px-2">...</span></>
              )}
              {getPageNumbers().map((pageNum) => (
                <button key={pageNum} onClick={() => handlePageChange(pageNum)} className={`px-3 py-1 rounded-md border ${pageNum === page ? "bg-blue-600 text-white border-blue-600" : "border-gray-200 hover:bg-gray-100"}`}>
                  {pageNum}
                </button>
              ))}
              {page < totalPages - 2 && totalPages > 5 && (
                <><span className="px-2">...</span><button onClick={() => handlePageChange(totalPages)} className="px-3 py-1 rounded-md border border-gray-200 hover:bg-gray-100">{totalPages}</button></>
              )}
              <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} className="p-2 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </>
      )}

      {!loading && experimentData.length === 0 && (
        <div className="flex flex-col items-center justify-center p-12 text-gray-500">
          <p className="text-lg font-medium">No experiments found</p>
          <p className="text-sm mt-2">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}
