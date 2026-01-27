"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { coursesData } from "@/lib/data";

const LabCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Mock courses data

  // Get unique course types for the sidebar
  const courseTypes = [
    ...new Set(coursesData.map((course) => course.courseType)),
  ];

  // Get unique categories for subject filter
  const categories = [...new Set(coursesData.map((course) => course.category))];

  // Filter courses based on search and filters
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesSearch =
        searchQuery === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesSubject =
        selectedSubject === "" || course.category === selectedSubject;

      const matchesCourseType =
        selectedCourses.length === 0 ||
        selectedCourses.includes(course.courseType);

      return matchesSearch && matchesSubject && matchesCourseType;
    });
  }, [searchQuery, selectedSubject, selectedCourses]);

  // Toggle course type filter
  const toggleCourseType = (courseType) => {
    setSelectedCourses((prev) =>
      prev.includes(courseType)
        ? prev.filter((c) => c !== courseType)
        : [...prev, courseType]
    );
  };

  // Reset all filters
  const resetAll = () => {
    setSearchQuery("");
    setSelectedSubject("");
    setSelectedCourses([]);
  };

  return (
    <div className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Filters Section */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Search Input */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-3 text-sm"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                />
              </div>
            </div>

            {/* Subject Filter */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-3 text-sm"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                Subject
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white cursor-pointer"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                <option value="">All Subjects</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count and Reset */}
          <div className="flex items-center justify-between">
            <p
              className="text-gray-600 text-sm"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              {filteredCourses.length} results
            </p>
            <button
              onClick={resetAll}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              <X className="w-4 h-4" />
              Reset All
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar - Course Types */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-gray-900 font-bold text-lg"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  Courses
                </h3>
                {selectedCourses.length > 0 && (
                  <button
                    onClick={() => setSelectedCourses([])}
                    className="text-primary text-sm font-medium hover:underline"
                    style={{ fontFamily: "var(--font-jarkata)" }}
                  >
                    Clear all
                  </button>
                )}
              </div>

              <div className="space-y-2">
                {courseTypes.map((courseType) => (
                  <label
                    key={courseType}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCourses.includes(courseType)}
                      onChange={() => toggleCourseType(courseType)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary cursor-pointer"
                    />
                    <span
                      className="text-gray-700 text-sm"
                      style={{ fontFamily: "var(--font-jarkata)" }}
                    >
                      {courseType}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="lg:col-span-9">
            {filteredCourses.length === 0 ? (
              <div className="text-center py-16">
                <p
                  className="text-gray-500 text-lg"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  No courses found. Try adjusting your filters.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Course Image */}
                      <div className="relative h-64 md:h-full min-h-[300px]">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Course Details */}
                      <div className="p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                          <h3
                            className="text-secondary font-bold text-xl sm:text-2xl mb-4 leading-tight"
                            style={{ fontFamily: "var(--font-jarkata)" }}
                          >
                            {course.title}
                          </h3>

                          <p
                            className="text-gray-600 text-sm leading-relaxed mb-6"
                            style={{ fontFamily: "var(--font-jarkata)" }}
                          >
                            {course.description}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          <span
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                            style={{ fontFamily: "var(--font-jarkata)" }}
                          >
                            {course.duration}
                          </span>
                          {course.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 border border-primary text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
                              style={{ fontFamily: "var(--font-jarkata)" }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabCourses;
