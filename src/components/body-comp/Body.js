import { useState } from "react";
import { restaurants } from "../../constants";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(restaurants);

  return (
    <div className="container">
      <Search
        setRestaurantsList={setRestaurantsList}
        restaurants={restaurants}
      />
      <div className="restaurant-list">
        {restaurantsList.length > 0 ? (
          restaurantsList.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            );
          })
        ) : (
          <div style={{ textAlign: "right" }}>
            <h2>No Records Found!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
