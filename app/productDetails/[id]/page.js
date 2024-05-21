import Description from "@/components/productDetails/Description";
import ProductGallery from "@/components/productDetails/ProductGallery";
import ProductInfo from "@/components/productDetails/ProductInfo";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import { getProductById } from "@/database/queries";

export default async function page({ params: { id } }) {
  const product = await getProductById(id);

  return (
    <>
      <div className="container grid grid-cols-2 gap-6">
        <ProductGallery gallery={product?.images} />
        <ProductInfo product={product}/>
      </div>
      <Description description={product?.detailed_description} />
      <RelatedProducts />
    </>
  );
}
