import apiClient from "./axios-instance";

export async function registerNewUser(newUser) {
  try {
    const res = await apiClient.post("/api/auth/register", newUser);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function registerNewSchool(newSchool) {
  try {
    const res = await apiClient.post("/api/auth/register/school", newSchool);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function login(email, password) {
  try {
    const res = await apiClient.post(
      "/api/auth/login",
      { email, password },
      { withCredentials: true }
    );

    const loginResponse = res.data;

    const user = {
      userId: loginResponse.userId,
      fullName: loginResponse.fullName,
      email: loginResponse.email,
      phone: loginResponse.phone,
      gender: loginResponse.gender,
      country: loginResponse.country,
      dob: loginResponse.dob,
      role: loginResponse.role,
      avatarUrl: loginResponse.avatarUrl || "",
      isVerified: loginResponse.isVerified,
      schoolId: loginResponse.schoolId,
      subscription: loginResponse.subscription || null,
      currentTier: loginResponse.currentTier || null,
      promoApplied: loginResponse.promoApplied || null,
    };

    return {
      user,
      token: loginResponse.token,
      isVerified: loginResponse.isVerified,
    };
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
}

export async function resendVerification(email) {
  try {
    await apiClient.post(
      "/api/auth/resend-verification",
      { email },
      { withCredentials: true }
    );
  } catch (error) {
    console.error("request failed", error);
  }
}

export async function changePassword(data, token) {
  try {
    const res = await apiClient.post("/api/Auth/change-password", data, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return res.data;
  } catch (error) {
    console.error("Failed to change password:", error);
    throw error;
  }
}

export async function forgotPassword(data, token) {
  try {
    const res = await apiClient.post("/api/Auth/forgot-password", data, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return res.data;
  } catch (error) {
    console.error("Failed to make request:", error);
    throw error;
  }
}

export async function resetPassword(data, token) {
  try {
    const res = await apiClient.post("/api/Auth/reset-password", data, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return res.data;
  } catch (error) {
    console.error("Failed to reset password:", error);
    throw error;
  }
}
