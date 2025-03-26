import { useParams } from 'react-router'
import books from "../json/books.json"
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookDetail from '../components/BookDetail';

function Books() {
    const { bookID } = useParams();
    const book = books.find(
        (x) => x.ID === Number(bookID)
    )

    return (
        <div className="container mx-auto main-layout">
            <Header
                title = "Book Detail"
                slogan = ""
            />
            <BookDetail book={book} className="content" />
            <Footer className="footer" />
        </div>
    );
}

export default Books