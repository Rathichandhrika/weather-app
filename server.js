const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.OWM_KEY;

app.use(express.static("public"));

app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.json({ error: "City is required" });

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    res.json({
      city: response.data.name,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  } catch (error) {
    res.json({ error: "City not found" });
  }
});

app.listen(PORT, () => console.log(`✅ Server running: http://localhost:${PORT}`));
