import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../utils/useContextTheme";
import { addItem, removeItem } from "../Redux/cartSlice";

const ItemList = ({ items }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store

  // Handle adding an item to the cart
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  // Handle removing an item from the cart or decreasing its quantity
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  // Fallback image URL
  const fallbackImage =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/empty-image"; // Replace with your fallback image URL

  return (
    <div
      className={`p-6 space-y-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {items.map((item) => {
        
        const itemId = item.card.info.id;
        const cartItem = cartItems.find((i) => i.card.info.id === itemId);
        const quantity = cartItem ? cartItem.quantity : 0;

        return (
          <div
            data-testid = "itemsID"
            key={itemId}
            className={`border ${
              theme === "dark"
                ? "border-gray-700 bg-gray-800"
                : "border-gray-200 bg-white"
            } p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ${
              theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            {/* Item details */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
              <img
                src={
                  item.card.info.imageId
                    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`
                    : fallbackImage
                }
                alt={item.card.info.name}
                className="w-32 h-32 object-cover rounded-xl shadow-md"
              />
              <div className="flex flex-col sm:flex-row sm:space-x-6 sm:items-center w-full">
                <span
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.card.info.name}
                </span>
                <span
                  className={`text-lg font-medium ${
                    theme === "dark" ? "text-green-400" : "text-green-600"
                  }`}
                >
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
            </div>

            {/* Quantity Control or Add to Cart Button */}
            <div className="mt-4 flex justify-end">
              {quantity > 0 ? (
                <div className="flex items-center space-x-3">
                  <button
                    className={`px-3 py-1 text-sm font-medium rounded-lg transition-all duration-200 ${
                      theme === "dark"
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-red-600 hover:bg-red-700 text-white"
                    }`}
                    onClick={() => handleRemoveItem(itemId)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span
                    className={`text-lg font-medium ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {quantity}
                  </span>
                  <button
                    className={`px-3 py-1 text-sm font-medium rounded-lg transition-all duration-200 ${
                      theme === "dark"
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "bg-green-600 hover:bg-green-700 text-white"
                    }`}
                    onClick={() => handleAddItem(item)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                  onClick={() => handleAddItem(item)}
                  aria-label={`Add ${item.card.info.name} to cart`}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;