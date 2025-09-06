async function getWeather() {
  const city = document.getElementById("city").value;
  const res = await fetch(`/api/weather?city=${city}`);
  const data = await res.json();

  if (data.error) {
    document.getElementById("result").innerHTML = `<p>❌ ${data.error}</p>`;
  } else {
    const icon = `https://openweathermap.org/img/wn/10d@2x.png`;
    document.getElementById("result").innerHTML = `
      <h3>${data.city}</h3>
      <img src="${icon}" alt="weather icon" />
      <p>🌡️ Temperature: ${data.temp}°C</p>
      <p>💧 Humidity: ${data.humidity}%</p>
      <p>☁️ Condition: ${data.description}</p>
    `;
  }
}
