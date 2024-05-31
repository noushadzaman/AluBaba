import ProductCard from "@/components/ProductCard";
import Filter from "@/components/shop/filter";
import { getAllProducts } from "@/database/queries";
import { getDictionary } from "../dictionaries";

export default async function ShopPage({
  searchParams: { product, category, min_price, max_price, size },
  params: { lang },
}) {
  const dict = await getDictionary(lang);
  const products = await getAllProducts(
    product,
    category,
    min_price,
    max_price,
    size
  );
  const categoryExist = decodeURI(category).split("|");

  return (
    <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
      <Filter dict={dict} categoryExist={categoryExist} />
      <div className="col-span-3">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard
              key={toString(product._id)}
              product={product}
              dict={dict}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
