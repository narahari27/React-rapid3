import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {

    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch()
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
  return <div className="text-center m-1 p-1">
    <h1 className="text-2xl font-bold ">Cart</h1>
    <div className="w-6/12 m-auto">
        <button onClick={handleClearCart} className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer mt-2">Clear Cart</button>
        {cartItems.length === 0 && <h1>Youare cart Item is Empty 🦽</h1>}
        <ItemList items={cartItems}/>
    </div>
  </div>;
};

export default Cart;
