import { useState } from "react"
import CartIcon from "@/components/CartIcon";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import BasketModal from "./BasketModal";

export default function ShoppingCart() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);


    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.qty, 0)
        : 0;

    return (

        <>
            <div
                onClick={toggleModal}
                className="inline-block absolute right-2 md:right-6 cursor-pointer flex justify-end"
            >
                <div className="indicator">
                    {count > 0 && <span className="indicator-item badge bg-purple-400 text-white">
                        {count}
                    </span>}
                    <CartIcon />
                </div>
                <p className="text-xs opacity-60 mt-[-4px]">Shopping Bag</p>
            </div>

            <BasketModal
                isOpen={isOpen}
                toggleModal={toggleModal}
            />
        </>
    )
}