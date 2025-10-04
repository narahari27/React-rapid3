import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
//local state variable = super powerfull variable
const  [listOfRestaurants , setListOfRestaurants] = useState([]);
const [searchText , setSearchtext] = useState('');
const [filteredRestaurant , setFilteredRestaurant] = useState([]);
// console.log("Body Rendered");
 useEffect(()=>{
  fetchData();
 },[]);
 const fetchData = async ()=>{
  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9970957&lng=77.53363790000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
  const json = await data.json()  
  // console.log(json);
  setListOfRestaurants(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
  setFilteredRestaurant(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle.restaurants)
 }
 
  return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="search">
        <div>
          <input type="text" value={searchText} 
          onChange={(e)=>{setSearchtext(e.target.value)}} />
          <button onClick={()=>{
            // console.log(searchText);
           const filteredRestaurants = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredRestaurants);
          }} >Search</button>
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
           const filteredList = listOfRestaurants.filter((item)=>item.info.avgRating >=4.3);
           setFilteredRestaurant(filteredList);
          }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((item)=>(
            <Link key={item.info.id} to={"/restaurant/"+item.info.id}>
            <RestaurantCard  resList={item}/>
            </Link>
            
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;