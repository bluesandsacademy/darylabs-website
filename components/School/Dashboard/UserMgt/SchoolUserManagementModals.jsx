"use client";

import { addClass, addSchoolStudent, addSchoolTeacher } from "@/services/dashboard-service";
import { useUser } from "@/services/UserContext";
import { useState } from "react";
import { FaTimes, FaSpinner } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-md p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-blue-950">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700"><FaTimes className="text-xl" /></button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export const BulkUploadModal = ({ isOpen, onClose, userType }) => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) setFile(e.dataTransfer.files[0]);
  };

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Bulk Upload ${userType}`}>
      <div className="space-y-4">
        <p className="text-sm text-gray-600 mb-4">Upload a CSV file to add multiple {userType?.toLowerCase()} at once.</p>
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
          onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
        >
          <FiUpload className="mx-auto text-4xl text-gray-400 mb-4" />
          <p className="text-sm text-gray-600 mb-2">Drag and drop your CSV file here, or</p>
          <label className="inline-block">
            <span className="text-blue-950 hover:underline cursor-pointer font-medium">browse files</span>
            <input type="file" accept=".csv" onChange={handleFileChange} className="hidden" />
          </label>
          {file && <div className="mt-4 p-3 bg-gray-100 rounded-md"><p className="text-sm text-gray-700">Selected: {file.name}</p></div>}
        </div>
        <div className="bg-blue-50 p-4 rounded-md">
          <p className="text-sm font-medium text-blue-950 mb-2">CSV Format:</p>
          <p className="text-xs text-gray-600">
            {userType === "Teachers" && "name, email, phone, location, experience, class, schedule"}
            {userType === "Students" && "name, email, class"}
            {userType === "Classes" && "class name, subject, description, schedule, capacity"}
          </p>
        </div>
        <div className="flex gap-3 justify-end pt-4">
          <button onClick={onClose} className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">Cancel</button>
          <button onClick={() => { if (file) onClose(); }} disabled={!file} className="px-4 py-2 text-sm bg-blue-950 text-white rounded-md hover:bg-blue-900 disabled:bg-gray-300 disabled:cursor-not-allowed">Upload</button>
        </div>
      </div>
    </Modal>
  );
};

export const AddTeacherModal = ({ isOpen, onClose }) => {
  const { user, token } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", country: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await addSchoolTeacher(formData, user?.schoolId, token);
      onClose();
      toast.success("Teacher added successfully");
    } catch (error) {
      toast.error("Failed to add teacher");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Teacher">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[{ label: "Full Name", name: "fullName", type: "text" }, { label: "Email", name: "email", type: "email" }, { label: "Phone", name: "phone", type: "tel" }, { label: "Country", name: "country", type: "text" }].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label} <span className="text-red-500">*</span></label>
              <input type={type} name={name} value={formData[name]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950" placeholder={`Enter ${label.toLowerCase()}`} />
            </div>
          ))}
        </div>
        <div className="flex gap-3 justify-end pt-4">
          <button onClick={onClose} className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">Cancel</button>
          <button onClick={handleSubmit} disabled={isLoading} className="px-4 py-2 text-sm bg-blue-950 text-white rounded-md hover:bg-blue-900 disabled:opacity-50 flex items-center gap-2">
            {isLoading && <FaSpinner className="animate-spin" />} Add Teacher
          </button>
        </div>
      </div>
    </Modal>
  );
};

export const AddStudentModal = ({ isOpen, onClose }) => {
  const { user, token } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", classId: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await addSchoolStudent(formData, user?.schoolId, token);
      onClose();
      toast.success("Student added successfully");
    } catch (error) {
      toast.error("Failed to add student");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Student">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[{ label: "Full Name", name: "fullName", type: "text" }, { label: "Email", name: "email", type: "email" }, { label: "Phone", name: "phone", type: "tel" }, { label: "Class ID", name: "classId", type: "text" }].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <input type={type} name={name} value={formData[name]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder={`Enter ${label.toLowerCase()}`} />
            </div>
          ))}
        </div>
        <div className="flex gap-3 justify-end pt-4">
          <button onClick={onClose} className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">Cancel</button>
          <button onClick={handleSubmit} disabled={isLoading} className="px-4 py-2 text-sm bg-blue-950 text-white rounded-md hover:bg-blue-900 disabled:opacity-50 flex items-center gap-2">
            {isLoading && <FaSpinner className="animate-spin" />} Add Student
          </button>
        </div>
      </div>
    </Modal>
  );
};

export const AddClassModal = ({ isOpen, onClose }) => {
  const { user, token } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ className: "", subject: "", description: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await addClass({ ...formData, schoolId: user?.schoolId }, token);
      onClose();
      toast.success("Class added successfully");
    } catch (error) {
      toast.error("Failed to add class");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Class">
      <div className="space-y-4">
        {[{ label: "Class Name", name: "className", type: "text" }, { label: "Subject", name: "subject", type: "text" }, { label: "Description", name: "description", type: "text" }].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input type={type} name={name} value={formData[name]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder={`Enter ${label.toLowerCase()}`} />
          </div>
        ))}
        <div className="flex gap-3 justify-end pt-4">
          <button onClick={onClose} className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">Cancel</button>
          <button onClick={handleSubmit} disabled={isLoading} className="px-4 py-2 text-sm bg-blue-950 text-white rounded-md hover:bg-blue-900 disabled:opacity-50 flex items-center gap-2">
            {isLoading && <FaSpinner className="animate-spin" />} Add Class
          </button>
        </div>
      </div>
    </Modal>
  );
};

export const AddRoleModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Role">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Role Name</label>
          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Enter role name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" rows={3} placeholder="Role description" />
        </div>
        <div className="flex gap-3 justify-end pt-4">
          <button onClick={onClose} className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">Cancel</button>
          <button className="px-4 py-2 text-sm bg-blue-950 text-white rounded-md hover:bg-blue-900">Create Role</button>
        </div>
      </div>
    </Modal>
  );
};
