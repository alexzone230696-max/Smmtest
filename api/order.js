import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { service, link, quantity } = req.body;

    if (!service || !link || !quantity) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    const payload = new URLSearchParams();
    payload.append("key", process.env.PANEL_API_KEY);
    payload.append("action", "add");
    payload.append("service", service);
    payload.append("link", link);
    payload.append("quantity", quantity);

    const response = await fetch(process.env.PANEL_API_URL, {
      method: "POST",
      body: payload
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      error: "Failed to create order",
      details: error.message
    });
  }
}