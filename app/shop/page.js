import ProductCard from "@/components/ProductCard";
import Filter from "@/components/shop/filter";
import { getAllProducts } from "@/database/queries";

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <div class="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
      <Filter />
      <div class="col-span-3">
        <div class="grid md:grid-cols-3 grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard key={toString(product._id)} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
