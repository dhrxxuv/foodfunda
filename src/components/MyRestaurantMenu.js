import React from 'react';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const myRestaurantMenu = () => {
  const { id } = useParams(); // Get restaurant ID from URL params
  const { restaurantDetails, menuCards, loading, error } = useRestaurantMenu(id); // Use the custom hook

  const renderCard = (card, index) => {
    const cardData = card?.card?.card;

    if (!cardData) return null;

    if (cardData.carousel) {
      return (
        <div key={index} className="carousel-card" style={{ marginBottom: '20px' }}>
          <h3>{cardData.title || 'Top Picks'}</h3>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '20px' }}>
            {cardData.carousel.map((item, idx) => (
              <div key={idx} style={{ minWidth: '200px', textAlign: 'center' }}>
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.dish.info.imageId}`}
                  alt={item.dish.info.name}
                  style={{ width: '100%', borderRadius: '10px' }}
                />
                <p>{item.dish.info.name}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (cardData.itemCards) {
      return (
        <div key={index} className="items-card" style={{ marginBottom: '20px' }}>
          <h3>{cardData.title || 'Recommended Items'}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {cardData.itemCards.map((itemCard, idx) => (
              <div key={idx} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '10px' }}>
                <h4>{itemCard.card.info.name}</h4>
                {itemCard.card.info.imageId && (
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${itemCard.card.info.imageId}`}
                    alt={itemCard.card.info.name}
                    style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }}
                  />
                )}
                <p>{itemCard.card.info.price ? `₹${itemCard.card.info.price / 100}` : 'Price not available'}</p>
                <p>{itemCard.card.info.description || 'No description available'}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div key={index} className="unknown-card" style={{ marginBottom: '20px' }}>
          <h3>{cardData.title || 'Unknown Section'}</h3>
          <p>Content not recognized or unavailable</p>
        </div>
      );
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {loading && <p style={{ textAlign: 'center' }}>Loading menu...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

      {!loading && !error && restaurantDetails && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1>{restaurantDetails.name}</h1>
          <p>{restaurantDetails.areaName}, {restaurantDetails.city}</p>
          <p>Rating: {restaurantDetails.avgRating || 'Not available'} ★</p>
          <p>Cost for two: ₹{restaurantDetails.costForTwo / 100 || 'N/A'}</p>
        </div>
      )}

      {!loading && !error && menuCards.length > 0 && (
        menuCards.map((card, index) => renderCard(card, index))
      )}
    </div>
  );
};

export default myRestaurantMenu;