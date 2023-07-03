import { useParams } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { Spinner } from "@material-tailwind/react";

const SingleProduct = () => {
    const { id } = useParams();

    const { products } = ProductContext();
    const { addToCart } = CartContext();

    const product = products.find((item) => {
        return item.id === Number(id);
    });

    if (!product) {
        return (
            <>
                <div className="h-screen flex flex-col justify-center items-center">
                    <Spinner className="h-8 w-8" />
                    <div className="m-3">Loading...</div>
                </div>
            </>
        );
    }

    return (
        <>
            <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* image div */}
                        <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
                            <img
                                className="max-w-[200px] lg:max-w-[300px]"
                                src={product.image}
                                alt={product.title}
                            />
                        </div>

                        {/* text div */}
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                                {product.title}
                            </h1>
                            <div className="text-xl text-red-500 font-medium mb-6">
                                {" "}
                                ${product.price}
                            </div>
                            <p className="mb-8 max-w-[400px]">
                                {product.description}
                            </p>
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-primary py-4 px-8 text-white"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProduct;
