"use client";

import { getLearningSpaceById } from "@/services/learningSpaceService";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";
import { IoMdCalendar } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";

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

const SpaceCard = ({ lesson, onOpenSpace }) => {
  const { token } = useUser();
  const [loading, setLoading] = useState(false);
  const [spaceData, setSpaceData] = useState(undefined);

  useEffect(() => {
    async function fetchSpaceById() {
      setLoading(true);
      try {
        const data = await getLearningSpaceById(lesson.id, token);
        setSpaceData(data || []);
      } catch (err) {
        console.error("Error fetching space:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSpaceById();
  }, [token, lesson.id]);

  const handleClick = () => {
    if (onOpenSpace) {
      onOpenSpace(lesson.id);
    }
  };

  return (
    <div className="flex flex-col gap-2 rounded overflow-hidden w-80 bg-white">
      <div className="flex items-center justify-center w-full bg-gray-400 text-white rounded-sm">
        <img src="/images/pictures/lab-img.jpg" alt="lab-image" />
      </div>
      <div className="flex flex-col gap-2 px-2">
        <p className="text-xs md:text-sm font-semibold">{lesson.title}</p>
        <p className="text-xs">{lesson.objective}</p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-600 flex items-center gap-1">
              <LuClock3 className="text-blue-600" /> {formatDuration(lesson.duration)}
            </p>
            <p className="text-xs text-gray-600 flex items-center gap-1">
              <IoMdCalendar className="text-blue-600" />
            </p>
          </div>
        </div>
        <button
          className="bg-bgBlue text-white w-full p-2 rounded-md text-sm"
          onClick={handleClick}
        >
          Go to space
        </button>
      </div>
    </div>
  );
};

export default SpaceCard;
