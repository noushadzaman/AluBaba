'use client';
import Image from "next/image";
import { useEffect, useState } from "react";


const ProductCardTwo = ({ item, itemId }) => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`/api/product/${itemId || item?.productId}`).then(res => res.json());
      setProduct(response);
      setLoading(false);
    }
    fetchProduct(itemId);
  }, [itemId, item]);

  if (loading) {
    return <p>loading....</p>
  }

  return (
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <Image
          width={300}
          height={300}
          src={product?.thumbnail}
          alt="product 6"
          className="w-full"
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">
          {product?.name}
        </h2>
        <p className="text-gray-500 text-sm">
          Availability: <span className="text-green-600">{product?.availability ? "In Stock" : "Out of stock"}</span>
        </p>
      </div>
      <div className="text-primary text-lg font-semibold">
        {`$`}{
          product?.discount ?
            product?.price - (product?.price * product.discount / 100)
            : product?.price
        }
      </div>
      {
        item?.number &&
        <div className="text-primary text-lg font-semibold">
          {`x${item?.number}`}
        </div>
      }
      <a
        href="#"
        className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
      >
        add to cart
      </a>

      <div className="text-gray-600 cursor-pointer hover:text-primary">
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default ProductCardTwo;







{/* <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
  <div className="w-28">
    <Image
      width={300}
      height={300}
      src="/assets/images/products/product10.jpg"
      alt="product 6"
      className="w-full"
    />
  </div>
  <div className="w-1/3">
    <h2 className="text-gray-800 text-xl font-medium uppercase">Sofa</h2>
    <p className="text-gray-500 text-sm">
      Availability: <span className="text-red-600">Out of Stock</span>
    </p>
  </div>
  <div className="text-primary text-lg font-semibold">$320.00</div>
  <a
    href="#"
    className="cursor-not-allowed px-6 py-2 text-center text-sm text-white bg-red-400 border border-red-400 rounded transition uppercase font-roboto font-medium"
  >
    add to cart
  </a>

  <div className="text-gray-600 cursor-pointer hover:text-primary">
    <i className="fa-solid fa-trash"></i>
  </div>
</div> */}
