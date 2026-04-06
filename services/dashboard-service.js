import { apiClient } from "./axios-instance";

// ─── STUDENT ─────────────────────────────────────────────────────────────────

export async function getStudentOverview(token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get("/api/student/v1/overview", config);
  return res.data;
}

export async function getPhetSimulations(token, param = {}) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
    params: {
      physics: param.physics,
      chemistry: param.chemistry,
      math: param.math,
      biology: param.biology,
      earthSpace: param.earthSpace,
      search: param.search,
      page: param.page || 1,
      pageSize: param.pageSize || 20,
    },
  };
  const res = await apiClient.get("/api/phet/simulations", config);
  return res.data;
}

export async function getPhetSimulationsById(id, token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get(`/api/phet/simulations/${id}`, config);
  return res.data;
}

export async function getStudentRewards(token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get("/api/student/v1/badges", config);
  return res.data;
}

export async function getStudentLeaderboard(token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get("/api/student/v1/leaderboard", config);
  return res.data;
}

export async function startExperiment(labData, token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  try {
    const res = await apiClient.post(
      "/api/student/v1/experiments/start",
      labData,
      config
    );
    return res.data;
  } catch (error) {
    console.error("Failed to register experiment record:", error);
    throw error;
  }
}

// ─── SCHOOL ADMIN ─────────────────────────────────────────────────────────────

export async function getSchoolAdminDashboard(token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get("/api/dashboard/school-admin", config);
  return res.data;
}

export async function getSchoolAdminOverview(token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get("/api/school-admin/v2/overview", config);
  return res.data;
}

export async function getSchoolAdminExperiments(token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get(
    "/api/school-admin/v2/experiments-and-courses",
    config
  );
  return res.data;
}

export async function getSchoolAdminPerformance(token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get("/api/school-admin/v2/performance", config);
  return res.data;
}

export async function getSchoolAdminTeacherActivity(token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get(
    "/api/school-admin/v2/teacher-activity",
    config
  );
  return res.data;
}

export async function getSchoolAdminSystemMetrics(token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get(
    "/api/school-admin/v2/system-metrics",
    config
  );
  return res.data;
}

export async function getSchoolAdminBilling(token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get("/api/school-admin/v2/billing", config);
  return res.data;
}

export async function getSchoolAdminLeaderboard(token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get("/api/school-admin/v2/leaderboard", config);
  return res.data;
}

export async function addSchoolStudent(studentData, schoolId, token) {
  try {
    const res = await apiClient.post(
      "/api/schools/users/students/upsert",
      studentData,
      {
        params: { schoolId },
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }
    );
    return res.data;
  } catch (error) {
    console.error("Failed to register student:", error);
    throw error;
  }
}

export async function addSchoolTeacher(teacherData, schoolId, token) {
  try {
    const res = await apiClient.post(
      "/api/schools/users/teachers/upsert",
      teacherData,
      {
        params: { schoolId },
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }
    );
    return res.data;
  } catch (error) {
    console.error("Failed to add teacher:", error);
    throw error;
  }
}

export async function addClass(classData, token) {
  const config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };
  try {
    const res = await apiClient.post("/api/classes", classData, config);
    return res.data;
  } catch (error) {
    console.error("Failed to register class:", error);
    throw error;
  }
}

// ─── TEACHER ──────────────────────────────────────────────────────────────────

export async function assignExperiment(assignmentData, schoolId, token) {
  try {
    const res = await apiClient.post("/api/assignments", assignmentData, {
      params: { schoolId },
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return res.data;
  } catch (error) {
    console.error("Failed to assign experiment:", error);
    throw error;
  }
}

export async function getClasses(token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get("/api/classes/school", config);
  return res.data;
}

export async function getDashboard(token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get("/api/dashboard", config);
  return res.data;
}
