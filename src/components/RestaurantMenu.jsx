import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
//   console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
     MENU_API_URL+resId
    );
    // console.log('resID',resId);
    // console.log('menu_ai_url',MENU_API_URL);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if(resInfo === null){
   return <Shimmer/>
  }
  const {name,city,cuisines,cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info || {} ;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {} ;
  console.log(itemCards);
  return (
    <div className="menu">
      <div className="menu-card">
    <h1>{name}</h1>
    <img className="res-logo-menu" src= {CDN_URL+cloudinaryImageId} alt="" />
      </div>
      
      
      <h2>{city}</h2>
      <h3>{cuisines}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards?.length > 0 ? (
  itemCards.map((item) => (
    <li key={item.card.info.id}>
      {item.card.info.name}: Rs - {item.card.info.price / 100 || "N/A"}
    </li>
  ))
) : (
  <p>No menu items available</p>
)}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
