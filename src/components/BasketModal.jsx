import { useDispatch, useSelector } from "react-redux"
import { addCartItems, removeCartItems, selectCartItems } from "../redux/cartSlice";
import { Link } from "react-router";
import CartIcon from "../components/CartIcon";

export default function BasketModal({ isOpen, toggleModal }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleCancel = () => toggleModal(isOpen);
    const getTotalPrice = () => {
        return (cartItems.length > 0)
            ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
            : 0;
    };

    return (
        <>
            {isOpen && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-md">
                        <h3 className="font-thin text-[2rem] mb-4 text-left">Shopping Bag</h3>
                        {cartItems.length === 0 ? (
                            <div className="text-center">Cart is empty</div>
                        ) : (
                            cartItems.map(item => (
                                <li key={item.ID} className="flex justify-between items-center pb-4 mb-4 border-b border-gray-400">
                                    <Link to={`books/ID/${item.ID}`} onClick={handleCancel}>
                                        <img className="max-w-16 flex-1 cur-pointer" src={item.cover} alt={item.title} />
                                    </Link>
                                    <div className="ml-8 flex-8 w-48 text-left">
                                        <div className="font-medium mb-1">{item.title}</div>
                                        <div className="flex items-center space-x-2">
                                            <span>Qty:</span>
                                            <select
                                                defaultValue={item.qty}
                                                onChange={(e) =>
                                                    dispatch(addCartItems({
                                                        id: item.ID,
                                                        title: item.title,
                                                        cover: item.cover,
                                                        price: item.price,
                                                        stock: item.stock,
                                                        qty: Number(e.target.value),
                                                    }))
                                                }
                                                className="select select-bordered select-xs w-[3.5rem] px-2"
                                            >
                                                {[...Array(item.stock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold">${item.price * item.qty}</div>
                                        <div
                                            className="text-xl opacity-60 cursor-pointer"
                                            onClick={() => dispatch(removeCartItems(item.ID))}
                                        >
                                            x
                                        </div>
                                    </div>
                                </li>
                            ))
                        )}

                        {/*Total*/}
                        <div className="flex justify-between items-center mt-4">
                            <div className="font-semibold">Total</div>
                            <div className="font-bold text-right">${getTotalPrice()}</div>
                        </div>

                        {/*check btn*/}
                        <button
                            className="btn bg-purple-400 w-full text-base font-light py-5 mt-8 flex justify-center items-center"
                        >
                            <div className="py-3"><CartIcon /></div>
                            <span className="border-0 rounded-lg font-thin ml-3 text-gray-100">START CHECKOUT</span>
                        </button>

                        {/* Close button */}
                        <div className="absolute right-4 top-4 modal-action mt-4">
                            <button onClick={handleCancel} className="btn btn-sm font-thin">X</button>
                        </div>

                    </div>

                </div>
            )}



        </>
    )
}