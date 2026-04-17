import apiClient from "./axios-instance";

export async function getLearningSpaceById(id, token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get(`/api/ils/${id}`, config);
  return res.data;
}

export async function getLearningSpaces(token) {
  const config = {
    withCredentials: true,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get(`/api/ils`, config);
  return res.data;
}

export async function getLearningSpacesByClassId(classId, token) {
  const config = {
    withCredentials: true,
    params: classId,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  };
  const res = await apiClient.get(`/api/ils`, config);
  return res.data;
}

export async function addLearningSpace(learningSpaceData, token) {
  try {
    const res = await apiClient.post("/api/ils", learningSpaceData, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return res.data;
  } catch (error) {
    console.error("Failed to add learning space:", error);
    throw error;
  }
}

export async function updateLearningSpace(learningSpaceData, id, token) {
  try {
    const res = await apiClient.put(`/api/ils/${id}`, learningSpaceData, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return res.data;
  } catch (error) {
    console.error("Failed to update learning space:", error);
    throw error;
  }
}

export async function publishLearningSpace(id, token) {
  try {
    const res = await apiClient.post(`/api/ils/${id}/publish`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return res.data;
  } catch (error) {
    console.error("Failed to publish learning space:", error);
    throw error;
  }
}

export async function assignLearningSpace(spaceData, id, token) {
  try {
    const res = await apiClient.post(`/api/ils/${id}/assign`, spaceData, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return res.data;
  } catch (error) {
    console.error("Failed to assign learning space:", error);
    throw error;
  }
}
