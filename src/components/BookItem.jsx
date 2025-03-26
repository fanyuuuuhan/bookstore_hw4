import {Link} from 'react-router'

function BookItem({ book }) {
    return (

        <section className="pt-2 pb-3 px-3 lg:px-4">
            <div className="rounded-lg  bg-gray-500">

                <img className="rounded-t-lg w-full" src={book.cover} alt={book.name} />

                <div className="px-6 pt-3">
                    <h1 className="text-2xl text-left font-bold ">
                        {book.title}
                    </h1>
                    <h5 className="text-left">
                        {book.author}
                    </h5>
                    <p className="text-left opacity-60">
                        {book.short_summary}
                    </p>
                </div>

                <div className="flex justify-between flex-wrap px-4 opacity-80 pb-4">
                    <h3 className="text-lg">$ {book.price}</h3>
                    <Link to={`/books/ID/${book.ID}`}>
                        <h4 className="rounded-sm border px-3 text-lg text-gray-50">More</h4>
                    </Link>
                </div>

            </div>
        </section>



    )
}

export default BookItem