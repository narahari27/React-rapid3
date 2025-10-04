import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({resList}) => {
  // console.log(props);
  const {cloudinaryImageId , name ,areaName ,avgRating ,deliveryTime , cuisines} = resList?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src= {CDN_URL+cloudinaryImageId}
        alt=""
      />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
      <h5 className="cuisine">{cuisines.join( ',')}</h5>
      <h5>{areaName}</h5>
    </div>
  );
};
export default RestaurantCard;