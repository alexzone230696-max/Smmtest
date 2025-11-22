import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = new URLSearchParams();
    payload.append("key", process.env.PANEL_API_KEY);
    payload.append("action", "services");

    const response = await fetch(process.env.PANEL_API_URL, {
      method: "POST",
      body: payload
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch services",
      details: error.message
    });
  }
}