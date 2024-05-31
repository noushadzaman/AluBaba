import { getTrendingProduct } from "@/database/queries";
import ProductCard from "../ProductCard";

const TrendingProducts = async ({ dict }) => {
    const products = await getTrendingProduct();

    return (
        <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">{dict.trending_products}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default TrendingProducts;