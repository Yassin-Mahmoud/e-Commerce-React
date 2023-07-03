import React from "react";
import { CartItemInterface } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

interface CartItemProps {
    item: CartItemInterface;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { removeItem, addToCart, decreaseAmount } = CartContext();
    const finalPrice = item.amount * item.price;

    return (
        <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-600">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                {/* image */}
                <Link to={`/product/${item.id}`}>
                    <img className="max-w-[80px]" src={item.image} alt="" />
                </Link>

                <div>
                    {/* title & close icon */}
                    <div className="w-full flex flex-col">
                        <div className="flex justify-between mb-2">
                            {/* title */}
                            <Link
                                className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
                                to={`/product/${item.id}`}
                            >
                                {item.title}
                            </Link>

                            {/* close icon */}
                            <div
                                onClick={() => removeItem(item.id)}
                                className="text-xl cursor-pointer ml-2"
                            >
                                <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
                            </div>
                        </div>
                    </div>

                    {/* quantity, price & final price */}
                    <div className="flex gap-x-2 h-[36px] text-sm">
                        {/* quantity */}
                        <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                            <div
                                onClick={
                                    item.amount > 2
                                        ? () => decreaseAmount(item.id)
                                        : () => removeItem(item.id)
                                }
                                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                            >
                                <IoMdRemove />
                            </div>
                            <div className="flex h-full justify-center items-center px-2">
                                {item.amount}
                            </div>

                            <div
                                onClick={() => addToCart(item)}
                                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                            >
                                <IoMdAdd />
                            </div>
                        </div>

                        {/* price */}
                        <div className="flex flex-1 justify-around items-center ">
                            ${item.price}
                        </div>

                        {/* final price */}
                        <div className="flex flex-1 items-center justify-end text-primary font-medium">{`$${parseFloat(
                            finalPrice.toString()
                        ).toFixed(2)}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
