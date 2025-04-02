import { useParams } from 'react-router'
import books from "@/json/books.json"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookDetail from '@/components/BookDetail';
import { Helmet } from 'react-helmet-async';

function Books() {
    const { bookID } = useParams();
    const book = books.find(
        (x) => x.ID === Number(bookID)
    )

    return (
        <div className="container mx-auto main-layout">
            <Helmet><title>book</title></Helmet>
            <Header
                title = "Book Detail"
                slogan = {<span className="opacity-50 text-sm">{book.title}</span>}
            />
            <BookDetail book={book} className="content" />
            <Footer className="footer" />
        </div>
    );
}

export default Books