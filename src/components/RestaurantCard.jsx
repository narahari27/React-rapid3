import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ resList }) => {
  // console.log(props);
  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    deliveryTime,
    cuisines,
  } = resList?.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="res-card w-[250px] h-96 rounded overflow-hidden shadow-lg m-2 p-4 bg-gray-50 hover:bg-gray-200 ">
      <img
        className="res-logo w-52 h-52 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h3 className="font-bold text-xl mb-2">{name}</h3>
      <h4 className="text-gray-700 text-base">{avgRating}</h4>
      <h4 className="text-gray-700 text-base">{deliveryTime}</h4>
      <h5 className="cuisine text-gray-700 text-base ">{cuisines.join(",")}</h5>
      <h5 className="text-gray-700 text-base">{areaName}</h5>
      <h5>UserName: {loggedInUser}</h5>
    </div>
  );
};
// Higher order Component
// input - Restaurant card ==> Restaurantcard with discount label
export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { resList } = props;
    const discountInfo = resList?.info?.aggregatedDiscountInfoV3;

    // Add these console logs for debugging
    // console.log('Discount Info:', discountInfo);
    // console.log('Has keys:', discountInfo ? Object.keys(discountInfo) : 'no info');

    const hasDiscount =
      discountInfo &&
      Object.keys(discountInfo).length > 0 &&
      (discountInfo.header || discountInfo.subHeader);

    console.log("Has Discount:", hasDiscount);

    return (
      <div className="relative">
        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-lg font-bold text-sm z-10 shadow-lg">
            <div>{discountInfo.header}</div>
            {discountInfo.subHeader && (
              <div className="text-xs font-normal">
                {discountInfo.subHeader}
              </div>
            )}
          </div>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
