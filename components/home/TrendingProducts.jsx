import ProductCard from "../ProductCard";

const TrendingProducts = () => {
    return (
        <div class="container pb-16">
            <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">TRENDING PRODUCTS</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default TrendingProducts;