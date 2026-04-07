"use client";

import { getPhetSimulations } from "@/services/dashboard-service";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TeacherExperimentCard from "./TeacherExperimentCard";

const AssignExperiments = () => {
  const [experimentData, setExperimentData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { token } = useUser();

  useEffect(() => {
    async function fetchExperiments() {
      setLoading(true);
      try {
        const data = await getPhetSimulations(token, { search, page, pageSize });
        setExperimentData(data.items || []);
        setTotal(data.total || 0);
      } catch (err) {
        console.error("Error fetching experiments:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchExperiments();
  }, [token, search, page, pageSize]);

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <input
          className="p-2 text-xs lg:text-sm rounded-md border border-gray-200"
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          placeholder="Search experiments..."
        />
      </div>

      {loading && (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}

      {!loading && (
        <div className="flex flex-wrap gap-4">
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
          {experimentData.length === 0 && (
            <p className="text-gray-500 text-sm">No experiments found.</p>
          )}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center gap-2 mt-4">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="p-2 rounded-md border border-gray-200 disabled:opacity-50">
            <FaChevronLeft />
          </button>
          <span className="text-sm text-gray-600">Page {page} of {totalPages}</span>
          <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="p-2 rounded-md border border-gray-200 disabled:opacity-50">
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default AssignExperiments;
