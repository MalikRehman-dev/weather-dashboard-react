import { useEffect, useState } from "react";
import "./App.css";

import {
  getCityCoordinates,
  getWeather,
} from "./services/WeatherApi.js";

import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import RecentSearches from "./Components/RecentSearches";
import LoadingSpinner from "./Components/LoadingSpinner";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [recentSearches, setRecentSearches] = useState(() => {
    try {
      const savedSearches = localStorage.getItem("recentSearches");

      return savedSearches ? JSON.parse(savedSearches) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "recentSearches",
      JSON.stringify(recentSearches)
    );
  }, [recentSearches]);

  const handleSearch = async (cityName) => {
    const searchCity = cityName.trim();

    if (!searchCity) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const location = await getCityCoordinates(searchCity);

      setCity(location.name);

      setRecentSearches((previousSearches) => {
        const filteredSearches = previousSearches.filter(
          (item) =>
            item.toLowerCase() !== searchCity.toLowerCase()
        );

        return [
          searchCity,
          ...filteredSearches,
        ].slice(0, 5);
      });

      const weatherData = await getWeather(
        location.latitude,
        location.longitude
      );

      setWeather(weatherData);
    } catch (error) {
      setError(
        error.message || "Unable to get weather information."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      {weather && (
        <WeatherCard
          city={city}
          weather={weather}
        />
      )}

      <RecentSearches
        searches={recentSearches}
        onSearch={handleSearch}
      />
    </div>
  );
}

export default App;