"use client";

import { AssignLearningSpaceModal } from "@/components/Teacher/LearningSpaces/AssignLearningSpace";
import { getLearningSpaces, publishLearningSpace } from "@/services/learningSpaceService";
import { useUser } from "@/services/UserContext";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BsBook } from "react-icons/bs";
import { FaPlus, FaSpinner } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { SlOptionsVertical } from "react-icons/sl";
import { toast } from "react-toastify";

const durationMap = {
  "0.25": "15 minutes",
  "0.5": "30 minutes",
  "0.75": "45 minutes",
  "1": "1 hour",
  "1.5": "1.5 hours",
  "2": "2 hours",
  "2.5": "2.5 hours",
  "3": "3 hours",
};

function formatDuration(hours) {
  const key = String(hours);
  return durationMap[key] ?? `${key} hour(s)`;
}

const TeacherLearningSpacePage = () => {
  const [loading, setLoading] = useState(false);
  const [isLoadingSpaces, setIsLoadingSpaces] = useState(false);
  const [activePopupId, setActivePopupId] = useState(null);
  const [spacesData, setSpacesData] = useState([]);
  const { token } = useUser();
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [spaceToAssign, setSpaceToAssign] = useState(null);
  const [loadingPublish, setLoadingPublish] = useState(false);
  const containerRef = useRef(null);
  const popupRef = useRef(null);
  const router = useRouter();

  const handleTogglePopup = (id) => {
    setActivePopupId((prev) => (prev === id ? null : id));
  };

  const handleViewIls = (spaceId) => {
    router.push(`/teacher/dashboard/classes/view-space/${spaceId}`);
  };

  const handleEditIls = (spaceId) => {
    router.push(`/teacher/dashboard/classes/edit-space/${spaceId}`);
  };

  const handlePublish = async (id) => {
    try {
      setLoadingPublish(true);
      await publishLearningSpace(id, token);
      toast.success("Learning space published successfully");
      refetchSpaces();
    } catch (error) {
      toast.error(
        <div>
          <p className="font-semibold">Failed to publish</p>
          <p>{error.message}</p>
        </div>,
      );
    } finally {
      setLoadingPublish(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActivePopupId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    async function fetchSpaces() {
      setIsLoadingSpaces(true);
      try {
        const data = await getLearningSpaces(token);
        setSpacesData(data || []);
      } catch (err) {
        console.error("Error fetching Learning Spaces:", err);
      } finally {
        setIsLoadingSpaces(false);
      }
    }
    fetchSpaces();
  }, [token]);

  const refetchSpaces = async () => {
    try {
      const data = await getLearningSpaces(token);
      setSpacesData(data || []);
    } catch (err) {
      console.error("Error fetching Learning Spaces:", err);
    }
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-12 p-2 md:p-4 lg:p-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col lg:gap-1.5">
          <p className="lg:text-lg font-semibold">Learning Spaces</p>
          <p className="text-xs md:text-sm text-gray-400">
            Create and manage simulation based lessons.
          </p>
        </div>
        <button
          onClick={() => router.push("/teacher/dashboard/classes/create-space")}
          className="bg-blue-800 text-xs lg:text-sm p-2 rounded-md text-white flex items-center gap-1.5"
        >
          <FaPlus /> Create Learning Space
        </button>
      </div>

      <div>
        <input
          type="search"
          placeholder="Search learning spaces"
          className="p-2 rounded-md border border-gray-200"
        />
      </div>

      <div
        className={
          spacesData.length < 1
            ? "flex flex-col w-full h-full items-center justify-center"
            : "grid w-full h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        }
      >
        {spacesData.length < 1 && (
          <div className="flex flex-col items-center gap-2 mx-auto bg-white rounded-xl border border-gray-200 p-2 lg:p-5">
            <div className="rounded-2xl p-3 bg-violet-100 flex items-center justify-center">
              <BsBook className="text-blue-800 text-2xl" />
            </div>
            <p className="lg:text-lg font-semibold">No Learning Space yet.</p>
            <p className="text-gray-400 text-sm lg:text-base text-center lg:w-[70%]">
              Create your first learning space to get started with simulations based teaching.
            </p>
            <button
              onClick={() => router.push("/teacher/dashboard/classes/create-space")}
              className="bg-blue-800 text-xs lg:text-sm p-2 rounded-md text-white flex items-center gap-1.5"
            >
              <FaPlus /> Create Learning Space
            </button>
          </div>
        )}

        {spacesData.map((space) => (
          <div
            ref={containerRef}
            key={space.id}
            className="flex flex-col gap-2 lg:gap-4 bg-white rounded-md border border-gray-200 p-4"
          >
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center rounded-full bg-indigo-200 p-2">
                  <BsBook className="text-2xl text-indigo-700" />
                </div>
                <p className="lg:text-lg font-semibold">{space.title}</p>
              </div>
              <div className="relative">
                <button onClick={() => handleTogglePopup(space.id)}>
                  <SlOptionsVertical />
                </button>
                {activePopupId === space.id && (
                  <div
                    ref={popupRef}
                    className="absolute right-0 bg-white rounded-lg w-32 md:w-40 text-left space-y-2 shadow-md border py-3 z-50"
                  >
                    <div
                      onClick={() => handleViewIls(space.id)}
                      className="cursor-pointer px-3 flex items-center text-sm md:text-base border-b border-gray-200 py-1"
                    >
                      View
                    </div>
                    <div
                      onClick={() => handleEditIls(space.id)}
                      className="cursor-pointer px-3 flex items-center text-sm md:text-base border-b border-gray-200 py-1"
                    >
                      Edit
                    </div>
                    <div
                      onClick={() => { handlePublish(space.id); setActivePopupId(null); }}
                      className="cursor-pointer px-3 flex items-center text-sm md:text-base py-1 border-b border-gray-200"
                    >
                      {loadingPublish ? (
                        <span className="flex items-center gap-2"><FaSpinner className="animate-spin" /> Publishing...</span>
                      ) : "Publish"}
                    </div>
                    <div
                      onClick={() => { setSpaceToAssign(space.id); setIsAssignModalOpen(true); setActivePopupId(null); }}
                      className="cursor-pointer px-3 flex items-center text-sm md:text-base py-1"
                    >
                      Assign to class
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <p className="p-0.5 px-1 rounded bg-gray-200">Points</p>
              <p className="flex gap-2 items-center">
                <LuClock3 /> {formatDuration(space.duration)}
              </p>
            </div>

            <div>
              {space.status === "draft" ? (
                <p className="text-gray-400 border border-gray-400 rounded-full px-1 w-fit">Draft</p>
              ) : (
                <p className="text-green-500 border border-green-500 rounded-full px-1 w-fit">Published</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {isAssignModalOpen && (
        <AssignLearningSpaceModal
          isOpen={isAssignModalOpen}
          onClose={() => setIsAssignModalOpen(false)}
          spaceId={spaceToAssign}
        />
      )}
    </div>
  );
};

export default TeacherLearningSpacePage;
