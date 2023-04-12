import { swiggy_menu_api_URL } from "../constants";
import { useState, useEffect } from "react";
export default useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in res state variable
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId);
      const json = await response.json();
      console.log(json?.data?.cards[0]?.card?.card?.info);
      setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    } catch (error) {
      console.log(error);
    }
  }
  return restaurant;
};
