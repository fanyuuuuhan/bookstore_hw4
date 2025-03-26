import BookList from "../components/BookList";
import Footer from "../components/Footer";
import Header from "../components/Header";
 

function Home() {
    return (
        <div className="header mx-auto main-layout">
            <Header
                title = "Welcome to the bookstore"
                slogan = "The best place to buy best books"
            />
            <BookList className="content" />
            <Footer className="footer" />
        </div>

    )
}

export default Home