import React from "react";
import { ProductData } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

import { BsEyeFill } from "react-icons/bs";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

interface ProductProps {
    product: ProductData;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const { addToCart } = CartContext();

    const truncateString = (str: string, num: number) => {
        return str.length > num ? str.slice(0, num) + "..." : str;
    };

    return (
        <>
            <Card className="max-w-sm lg:h-[300px] group">
                <Link to={`product/${product.id}`}>
                    <IconButton
                        variant="text"
                        className="absolute top-2 -left-5 rounded-full opacity-0 group-hover:opacity-100 group-hover:left-2 duration-300"
                    >
                        <BsEyeFill className="text-xl text-black/30" />
                    </IconButton>
                </Link>

                <CardHeader
                    shadow={false}
                    floated={false}
                    className="cursor-pointer m-auto"
                >
                    <img
                        src={`${product.image}`}
                        className="w-full h-full object-cover max-w-[200px]"
                    />
                </CardHeader>
                <CardBody>
                    <div className="flex items-center justify-between mb-2">
                        <Typography color="blue-gray" className="text-sm">
                            <Typography
                                color="blue-gray"
                                className="text-sm font-semibold"
                            >
                                {product.category}
                            </Typography>
                            {truncateString(product.title, 30)}
                        </Typography>
                        <Typography color="blue-gray" className="font-semibold">
                            ${parseFloat(product.price.toString()).toFixed(2)}
                        </Typography>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                        onClick={() => addToCart(product)}
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                    >
                        Add to Cart
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
};

export default Product;
