import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const payload = new URLSearchParams();
    payload.append("key", process.env.PANEL_API_KEY);
    payload.append("action", "services");

    const r = await fetch(process.env.PANEL_API_URL, {
      method: "POST",
      body: payload
    });

    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}