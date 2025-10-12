// import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withDiscountLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
const Body = () => {
  //local state variable = super powerfull variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchtext] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const RestaurantWithDiscount = withDiscountLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
  // console.log("Body Rendered");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9970957&lng=77.53363790000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return <h1>Hey you are offline !!!</h1>;
  }
  // console.log("listof Restaurants:", listOfRestaurants);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search flex my-2">
        <div className="px-4 flex">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter px-4">
          <button
            className="filter-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (item) => item.info.avgRating >= 4.3
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div>
          <label htmlFor="">UserName:</label>
          <input
            type="text"
            className="border"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="res-container flex  flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantWithDiscount resList={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
