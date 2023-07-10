import { ProductContext, ProductData } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
    const { products } = ProductContext();
    const filteredProducts = products.filter((item) => {
        return (
            item.category === "men's clothing" ||
            item.category === "women's clothing"
        );
    });

    return (
        <>
            <Hero />
            <section className="py-16">
                <div className="flex justify-center items-center">
                    <h1 className="lg:text-4xl border-b-2 uppercase font-semibold mb-16 text-2xl">
                        Products
                    </h1>
                </div>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7 max-w-sm mx-auto md:max-w-none md:mx-0 sm:grid-col-1">
                        {filteredProducts.map((item) => {
                            return <Product key={item.id} product={item} />;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
