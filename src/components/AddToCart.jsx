import { useDispatch } from "react-redux"
import { addCartItems } from "../redux/cartSlice";
import { useState } from "react";

function AddToCart({ book, qty }) {
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

    const addtoCart = () => {
        setShowToast(true);

        dispatch(addCartItems({
            id: book.ID,
            title: book.title,
            cover: book.cover,
            price: book.price,
            stock: book.stock,
            qty,
        }))

        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    }

    return (
        <>
            <button
                className="border-0 rounded-lg bg-purple-400 btn md:w-50 lg:w-80 text-lg"
                onClick={addtoCart}
            >
                Add To Cart
            </button>
            {showToast && (
                <div className="toast toast-end">
                    <div className="alert">
                        <span>
                            {qty}{qty > 1 ? "pieces" : "piece"} of {book.title} {qty > 1 ? "have" : "has"}been added to your cart.
                        </span>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddToCart