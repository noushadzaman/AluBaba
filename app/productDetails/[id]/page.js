import Description from "@/components/productDetails/Description";
import ProductGallery from "@/components/productDetails/ProductGallery";
import ProductInfo from "@/components/productDetails/ProductInfo";
import RelatedProducts from "@/components/productDetails/RelatedProducts";

export default function page() {
  return (
    <>
      <div class="container grid grid-cols-2 gap-6">
        <ProductGallery />
        <ProductInfo />
      </div>
      <Description />
      <RelatedProducts />
    </>
  );
}
