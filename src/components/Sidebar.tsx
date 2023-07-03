import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";

import { SidebarContext } from "../contexts/SIdebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { isOpen, handleCloseOpen } = SidebarContext();
    const { cart, clearCart, total, cartCounter } = CartContext();

    return (
        <>
            <div
                className={`${
                    isOpen ? "right-0" : "-right-full"
                } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
            >
                {/* sidebar header */}
                <div className="flex items-center justify-between py-6 border-b">
                    <div className="uppercase text-sm font-semibold ">
                        Shopping Bag ({cartCounter})
                    </div>
                    <div
                        onClick={() => handleCloseOpen()}
                        className="cursor-pointer w-8 h-8 flex justify-center items-center"
                    >
                        <IoMdArrowForward className="text-2xl" />
                    </div>
                </div>

                {/* sidebar cart item */}
                <div className="flex flex-col gap-y-2 h-[53vh] overflow-y-auto overflow-x-hidden border-b max-w-[400px]">
                    {cart.map((item) => {
                        return <CartItem item={item} key={item.id} />;
                    })}
                </div>

                {/* sidebar footer */}
                <div className="flex flex-col gap-y-3 py-4 mt-4">
                    <div className="flex w-full justify-between items-center">
                        {/* total */}
                        <div className="uppercase font-semibold">
                            <span className="mr-2">Total:</span> ${" "}
                            {parseFloat(total.toString()).toFixed(2)}
                        </div>

                        {/* clean cart icon */}
                        <div
                            onClick={clearCart}
                            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center rounded-full text-2xl"
                        >
                            <FiTrash2 />
                        </div>
                    </div>
                    <Link
                        to={""}
                        className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
                    >
                        View Cart
                    </Link>
                    <Link
                        to={""}
                        className="bg-primary text-white flex p-4 justify-center items-center text-primary w-full font-medium"
                    >
                        Checkout
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
