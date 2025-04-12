import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const cityChangeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      alert("Please enter city name");
      return;
    }
    onSearch(city);
    setCity("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex mx-auto items-center justify-center gap-4 pt-8 w-full max-w-2xl"
    >
      <div className="relative flex-1 group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <input
          type="text"
          value={city}
          onChange={cityChangeHandler}
          placeholder="Enter City Name"
          className="relative w-full px-6 py-4 text-lg bg-white/90 backdrop-blur-sm border-2 border-transparent rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:from-purple-700 hover:to-pink-700"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </div>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
