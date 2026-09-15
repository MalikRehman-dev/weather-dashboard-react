Haan yar 😄 **meri ghalti**. Ab main tumhein **poora README ek hi baar, ready-to-copy-paste** de raha hoon. Purana README ka sara content delete karo aur **sirf ye poora content paste** karo:

````markdown
# Weather Dashboard

A responsive Weather Dashboard built with React.js and the Open-Meteo API.

The application allows users to search for cities around the world and view current weather information including temperature, weather condition, humidity, and wind speed.

## Features

- Search weather by city name
- Global city search using Open-Meteo Geocoding API
- Display current temperature
- Display weather condition
- Display humidity
- Display wind speed
- Weather icons based on weather conditions
- Loading indicator while fetching weather
- Friendly error messages
- Store up to 5 recent searches
- Recent searches saved in localStorage
- Click recent cities to search again
- Responsive design for desktop, tablet, and mobile
- No backend required
- No API key required

## Technologies Used

- React.js
- JavaScript
- Vite
- CSS
- Open-Meteo API
- Fetch API
- React Hooks
- LocalStorage
- Git & GitHub
- Vercel

## Project Structure

```text
src
├── Components
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   ├── RecentSearches.jsx
│   ├── LoadingSpinner.jsx
│   └── ErrorMessage.jsx
│
├── css
│   ├── SearchBar.css
│   ├── WeatherCard.css
│   ├── RecentSearches.css
│   ├── LoadingSpinner.css
│   └── ErrorMessage.css
│
├── services
│   └── WeatherApi.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
````

## API Integration

This project uses the Open-Meteo API for city search and weather data.

### Geocoding API

The Geocoding API is used to search for a city and get its latitude and longitude.

```text
https://geocoding-api.open-meteo.com/v1/search
```

### Weather API

The Weather API uses the latitude and longitude to get current weather information.

```text
https://api.open-meteo.com/v1/forecast
```

No API key is required.

## How It Works

1. The user enters a city name.
2. The application searches for the city using the Geocoding API.
3. The API returns the city's latitude and longitude.
4. The application sends these coordinates to the Weather API.
5. The Weather API returns the current weather data.
6. The weather information is displayed in the Weather Card.
7. The searched city is saved in localStorage.
8. The latest five searches are displayed under Recent Searches.
9. Users can click a recent city to search for its weather again.

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_GEOCODING_API_URL=https://geocoding-api.open-meteo.com/v1/search
VITE_WEATHER_API_URL=https://api.open-meteo.com/v1/forecast
```

The `.env` file is ignored by Git and is not included in the repository.

## Installation

Clone the repository:

```bash
git clone https://github.com/MalikRehman-dev/weather-dashboard-react.git
```

Open the project folder:

```bash
cd weather-dashboard-react
```

Install the project dependencies:

```bash
npm install
```

Create a `.env` file in the project root and add the environment variables shown above.

Start the development server:

```bash
npm run dev
```

## Production Build

To create a production build:

```bash
npm run build
```

The production files will be generated in the `dist` folder.

## Deployment

The project is deployed using Vercel.

The GitHub repository is connected to Vercel for deployment.

## Error Handling

The application handles:

* Empty city searches
* City not found errors
* Failed API requests
* Loading state while fetching weather
* Friendly error messages

## Responsive Design

The application is responsive and works on:

* Desktop
* Laptop
* Tablet
* Mobile

CSS media queries are used to adjust the layout for different screen sizes.

## Learning Objectives

This project demonstrates:

* React functional components
* React Hooks
* REST API integration
* Fetch API
* Async/Await
* JSON data handling
* Loading, success, and error states
* Environment variables
* LocalStorage
* Component-based architecture
* Responsive CSS
* Git and GitHub
* Vercel deployment

## Author

Malik Abdul Rehman

BS Software Engineering

## License

This project was created for educational purposes.

```

**Bas ab isi ko poora copy → README.md mein paste → `Ctrl + S`.**

Iske baad README ko dobara rewrite nahi karenge.
```
