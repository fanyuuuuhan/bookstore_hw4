import AddToCart from "./AddToCart"

function BookDetail({ book }) {
    return (
        <div className="flex text-white opacity-90 px-5">
            <div className="w-1/5">
                <img className="rounded-t-lg w-full" src={book.cover} alt={book.name} />
            </div>
            <div className="gird w-4/5">
                <div className="text-left px-10 h-2/3">
                    <h1 className="text-2xl font-bold py-4">{book.title}</h1>
                    <h2 className="text-lg pb-5 opacity-70">{book.author}</h2>
                    <p>{book.summary}</p>
                </div>
                <div className="flex justify-between px-10">
                    <p className="text-2xl text-yellow-200">${book.price}</p>
                    <div className="gird gird-row-2">
                        <p className="pb-2">Stock : {book.stock}</p>
                        <AddToCart />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BookDetail