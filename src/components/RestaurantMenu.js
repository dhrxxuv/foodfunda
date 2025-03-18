import React, { useState } from 'react';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useTheme } from '../utils/useContextTheme'; 

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restname, menuCards } = useRestaurantMenu(id);
  const [showIndex, setShowIndex] = useState(null); 
  const { theme } = useTheme();

 
  const filtercarts = menuCards.filter(
    (c) => c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );

  return (
    <div
      className={`w-full max-w-7xl mx-auto my-8 p-6 rounded-lg shadow-xl ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      {/* Restaurant Name Section */}
      <h1 className="text-3xl font-extrabold mb-6 text-center">{restname}</h1>

      {/* Menu Categories Section */}
      <div className="space-y-8">
        {filtercarts.map((cards, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
            }`}
          >
            <RestaurantCategory
              data={cards?.card?.card}
              showItem={index === showIndex} // Pass whether this category should be open
              setShowIndex={() => setShowIndex(index === showIndex ? null : index)} // Toggle accordion
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;