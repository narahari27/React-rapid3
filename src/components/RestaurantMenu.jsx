import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, city, cuisines, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  return (
    <div className="menu max-w-sm rounded overflow-hidden shadow-lg p-4">
      <div className="menu-card ">
        <h1 className="font-bold text-xl mb-2">{name}</h1>
        <img
          className="res-logo-menu w-52 h-52"
          src={CDN_URL + cloudinaryImageId}
          alt=""
        />
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
