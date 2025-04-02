import { useState } from "react";
import { NavLink } from "react-router"
import HamMenu from '@/components/HamMenu'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navbarContent = [
        { to: "/books/category/Romantic", label: "Romantic" },
        { to: "/books/category/Adventure", label: "Adventure" },
        { to: "/books/category/Social", label: "Social" },
        { to: "/books/category/Bildungsroman", label: "Bildungsroman" },
    ];

    const NavbarContent = () => (
        <div className="flex flex-col md:flex-row md:justify-around md:space-x-6" >

            {navbarContent.map(({ to, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) => `mx-6 my-2 text-blue-200 text-base transition-all duration-500 ease-in-out ${isActive ? "opacity-100" : "opacity-60"} hover:opacity-100 hover:[text-shadow:0px_0px_30px_white]`
                    }
                >
                    {label}
                </NavLink>
            ))}
        </div>
    );


    return (
        <>
            <div className="hidden md:flex justify-around mt-3 mb-8">
                <NavbarContent />
            </div>
            <div className="drawer md:hidden">
                <input id="drawer-toggle" type="checkbox" className="drawer-toggle" checked={isOpen} />
                <HamMenu
                    id="drawer-toggle"
                    className="z-1000 absolute drawer-toggle left-0 mt-6 -translate-y-45"
                    onClick={() => setIsOpen(!isOpen)}
                    isOpen={isOpen}
                />
                <div className="drawer-side z-999 w-auto">
                    <label htmlFor="drawer-toggle" className="drawer-overlay" onClick={() => setIsOpen(false)}></label>
                    <div className="pt-20">
                        <h2 className="bg-gray-500 bg-opacity-50 text-xl font-bold pt-1 pb-1 mb-3">CATEGORY</h2>
                        <NavbarContent className="pt-10" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar

