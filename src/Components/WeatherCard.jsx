import "../css/WeatherCard.css";

function WeatherCard({ city, weather }) {
  const getWeatherCondition = (code) => {
    if (code === 0) return "Clear Sky";
    if (code >= 1 && code <= 3) return "Cloudy";
    if (code >= 45 && code <= 48) return "Foggy";
    if (code >= 51 && code <= 57) return "Drizzle";
    if (code >= 61 && code <= 67) return "Rain";
    if (code >= 71 && code <= 77) return "Snow";
    if (code >= 80 && code <= 82) return "Rain Showers";
    if (code >= 85 && code <= 86) return "Snow Showers";
    if (code >= 95 && code <= 99) return "Thunderstorm";

    return "Unknown";
  };

  const getWeatherIcon = (code) => {
    if (code === 0) return "☀️";
    if (code >= 1 && code <= 3) return "⛅";
    if (code >= 45 && code <= 48) return "🌫️";
    if (code >= 51 && code <= 57) return "🌦️";
    if (code >= 61 && code <= 67) return "🌧️";
    if (code >= 71 && code <= 77) return "❄️";
    if (code >= 80 && code <= 82) return "🌦️";
    if (code >= 85 && code <= 86) return "🌨️";
    if (code >= 95 && code <= 99) return "⛈️";

    return "🌤️";
  };

  return (
    <div className="weather-card">
      <h2>{city}</h2>

      <div className="weather-icon">
        {getWeatherIcon(weather.current.weather_code)}
      </div>

      <div className="temperature">
        {weather.current.temperature_2m}°C
      </div>

      <p className="weather-condition">
        {getWeatherCondition(weather.current.weather_code)}
      </p>

      <div className="weather-details">
        <div className="weather-detail">
          <span>💧</span>
          <p>Humidity</p>
          <strong>
            {weather.current.relative_humidity_2m}%
          </strong>
        </div>

        <div className="weather-detail">
          <span>💨</span>
          <p>Wind Speed</p>
          <strong>
            {weather.current.wind_speed_10m} km/h
          </strong>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;