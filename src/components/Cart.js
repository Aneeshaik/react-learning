import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems, removeItems } from "./CartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearItems());
    }
    const handleRemoveItem = () => {
        dispatch(removeItems());
    }
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="text-center m-4">
        <div>
            <h1 className="font-bold text-2xl">Cart</h1>
            <button className="bg-slate-500 rounded-lg p-1 m-1" onClick={handleClearCart}>Clear Cart</button>
            <button className="bg-slate-500 rounded-lg p-1 m-1" onClick={handleRemoveItem}>Remove Item</button>
        </div>
            <div className="w-6/12 cursor-pointer shadow-xl rounded-md my-2 mx-auto bg-gray-100 p-4">
                <ItemList items={cartItems}/>
            </div>
        </div>

    )
}

export default Cart;