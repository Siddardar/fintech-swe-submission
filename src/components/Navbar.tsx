import React, { useState } from "react";
import { Link } from "gatsby";
import { Menu, X } from "lucide-react";

const NavLinks = () => {
    return (
        <>
            <Link to="/" className="block px-4 py-2">Home</Link>
            <Link to="/about" className="block px-4 py-2">About</Link>
            <Link to="/contact" className="block px-4 py-2">Contact</Link>
        </>
    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="flex w-1/3 justify-end">
                <div className="justify-between hidden md:flex">
                    <NavLinks />
                </div>
                <div>
                    <button onClick={toggle} className="md:hidden transition-transform duration-300 ease-in-out">
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </nav>
            <div className={`flex basis-full flex-col items-center  ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                <NavLinks />
            </div>
        </>
    );
}

export default Navbar;
