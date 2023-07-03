import { createContext, useState, useEffect, useContext } from "react";
import React from "react";

export interface ProductData {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

interface ProductContextInterface {
    products: ProductData[];
}

interface ProductProviderProps {
    children: React.ReactNode;
}

const productContext = createContext<ProductContextInterface>({
    products: [],
});

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<ProductData[]>([]);

    // Fetching products
    const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <productContext.Provider value={{ products }}>
                {children}
            </productContext.Provider>
        </>
    );
};

export default ProductProvider;
export const ProductContext = () => {
    return useContext(productContext);
};
