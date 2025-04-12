import React, { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import axios from "axios";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  // console.log("weatherData=>", weatherData);
  const handleSearch = async (city) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/weather?city=${city}`
      );

      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
      if (error.response) {
        if (error.response.status === 404) {
          alert("Invalid City Name");
        } else {
          alert("Some error occurred please try again later");
        }
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Weather Dashboard
          </h1>
          <p className="text-lg text-purple-600">
            Get real-time weather updates for any city
          </p>
        </div>
        <SearchBar onSearch={handleSearch} />
        {weatherData ? (
          <WeatherCard weather={weatherData} />
        ) : (
          <div className="mt-20 text-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-md mx-auto">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4">
                Search for a city to get started
              </h2>
              <p className="text-lg text-purple-600">
                Enter a city name in the search bar above to see its current weather conditions.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
