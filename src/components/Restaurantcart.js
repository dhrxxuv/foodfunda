import React from "react";
import { useTheme } from "../utils/useContextTheme";


const Restaurantcart = ({ info }) => {
  const { theme } = useTheme(); // Use the theme context

  return (
    <div
      data-testid="rescart"
      className={`cart rounded-lg p-3 hover:shadow-lg transition-transform transform hover:scale-105 ${
        theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <img
        className="w-full h-32 object-cover rounded-t-lg"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
        alt="Restaurant Thumbnail"
      />
      <div className="p-2">
        <h3 className="text-lg font-semibold truncate">{info.name}</h3>
        <h4 className={`text-sm truncate ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
        }`}>
          {info.locality}
        </h4>
        <h5 className="text-sm text-yellow-500 font-medium">
          ⭐ {info.avgRatingString || info.avgRating}
        </h5>
        <h6 className={`text-xs ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
        }`}>
          {info.sla.slaString}
        </h6>
        <h6 className={`text-xs ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
        }`}>
          {info.costForTwo}
        </h6>
        <h6 className={`text-xs truncate ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
        }`}>
          {info.cuisines.join(', ')}
        </h6>
      </div>
    </div>
  );
};

export default Restaurantcart;