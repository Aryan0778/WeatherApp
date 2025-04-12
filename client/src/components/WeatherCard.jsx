import React from "react";

const WeatherCard = ({ weather }) => {
  const { city, wind, temperature, condition, icon, humidity } = weather;
  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800 text-white shadow-2xl rounded-3xl p-8 mt-10 transform transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-100">
            {city}
          </h2>
          <p className="text-xl font-semibold capitalize text-purple-100">{condition}</p>
        </div>
        <div className="bg-white/20 rounded-full p-4 backdrop-blur-sm">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather icon"
            className="w-24 h-24"
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-6 h-6 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="text-lg text-purple-100">Wind Speed</p>
          </div>
          <p className="text-2xl font-bold">{wind} m/s</p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-6 h-6 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <p className="text-lg text-purple-100">Temperature</p>
          </div>
          <p className="text-2xl font-bold">{temperature}°C</p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-6 h-6 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <p className="text-lg text-purple-100">Humidity</p>
          </div>
          <p className="text-2xl font-bold">{humidity}%</p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-6 h-6 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <p className="text-lg text-purple-100">Condition</p>
          </div>
          <p className="text-2xl font-bold capitalize">{condition}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
