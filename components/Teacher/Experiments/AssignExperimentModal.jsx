"use client";

import { assignExperiment } from "@/services/dashboard-service";
import { useUser } from "@/services/UserContext";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-md">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl font-bold">&times;</button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const AssignExperimentModal = ({ isOpen, onClose, experimentName }) => {
  const { user, token } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: experimentName,
    classID: "",
    dueDate: "",
    resourceCode: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!formData.title || !formData.resourceCode || !formData.dueDate) {
      toast.error("Please fill in all required fields");
      return;
    }
    try {
      setIsLoading(true);
      await assignExperiment(formData, user?.schoolId, token);
      onClose();
      toast.success("Experiment assigned successfully");
    } catch (error) {
      console.error("Error assigning experiment:", error);
      toast.error("Failed to assign experiment");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Assign Experiment">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Experiment Title <span className="text-red-500">*</span></label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} disabled className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date <span className="text-red-500">*</span></label>
            <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Assign To (Class ID)</label>
          <input type="text" name="classID" value={formData.classID} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950" placeholder="Enter class ID" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Instructions <span className="text-red-500">*</span></label>
          <textarea name="resourceCode" value={formData.resourceCode} onChange={handleChange} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950" placeholder="Instructions for the students" />
        </div>
        <div className="flex gap-3 justify-end pt-4 border-t">
          <button onClick={onClose} className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">Cancel</button>
          <button onClick={handleSubmit} disabled={isLoading} className="px-4 py-2 text-sm rounded-md bg-blue-950 hover:bg-blue-900 text-white flex items-center gap-2 disabled:opacity-60">
            {isLoading ? <><FaSpinner className="animate-spin h-4 w-4" /><span>Processing...</span></> : "Assign Experiment"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AssignExperimentModal;
