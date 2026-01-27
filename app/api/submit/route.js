// app/api/submit-registration/route.js
import { google } from "googleapis";

export async function POST(request) {
  try {
    const body = await request.json();
    const GOOGLE_CLIENT_EMAIL =
      "blue-sands-stem-labs@blue-sands-registration.iam.gserviceaccount.com";
    const GOOGLE_SHEET_ID = "19f3H-7UMrsxDFt2nIbdIjtKG5jJXCPKoTe5onu0Imms";

    // === Validate required env vars ===
    const GOOGLE_PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyHXEn/6vmj63o
sTBdc/qGbb18KcYiKVhvHltDSn8c5qoKKgDA9uK0UN1FQ5rMhw/Awvlj+D0Hf61Y
pCrE/1GRvwMr6MAziUji8LM30Hicl3UtuYBnGbZc5FfyKUmVnMB3Bg13dxoH/N2k
WWIqBFeSPnyWOV7iTEoz/yqZAN7WFv0aDWJtBPAUqKrbGj2hRdnY7PhC1w4L7i66
GtRB2FyhHcj5qVvUfK+ydcONwMCETbE0xG+ga+67FR/HOvdgiCPQGxCOaD99LgNQ
106JlgVsIIpbp0mthwGE/K3YzDLkTyotibEHjW57K1BHJwz+7I/ryMzQiRH3KnMT
BrOTVdn9AgMBAAECggEAJp5Glg8TtOpLISwl2eVXGMV7c4vVJzwCrhkNXZIt7FTA
4nJH9o6xCbqMt0NYsWbJThiYHQpKJTGUIqd5lHvtMiYRqHgPED2AXaAlo4DiXcVj
BTZ2tiP3i72AqgM0rqkte8EGs3PR45B6d/NfWs/VMuK0fZfT0EoNPqfhEwqCxjUZ
BqiXZ9sDLJZ1XQsWjL2c7O1wGiD3mlnbZrJ4tDUuPn5cEwBYTg1j5e2aDzsTb/aA
6vf6OKz4oZcAZAx9+AHxcYds3WlD1a5nQobtvy9EZJytQV4gi2TBJdvQptdpVEel
98iPkYc8/r0hcIcKKxjwD7QwYl46Vt54FdtWCvz/4QKBgQD6YPe5cJwWJf3wsO5J
KveEoLANkJsdPauJPCwakzafIXjTjkCKIc9LVN/2RPWtcXUEVxwA9vEyG7ar91yh
NgwjctN/3Nsu9Hl7+37iuV1qC2g7I7ouNqGJEftYRqz7YehdlXbsNFXEG5+BAwb8
84dG1pswFpIYLOVk5ry6Vx+bcQKBgQC2HSTdUuEgWLLIApUIQYQNz+QdZHLEvdbg
5irEDBVeV+YheLKieHa2yuXf7x2YI9PgSMrrsztQhlVKop+F6J555IB641PE1xtm
17KWPUEgjhw8/D/7pcl0Zw+qeArfoeBJUiJdTYhHONF3Oj5oRFe5uddJUd2Yp4wR
E6TyoF8pTQKBgB8YKcu643eQsk/Q+VbW4jRzbEnS+qCQBxyc/3ExdSggFQxY70T4
W/EkEkhYWhZ3L6whUVYBVQT/EhmbN8LBnpJMcV3AxOu46tlt610m3iYMUp59mmKg
4EDQneFhrZvuldgBdupwuXIIaC+ye4ywhc1TW6SGORCNitOUID4YEdHRAoGADFAW
IPysifJVTB6YkvFTC1gF9VLIS7MGJziIpa6ndzR8M8EkWsXISP2Y4zYYiyPI/H4P
cjYxCXW7qIssO/KJXHZtlWFvVXyxtpdY1L2ZfKj/EcSAUvRXlY4uSflJyur37h0m
g6ZtU1ttFiGS/Ju6Tq1Y9/UYBW02lCT+3wSmynUCgYEAj1PP1hXczl1wSg3k0xgx
CeT5VbHwoUjupKfVdcnk9E1KQ4mQiZAJkkjWr4zXze7iKHpDKm31QH+/s1d9BixC
ypMq2CqRalbZuJlDjas4wJP0QlVTqDGnE9VIGOts0afGqBWVC6kUX94/UfPfh8Qp
s8WRgyiHCbmFdwjFh8/59vw=
-----END PRIVATE KEY-----`;

    if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
      console.error("Missing Google credentials in environment");
      return new Response(
        JSON.stringify({ error: "Server configuration error." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // === Fix private key line breaks ===
    const privateKey = GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

    // === Initialize auth ===
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // === Prepare row data ===
    const row = [
      body.registrationType || "individual",
      body.fullName || "",
      body.gender || "",
      body.role || "",
      body.school || "",
      body.email || "",
      body.phone || "",
      body.location || "",
      body.schoolName || "",
      body.schoolType || "",
      body.schoolEmail || "",
      body.schoolPhone || "",
      body.contactPerson || "",
      body.designation || "",
      body.studentsAttending || "",
      body.teachersAttending || "",
      body.specialNeeds || "",
      body.photoConsent ? "Yes" : "No",

      new Date().toISOString(), // ISO timestamp
    ];

    // === Append to sheet ===
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "Sheet1!A1",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [row],
      },
    });

    return new Response(
      JSON.stringify({ message: "Registration successful!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Google Sheets Error:", error.message);

    // More helpful error messages
    if (error.message.includes("invalid_grant")) {
      return new Response(
        JSON.stringify({
          error: "Authentication failed. Check Google service account key.",
        }),
        { status: 500 }
      );
    }

    if (error.message.includes("Permission denied")) {
      return new Response(
        JSON.stringify({
          error:
            "Bot does not have access to the Google Sheet. Share the sheet with the service account email.",
        }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ error: "Failed to submit. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
