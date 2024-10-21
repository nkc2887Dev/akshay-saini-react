import { useState } from "react";

const Search = ({ restaurantsList, setRestaurantsList, restaurants}) => {
  const [searchInput, setSearchInput] = useState("");
  const [btn, setBtn] = useState(false);

  const getFilteredData = async () => {
    const data = await Promise.all(
      restaurants.filter((restrt) => restrt.info.name.includes(searchInput))
    );
    setRestaurantsList(data);
    setSearchInput("");
    setBtn(true);
  };

  return (
    <div className="container">
      <input
        type="text"
        name="search"
        id="search"
        value={searchInput}
        placeholder="search..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="button" className="search" onClick={getFilteredData}>
        Search
      </button>
      {btn && (
        <button
          onClick={() => {
            setRestaurantsList(restaurants);
            setBtn(false);
          }}
        >
          Remove Filter
        </button>
      )}
    </div>
  );
};

export default Search;