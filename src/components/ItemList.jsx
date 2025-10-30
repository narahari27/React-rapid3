import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item)=>{
    //Dispatch an Action
    dispatch (addItem(item))
  }
  return (
    <div>
        {items.map((item)=>(
            <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left">
                <div className="flex justify-between">
                    <div>
                        <span>{item?.card?.info?.name}</span>   
                        <span>{item?.card?.info?.price/100}</span> 
                    </div>
                   <div className=" rounded-b-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {/* <img src={CDN_URL + item?.card.info?.imageId } alt="" /> */}
                    <button onClick={()=>handleAddItem(item)}
                     >Add+</button>
                   </div>
                </div>
                <p className="text-xs ">{item?.card?.info?.description}</p>
            </div>
        ))}
    </div>
  );
};
export default ItemList;
