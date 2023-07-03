import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { ProductData } from "./ProductContext";

export interface CartItemInterface {
    amount: number;
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

interface CartProviderProps {
    children: React.ReactNode;
}

interface CartContextInterface {
    addToCart: (product: ProductData) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
    decreaseAmount: (id: number) => void;
    cart: CartItemInterface[];
    cartCounter: number;
    total: number;
}

const cartContext = createContext<CartContextInterface>({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    removeItem: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    addToCart: () => {},
    clearCart: () => null,
    decreaseAmount: () => null,
    cart: [],
    cartCounter: 0,
    total: 0,
});

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItemInterface[]>([]);
    const [cartCounter, setCartCounter] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    // total
    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount;
        }, 0);
        setTotal(total);
    });

    // update cart counter
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
            setCartCounter(amount);
        }
    }, [cart]);

    const addToCart = (product: ProductData) => {
        const newItem = { ...product, amount: 1 };

        // add item to cart
        const cartItem = cart.find((item: CartItemInterface) => {
            return item.id === product.id;
        });

        if (cartItem) {
            const newCart = [...cart].map((item: CartItemInterface) => {
                if (item.id === product.id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    // remove item from cart
    const removeItem = (id: number) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    };

    // empty cart
    const clearCart = () => {
        setCart([]);
    };

    // decrease amount
    const decreaseAmount = (id: number) => {
        cart.find((item) => {
            if (item.id === id) {
                const newCart = cart.map((item) => {
                    if (item.id === id) {
                        return { ...item, amount: item.amount - 1 };
                    } else {
                        return item;
                    }
                });
                setCart(newCart);
            }
        });
    };

    return (
        <cartContext.Provider
            value={{
                addToCart,
                removeItem,
                clearCart,
                cart,
                decreaseAmount,
                cartCounter,
                total,
            }}
        >
            {children}
        </cartContext.Provider>
    );
};

export default CartProvider;
export const CartContext = () => {
    return useContext(cartContext);
};
