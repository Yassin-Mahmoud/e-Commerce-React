import { Link } from "react-router-dom";
import background from "../assets/blue-shopping-bag.jpg";

const Hero = () => {
    return (
        <>
            <section className="h-[720px] bg-no-repeat bg-cover bg-center py-24">
                <img
                    className="absolute h-full w-full"
                    src={background}
                    alt="img"
                />
                <div className="absolute container mx-auto flex justify-between h-full">
                    <div className="flex flex-col justify-center mx-4">
                        <div className="font-semibold flex items-center uppercase">
                            <div className="w-10 h-[2px] mr-3 bg-blue-gray-700"></div>
                            New Trend
                        </div>
                        <h1 className="lg:text-[60px] leading-[1.1] mb-4 text-[40px]">
                            AUTUMN SALE STYLISH <br />
                            <span className="font-semibold">BRAND</span>
                        </h1>
                        <Link
                            to={"/e-Commerce-React/"}
                            className="self-start uppercase font-semibold border-b-2 border-primary"
                        >
                            Discover More
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
