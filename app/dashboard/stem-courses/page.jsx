"use client";

import ExperimentCard from "@/components/Dashboard/Experiments/ExperimentCards";
import StatCards from "@/components/Dashboard/StatCards";
import WelcomeBanner from "@/components/Dashboard/WelcomeBanner";
import LearningSpace from "@/components/LearningSpace/LearningSpace";
import SpaceCard from "@/components/LearningSpace/SpaceCard";
import { getLearningSpaces } from "@/services/learningSpaceService";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

const courseStats = [
  {
    title: "Stem Courses",
    value: "0",
    icon: "/images/icon/grad.svg",
    trendIcon: "/images/icon/trend_up.svg",
    percentageChange: "0%",
    timeFrame: "from last month",
  },
  {
    title: "Course Experiments",
    value: "0",
    icon: "/images/icon/beaker_01.svg",
    trendIcon: "/images/icon/trend_up.svg",
    percentageChange: "0%",
    timeFrame: "from last month",
  },
  {
    title: "Hours Spent",
    value: "0",
    icon: "/images/icon/stopwatch.svg",
    trendIcon: "/images/icon/trend_up.svg",
    percentageChange: "0%",
    timeFrame: "from last month",
  },
  {
    title: "Average Grade",
    value: "0",
    icon: "/images/icon/chart.svg",
    trendIcon: "/images/icon/trend_up.svg",
    percentageChange: "0%",
    timeFrame: "from last month",
  },
];

const DashboardStemCoursesPage = () => {
  const { user, token } = useUser();
  const firstName = user?.fullName?.split(" ")[0];

  const [isShowingPop, setIsShowingPop] = useState(false);
  const [activeSpaceId, setActiveSpaceId] = useState(null);
  const [learningSpacesData, setLearningSpacesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSpaces() {
      setLoading(true);
      try {
        const data = await getLearningSpaces(token);
        setLearningSpacesData(data || []);
      } catch (err) {
        console.error("Error fetching learning spaces:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSpaces();
  }, [token]);

  const showSpacePopUp = (spaceId) => {
    setActiveSpaceId(spaceId);
    setIsShowingPop(true);
  };

  return (
    <div className="m-1">
      <WelcomeBanner firstName={firstName ?? ""} />
      <StatCards stats={courseStats} />

      <div className="m-4 mt-6 lg:mt-12 flex flex-col gap-5">
        <p className="font-semibold lg:text-lg">Available Learning Spaces</p>

        <div className="flex flex-row flex-wrap gap-5">
          {loading && (
            <div className="flex w-full flex-col items-center justify-center p-12">
              <FaSpinner className="text-5xl animate-spin text-blue-600" />
            </div>
          )}

          {!loading && learningSpacesData.length > 0 && (
            <div className="flex flex-wrap gap-4 m-4">
              {learningSpacesData.map((lab) => (
                <SpaceCard key={lab.id} lesson={lab} onOpenSpace={showSpacePopUp} />
              ))}
            </div>
          )}

          {!loading && learningSpacesData.length === 0 && (
            <div className="flex w-full flex-col items-center justify-center p-12 text-gray-500">
              <p className="text-lg font-medium">No learning spaces yet</p>
              <p className="text-sm mt-2">
                Learning spaces will appear here once your class teacher assigns them to you
              </p>
            </div>
          )}
        </div>
      </div>

      {isShowingPop && (
        <LearningSpace
          lessonId={activeSpaceId ?? ""}
          popup
          onClose={() => {
            setIsShowingPop(false);
            setActiveSpaceId(null);
          }}
        />
      )}
    </div>
  );
};

export default DashboardStemCoursesPage;
