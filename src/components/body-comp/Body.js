import { useState } from "react";
import { restaurants } from "../../constants";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(restaurants);

  return (
    <div className="container">
      <Search
        restaurantsList={restaurantsList}
        setRestaurantsList={setRestaurantsList}
        restaurants={restaurants}
      />
      <div className="restaurant-list">
        {restaurantsList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
