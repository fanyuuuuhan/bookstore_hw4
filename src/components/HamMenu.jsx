function HamMenu({ onClick, isOpen, className }) {
    return (
        <span
            onClick={onClick}
            className={`pt-1 pl-1 absolute inline-block absolute z-10 bg-blue-50 w-10 h-10 rounded-full opacity-70
                hover:opacity-90 md:hidden flex item-center justify-center ${className}`}
        >
            <div className="w-8 h-6 flex flex-col justify-between hover:cursor-pointer">
                <div
                    className={`bg-blue-300 h-[3px] transition-all duration-400 w-full origin-center
                    ${isOpen?"opacity-0":"translate-y-[6px]"}`}>
                </div>
                <div
                    className={`bg-blue-300 h-[3px] transition-all duration-400 w-full origin-center
                    ${isOpen?"rotate-45 w-8 translate-y-[5px]" : "translate-y-[3px]"}`}>
                </div>
                <div
                    className={`bg-blue-300 h-[3px] transition-all duration-400 w-full origin-center
                    ${isOpen?"rotate-[-45deg] w-8 -translate-y-[6px]" : ""}`}>
                </div>
                
            </div>

        </span>
    )
}

export default HamMenu