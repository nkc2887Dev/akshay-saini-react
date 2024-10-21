import { useState } from "react";

const Search = ({ setRestaurantsList, restaurants }) => {
  const [searchInput, setSearchInput] = useState("");
  const [btn, setBtn] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);

  const getFilteredData = async () => {
    const data = await Promise.all(
      restaurants.filter((restrt) => restrt.info.name.includes(searchInput))
    );
    setRestaurantsList(data);
    setSearchInput("");
    setBtn(true);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        name="search"
        id="search"
        value={searchInput}
        placeholder="search..."
        onChange={(e) => {
          setSearchInput(e.target.value);
          setDisableBtn(e.target.value ? false : true);
        }}
      />
      <button
        type="button"
        className="search"
        style={{ backgroundColor: disableBtn ? "#0056b3" : "#007bff" }}
        disabled={disableBtn}
        onClick={getFilteredData}
      >
        Search
      </button>
      {btn && (
        <button
          className="remove-filter"
          onClick={() => {
            setRestaurantsList(restaurants);
            setBtn(false);
            setDisableBtn(true);
          }}
        >
          Remove Filter
        </button>
      )}
    </div>
  );
};

export default Search;
