const geocodingUrl = import.meta.env.VITE_GEOCODING_API_URL;
const weatherUrl = import.meta.env.VITE_WEATHER_API_URL;

export const getCityCoordinates = async (city) => {
  const response = await fetch(
    `${geocodingUrl}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
  );

  if (!response.ok) {
    throw new Error("City search failed");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }

  return data.results[0];
};

export const getWeather = async (latitude, longitude) => {
  const response = await fetch(
    `${weatherUrl}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`
  );

  if (!response.ok) {
    throw new Error("Weather request failed");
  }

  const data = await response.json();

  return data;
};