"use client";

import { assignLearningSpace } from "@/services/learningSpaceService";
import { getClasses } from "@/services/dashboard-service";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";
import { FaSpinner, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

export const AssignLearningSpaceModal = ({ isOpen, onClose, spaceId }) => {
  const { token } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isClassLoading, setIsClassLoading] = useState(false);
  const [formData, setFormData] = useState({ classroomId: "", type: "" });
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    async function fetchClasses() {
      setIsClassLoading(true);
      try {
        const data = await getClasses(token);
        setClassList(data || []);
      } catch (err) {
        console.error("Error fetching classes:", err);
      } finally {
        setIsClassLoading(false);
      }
    }
    if (isOpen) fetchClasses();
  }, [token, isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.classroomId || !formData.type) {
      toast.error("Please fill in all required fields");
      return;
    }
    try {
      setIsLoading(true);
      await assignLearningSpace(formData, spaceId, token);
      onClose();
      toast.success("Learning Space assigned successfully");
    } catch (error) {
      console.error("Error assigning space:", error);
      toast.error(
        <div>
          <p className="font-semibold">Failed to assign Learning Space</p>
          <p>{error.message}</p>
        </div>,
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-800">Assign Learning Space</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <FaTimes />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Assign To <span className="text-red-500">*</span>
            </label>
            <select
              name="classroomId"
              value={formData.classroomId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-950 bg-white"
            >
              <option value="">Select a class</option>
              {classList.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Set As <span className="text-red-500">*</span>
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-950 bg-white"
            >
              <option value="">Select Activity</option>
              <option value="classWork">Class work</option>
              <option value="assignment">Assignment</option>
              <option value="test">Test</option>
              <option value="exam">Exam</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3 justify-end px-5 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`px-4 py-2 text-sm rounded-md flex items-center justify-center gap-2 text-white transition duration-200
              ${isLoading ? "bg-blue-800 cursor-not-allowed" : "bg-blue-950 hover:bg-blue-900"}`}
          >
            {isLoading ? (
              <>
                <FaSpinner className="animate-spin h-4 w-4" />
                <span>Processing...</span>
              </>
            ) : (
              "Assign"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignLearningSpaceModal;
