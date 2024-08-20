import Description from "@/components/productDetails/Description";
import ProductGallery from "@/components/productDetails/ProductGallery";
import ProductInfo from "@/components/productDetails/ProductInfo";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import { getProductById } from "@/database/queries";
import { dbConnect } from "@/service/mongo";
import { getDictionary } from "../../dictionaries";

export async function generateMetadata({ params: { id } }) {
  await dbConnect();
  const product = await getProductById(id);

  return {
    title: `AluBaba - ${product?.name}`,
    description: `${product?.short_description}`,
    openGraph: {
      images: [product?.thumbnail],
    },
  };
}

export default async function page({ params: { id, lang } }) {
  const product = await getProductById(id);
  const dict = await getDictionary(lang);

  return (
    <>
      <div className="container grid grid-cols-2 gap-6">
        <ProductGallery
          gallery={[product?.thumbnail, ...product?.images]}
          dict={dict}
        />
        <ProductInfo product={product} dict={dict} />
      </div>
      <Description description={product?.description} dict={dict} />
      <RelatedProducts category={product?.category} dict={dict} />
    </>
  );
}
