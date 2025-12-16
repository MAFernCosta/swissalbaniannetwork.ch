import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";


const Navbar = ({navbarItems, logo}) =>{
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className="bg-white w-screen flex fixed top-0 justify-center flex-col z-40">
            <nav className="flex justify-between mx-auto container">
                <a   
                    alt="Swiss albanian network logo" 
                    href="#"
                    className="ms-5"
                    >
                    <img src={logo} alt="logo" className="h-20"/>
                </a>
                {/* Burger button */}
                <div className="flex lg:hidden items-center me-10">
                    <a onClick={() => setNavOpen((prev) => !prev)} className="hover:cursor-pointer">
                        {!navOpen ? 
                            <GiHamburgerMenu className="text-2xl"/> : 
                            <AiOutlineClose className="text-2xl"/>
                        }
                    </a>
                    
                </div>
                {/* Desktop version starts here */}
                <ul className="hidden lg:flex items-center">
                    {
                        navbarItems.map(({link, label}, index) =>
                            <li className="font-bold" key={index+label}>
                                <a
                                    className="px-5 pb-1 hover:border-b-2 hover: hover:text-red-600" 
                                    to={link}
                                    > {label} 
                                </a>
                            </li>
                        )
                    }
                </ul>
            </nav>
            {/* Mobile Version */}
                <ul className={`block bg-gray-100 lg:hidden ${!navOpen ? "hidden" : "block"}`}>
                    {
                        navbarItems.map(({link, label}, index) =>
                            <li className="font-bold py-5" key={index+label+"mobile"}>
                                <a
                                    className="ps-15 hover: hover:text-red-600" 
                                    to={link}
                                    > {label} 
                                </a>
                            </li>
                        )
                    }
                </ul>
        </div>
    )
}

export default Navbar;