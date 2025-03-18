import React from "react";
import ItemList from "./ItemList";
import { useTheme } from "../utils/useContextTheme"; // Assuming you have a theme context

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const theme = useTheme(); // Get the current theme from context

  return (
    <div
      className={`w-full max-w-4xl mx-auto my-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div
        className={`shadow-lg rounded-lg overflow-hidden ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Accordion Header */}
        <div
          className={`flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 rounded-t-lg transition-all duration-300 ${
            theme === "dark" ? "hover:bg-gray-700" : ""
          }`}
          onClick={setShowIndex} // Toggle accordion on click
        >
          <span
            className={`font-extrabold text-xl ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            {data.title} ({data.itemCards.length})
          </span>
          <span
            className={`transition-transform transform ${
              showItem ? "rotate-180" : ""
            }`}
          >
            {/* Down arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>

        {/* Accordion Body */}
        {showItem && (
          <div
            className={`p-6 rounded-b-lg transition-all ease-in-out duration-300 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;