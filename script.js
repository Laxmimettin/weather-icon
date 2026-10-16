const weatherConditions = {
  sunny: {
    icon: "☀️",
    title: "Sunny",
    description: "Bright sunshine and clear skies. Enjoy the beautiful day!",
    background: "#fef3c7",
    pageBackground: "linear-gradient(135deg, #fcd34d, #fef3c7)",
  },

  cloudy: {
    icon: "☁️",
    title: "Cloudy",
    description: "Clouds cover the sky, creating a cool and calm atmosphere.",
    background: "#e2e8f0",
    pageBackground: "linear-gradient(135deg, #94a3b8, #e2e8f0)",
  },

  rainy: {
    icon: "🌧️",
    title: "Rainy",
    description: "Rain is falling. Carry an umbrella when heading outside!",
    background: "#dbeafe",
    pageBackground: "linear-gradient(135deg, #60a5fa, #dbeafe)",
  },

  stormy: {
    icon: "⛈️",
    title: "Stormy",
    description: "Thunderstorms may occur. Stay indoors and be careful.",
    background: "#ddd6fe",
    pageBackground: "linear-gradient(135deg, #6d28d9, #c4b5fd)",
  },

  snowy: {
    icon: "❄️",
    title: "Snowy",
    description: "Snowflakes are falling. Dress warmly and stay comfortable!",
    background: "#f0f9ff",
    pageBackground: "linear-gradient(135deg, #bae6fd, #f0f9ff)",
  },

  windy: {
    icon: "💨",
    title: "Windy",
    description: "Strong winds are blowing. Secure loose objects outdoors.",
    background: "#ccfbf1",
    pageBackground: "linear-gradient(135deg, #5eead4, #ccfbf1)",
  },

  foggy: {
    icon: "🌫️",
    title: "Foggy",
    description: "Fog reduces visibility. Travel carefully and slowly.",
    background: "#f1f5f9",
    pageBackground: "linear-gradient(135deg, #cbd5e1, #f1f5f9)",
  },
};

const weatherSelect = document.getElementById("weatherSelect");
const weatherIcon = document.getElementById("weatherIcon");
const weatherTitle = document.getElementById("weatherTitle");
const weatherDescription = document.getElementById("weatherDescription");
const weatherDisplay = document.getElementById("weatherDisplay");

weatherSelect.addEventListener("change", function () {
  const selectedWeather = weatherSelect.value;

  if (selectedWeather === "") {
    weatherIcon.textContent = "🌤️";
    weatherTitle.textContent = "Welcome!";
    weatherDescription.textContent =
      "Select a weather condition to see its details.";

    weatherDisplay.style.background = "#eff6ff";
    document.body.style.background =
      "linear-gradient(135deg, #dbeafe, #e0e7ff)";
    return;
  }

  const weather = weatherConditions[selectedWeather];

  if (!weather) return;

  weatherIcon.textContent = weather.icon;
  weatherTitle.textContent = weather.title;
  weatherDescription.textContent = weather.description;

  weatherDisplay.style.background = weather.background;
  document.body.style.background = weather.pageBackground;
});
