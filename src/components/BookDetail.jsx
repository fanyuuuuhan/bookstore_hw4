import { useState } from "react"
import AddToCart from "@/components/AddToCart.jsx"

function BookDetail({ book }) {
    const [qty, setQty] = useState(book.stock > 0 ? 1 : 0);

    return (
        <div className="flex opacity-90 px-5">

            <div className="w-1/5">
                <img className="rounded-lg w-full" src={book.cover} alt={book.name} />
            </div>

            <div className="w-4/5">
                <div className="text-left px-10">
                    <h1 className="text-2xl font-bold py-4">{book.title}</h1>
                    <h2 className="text-lg pb-5 opacity-70">{book.author}</h2>
                    <p className="leading-[22px]">{book.summary}</p>
                </div>

                <div className="flex justify-between px-10 py-4">
                    <div className="grid grid-row-2 text-left">
                        <p className="text-2xl text-yellow-500">${book.price}</p>
                        <p className="opacity-70">
                            Stock : {book.stock}
                        </p>
                    </div>

                    <div className="grid grid-row-2">
                        <div className="flex flex-wrap">
                            <p className="pr-4">Qty:</p>
                            <select className="select select-bordered w-20 bg-white opacity-60 rounded-lg text-black"
                                defaultValue={book.stock > 0 ? 1 : 0}
                                onChange={event => setQty(Number(event.target.value))}
                            >
                                {Array(book.stock).keys().map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <p className=" opacity-70">Total Price: {book.price*qty} </p>
                    </div>

                </div>
                <AddToCart book={book} qty={qty} />
            </div>

        </div>
    )
}

export default BookDetail