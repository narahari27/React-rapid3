// src/components/RestaurantMenu.jsx
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  
  // Destructure the returned object
  const { resInfo, loading, error } = useRestaurantMenu(resId);
  
  console.log('Hook returned:', { resInfo, loading, error });
  
  // Handle loading
  if (loading) {
    return <Shimmer />;
  }
  
  // Handle error
  if (error) {
    return (
      <div className="text-center mt-10 p-4">
        <h2 className="text-red-600 font-bold text-xl">Error Loading Menu</h2>
        <p className="text-gray-600 mt-2">{error}</p>
      </div>
    );
  }
  
  // Handle no data
  if (!resInfo) {
    return (
      <div className="text-center mt-10">
        <p>No restaurant data available</p>
      </div>
    );
  }
  
  // Extract restaurant info safely
  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;
  
  if (!restaurantInfo) {
    return (
      <div className="text-center mt-10">
        <p>Restaurant information not available</p>
      </div>
    );
  }
  
  const { name, city, cuisines = [], cloudinaryImageId } = restaurantInfo;
  
  // Extract categories safely
  const regularCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  
  const categories = regularCards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  
  console.log('Categories found:', categories.length);
  
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-xl">
        {cuisines.length > 0 ? cuisines.join(', ') : 'Cuisines not available'}
      </p>
      
      {/* Categories */}
      <div className="mt-6">
        {categories && categories.length > 0 ? (
          categories.map((category, index) => (
            <RestaurantCategory 
              key={category?.card?.card?.title || index} 
              data={category?.card?.card}
            />
          ))
        ) : (
          <p className="text-gray-500 mt-4">No menu categories available</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;