// lib/config.js

// ✅ Safely read environment variables with fallbacks
export const config = {
  // Public vars (available in the browser)
  NEXT_PUBLIC_FORMBRICKS_API_HOST:
    process.env.NEXT_PUBLIC_FORMBRICKS_API_HOST || "https://app.formbricks.com", // fallback (optional)

  NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID:
    process.env.NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID || "",

  NEXT_PUBLIC_FORMBRICKS_SURVEY_ID_INDIVIDUAL:
    process.env.NEXT_PUBLIC_FORMBRICKS_SURVEY_ID_INDIVIDUAL || "",

  NEXT_PUBLIC_FORMBRICKS_SURVEY_ID_SCHOOL:
    process.env.NEXT_PUBLIC_FORMBRICKS_SURVEY_ID_SCHOOL || "",
};

// ✅ Utility function to assert required values
export function validateConfig(requiredKeys = []) {
  const missing = requiredKeys.filter((key) => !config[key]);
  if (missing.length > 0) {
    console.error("🚨 Missing environment variables:", missing);
    throw new Error(`Missing environment variables: ${missing.join(", ")}`);
  }
}
