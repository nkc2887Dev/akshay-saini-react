import React from "react";
import { IMG_CDN_URL } from "../../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  costForTwo,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="restaurantCard">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="Image" />
      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
    </div>
  );
};

export default RestaurantCard;
