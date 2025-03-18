import React, { useEffect, useState } from "react";
import Restaurantcart from "./Restaurantcart";
import { Shimmer } from "react-shimmer";
import { Link } from "react-router"; // Corrected import
import { useTheme } from "../utils/useContextTheme";
import { apibase } from "../utils/apibase";

const Body = () => {
  const [originalList, setOriginalList] = useState([]);
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [ratingFilter, setRatingFilter] = useState(0);
  const { theme } = useTheme(); // Get theme from context

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch(`${apibase}`);
        const json = await response.json();
        const restaurants =
          json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setOriginalList(restaurants);
        setList(restaurants);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
        setLoading(false);
      }
    };
    fetching();
  }, []);

  useEffect(() => {
    const filteredList = originalList.filter(
      (restaurant) => parseFloat(restaurant.info.avgRatingString) >= ratingFilter
    );
    setList(filteredList);
  }, [ratingFilter, originalList]);

  const handleSearch = () => {
    const filteredList = originalList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setList(filteredList);
  };

  const handleRatingFilterChange = (e) => {
    setRatingFilter(parseFloat(e.target.value));
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {[...Array(8)].map((_, index) => (
          <Shimmer key={index} className="shimmer-cart h-64 rounded-lg" />
        ))}
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div className="text-center text-xl font-semibold dark:text-blue-950">
        No restaurants found
      </div>
    );
  }

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } min-h-screen p-6 md:p-8 space-y-8`}
    >
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="text"
          data-testid = "search-input"
          placeholder="Search restaurants..."
          className="w-full md:w-1/3 px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="w-full md:w-auto px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 shadow-lg hover:from-green-600 hover:to-green-700 transition-all"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Dropdown Rating Filter Section */}
      <div className="flex flex-col items-center space-y-4">
        <label className="text-lg font-medium text-gray-800 dark:text-white">
          Filter by Rating:
        </label>
        <select
          data-testid = "filter"
          value={ratingFilter}
          onChange={handleRatingFilterChange}
          className="w-full md:w-1/3 px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
        >
          <option value={0}>All Ratings</option>
          <option value={1}>⭐ </option>
          <option value={2}>⭐⭐ </option>
          <option value={3}>⭐⭐⭐ </option>
          <option value={4}>⭐⭐⭐⭐ </option>
          <option value={5}>⭐⭐⭐⭐⭐ </option>
        </select>
      </div>

      {/* Restaurant Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
            className="no-underline"
          >
            <Restaurantcart
              info={restaurant.info}
              className="rounded-xl shadow-lg p-5 bg-white hover:shadow-xl transition-transform transform hover:scale-105 dark:bg-gray-800 dark:text-white"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;