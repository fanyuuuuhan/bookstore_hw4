import { Link } from "react-router"


function Header({ title, slogan }) {

    return (
        <header data-theme="dim" className="text-center flex flex-col items-center header">

            <Link to='/'>
                <h2 className="pt-5 pb-2 text-3xl font-bold">
                    {title}
                </h2>
            </Link>

            <p className="text-black-500">
                {slogan}
            </p>

            <hr className="flex justify-center border-4 rounded-lg w-20 my-6 text-blue-150" />

        </header>
    )
}

export default Header