async function getWeather() {
  const city = document.getElementById("city").value;
  const res = await fetch(`/api/weather?city=${city}`);
  const data = await res.json();

  if (data.error) {
    document.getElementById("result").innerHTML = `<p>❌ ${data.error}</p>`;
  } else {
    document.getElementById("result").innerHTML = `
      <h3>${data.city}</h3>
      <p>🌡️ Temperature: ${data.temp}°C</p>
      <p>💧 Humidity: ${data.humidity}%</p>
      <p>☁️ Condition: ${data.description}</p>
    `;
  }
}
