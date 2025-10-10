import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data})=>{
    const [showItems , setShowItems] = useState(false);
    // console.log(data);
    const handleClick = ()=>{
        setShowItems(!showItems);
    }
return(
    <div>
        {/* Accordian Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 " onClick={handleClick}>
            <div className="flex justify-between">
             <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>🔽</span>   
            </div>
              {/* Accordian body */}
              {showItems &&(
                 <ItemList items={data.itemCards} /> 
              )}
           
        </div>
      
        
    </div>
)
}
export default RestaurantCategory
