import books from "../json/books.json"
import BookItem from "./BookItem"

function BookList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 content">
            {books.map((book) =>(
                <BookItem key={book.ID} book={book} />
            ))}
        </div>
    )
}

export default BookList
