"use client";

import { getPhetSimulations } from "@/services/dashboard-service";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaFilter } from "react-icons/fa";
import TeacherExperimentCard from "./TeacherExperimentCard";
import { AssignExperimentModal } from "./AssignExperimentModal";

const AssignExperiments = () => {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [loading, setLoading] = useState(false);
  const [fetchFilters, setFetchFilters] = useState({
    physics: "",
    chemistry: "",
    biology: "",
    math: "",
    earthSpace: "",
    gradeLevel: "",
    search: "",
  });
  const [experimentData, setExperimentData] = useState([]);
  const { token } = useUser();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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

  const handleCourseFilterChange = (e) => {
    setFetchFilters({
      ...fetchFilters,
      physics: e.target.value === "physics" ? "true" : "",
      chemistry: e.target.value === "chemistry" ? "true" : "",
      biology: e.target.value === "biology" ? "true" : "",
      math: e.target.value === "math" ? "true" : "",
      earthSpace: e.target.value === "earthSpace" ? "true" : "",
    });
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  };

  const totalPages = Math.ceil(total / pageSize);

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      let startPage = Math.max(1, page - 2);
      let endPage = Math.min(totalPages, page + 2);
      if (page <= 3) endPage = maxPagesToShow;
      else if (page >= totalPages - 2) startPage = totalPages - maxPagesToShow + 1;
      for (let i = startPage; i <= endPage; i++) pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex p-2">
        <form className="flex flex-row-reverse justify-between w-full items-center">
          <input
            className="p-2 text-xs lg:text-sm rounded-md border border-gray-200"
            type="text"
            name="search"
            value={fetchFilters.search}
            onChange={handleFetchFilterChange}
            placeholder="Search experiments..."
          />
          <div className="flex gap-2 items-center text-xs lg:text-sm p-2 rounded-md border border-gray-200 bg-white text-gray-500">
            <FaFilter className="text-gray-600" />
            <select name="subject" onChange={handleCourseFilterChange}>
              <option value="">All Subjects</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
              <option value="math">Math</option>
              <option value="earthSpace">Earth &amp; Space</option>
            </select>
          </div>
        </form>
      </div>

      {isAddModalOpen && (
        <AssignExperimentModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      )}

      <div className="flex flex-col md:flex-row flex-wrap gap-3">
        {experimentData.map((lab) => (
          <TeacherExperimentCard
            key={lab.id}
            title={lab.title}
            gradeLevel={lab.lowGradeLevel}
            description={lab.description}
            subject={lab.mainTopics}
            keywords={lab.keywords ? lab.keywords.split(",").slice(0, 3) : []}
          />
        ))}
        {!loading && experimentData.length === 0 && (
          <p className="text-gray-500 text-sm p-4">No experiments found.</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 mt-6">
        <div className="text-sm text-gray-600">
          Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, total)} of {total} results
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="pageSize" className="text-sm text-gray-600">Show:</label>
          <select
            id="pageSize"
            value={pageSize}
            onChange={handlePageSizeChange}
            className="p-2 text-sm rounded-md border border-gray-200"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="p-2 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronLeft />
          </button>

          {page > 3 && totalPages > 5 && (
            <>
              <button onClick={() => handlePageChange(1)} className="px-3 py-1 rounded-md border border-gray-200 hover:bg-gray-100">1</button>
              <span className="px-2">...</span>
            </>
          )}

          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`px-3 py-1 rounded-md border ${
                pageNum === page ? "bg-[#303C48] text-white border-[#303C48]" : "border-gray-200 hover:bg-gray-100"
              }`}
            >
              {pageNum}
            </button>
          ))}

          {page < totalPages - 2 && totalPages > 5 && (
            <>
              <span className="px-2">...</span>
              <button onClick={() => handlePageChange(totalPages)} className="px-3 py-1 rounded-md border border-gray-200 hover:bg-gray-100">{totalPages}</button>
            </>
          )}

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="p-2 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignExperiments;
