import { useParams } from "react-router";
import BookList from "@/components/BookList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import _ from "lodash";
import books from "@/json/books.json"

function Category() {
    const { bookcategory } = useParams();
    const _books = books.filter(
        x => x?.category?.toUpperCase() === bookcategory.toUpperCase()
    );
    const title = _.startCase(bookcategory);


    return (
        <div>
            <Header
                title={title}
                slogan="The best place to buy best books"
            />
            <BookList books={_books} classname="content" />
            <Footer classname="footer" />


        </div>
    )
}

export default Category