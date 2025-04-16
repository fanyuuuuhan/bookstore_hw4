import { Link } from "react-router"
import Navbar from "@/components/Navbar"
import ShoppingCart from "@/components/ShoppingCart"
import SetColorMode from "./SetColorMode"


function Header({ title, slogan }) {

    return (
        <header className="relative text-center flex flex-col items-center header">

            <Link to='/'>
                <h2 className="pt-5 pb-2 text-3xl font-bold">
                    {title}
                </h2>
            </Link>

            <p className="text-black-500">
                {slogan}
            </p>

            <SetColorMode />
            <ShoppingCart />


            <hr className="flex justify-center border-4 rounded-lg w-20 my-6 text-blue-150" />
            <Navbar />
        </header>
    )
}

export default Header