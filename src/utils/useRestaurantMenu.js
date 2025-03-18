import { useState, useEffect } from 'react';

const useRestaurantMenu = (id) => {
  const [menuCards, setMenuCards] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [restname,setresname] = useState()
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2124007&lng=78.1772053&restaurantId=${id}`
        );
        const data = await response.json();
       
        const restaurantInfo = data?.data?.cards[0]?.card?.card?.info || null; // Restaurant details
        const cards =
          data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []; // Menu cards

        console.log('hiii')
        console.log(data)
        
        const resname = data.data.cards[0].card.card.text
        setresname(resname)
        setRestaurantDetails(restaurantInfo);
        setMenuCards(cards);
      } catch (error) {
        setError(error.message || 'Error fetching menu');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [id]);

  return { restaurantDetails, menuCards, loading, error,restname };
};

export default useRestaurantMenu;
