import { Link } from "react-router"

function Footer() {
    return (
        <footer>
            <hr className="border-2 text-blue-200 mt-8 mb-3" />

            <div className="flex items-center px-8 py-6 text-white opacity-70">
                <p className="w-3/5 text-left">
                    Copyright © 2025 - All made for Digital Technology Design hw4
                </p>

                <div className="w-1/5 gird gird-row-3 text-sm">
                    <p className="text-lg pb-1 font-bold">
                        About Us
                    </p>
                    <Link to='/'><p>Creator</p></Link>
                    <Link to='/'><p>Team</p></Link>
                </div>

                <div className="w-1/5 gird gird-row-3 text-sm">
                    <p className="text-lg pb-1 font-bold">
                        Contact Us
                    </p>
                    <p>+886-2-2732-1104</p>
                    <p>+886-2-6639-6688</p>
                </div>

            </div>

        </footer>


    )
}

export default Footer