import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SidebarContext } from "../contexts/SIdebarContext";
import { CartContext } from "../contexts/CartContext";

import { BsBag } from "react-icons/bs";
import { FcShop } from "react-icons/fc";
import { Badge } from "@material-tailwind/react";

const Header = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const { handleCloseOpen } = SidebarContext();
    const { cartCounter } = CartContext();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    }, []);

    return (
        <>
            <header
                className={`${
                    isActive ? "bg-white py-4 shadow-md " : "bg-none py-6"
                } fixed w-full z-10 transition-all`}
            >
                <div className="container flex mx-auto items-center justify-between h-full">
                    <Link to={"/"}>
                        <div>
                            <FcShop className="w-[40px] text-4xl ml-4" />
                        </div>
                    </Link>
                    <div
                        onClick={() => {
                            handleCloseOpen();
                        }}
                        className="cursor-pointer flex relative mr-4"
                    >
                        <Badge className="text-xs" content={cartCounter}>
                            <BsBag className="text-2xl " />
                        </Badge>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
