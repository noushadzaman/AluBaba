import { auth } from "@/auth";
import ProductCardTwo from "@/components/ProductCardTwo";
import WishlistCard from "@/components/wishlist/WishlistCard";
import { getUserByEmail } from "@/database/queries";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const user = await getUserByEmail(session?.user?.email);
  const cartItems = user?.cart_items;

  return (
    <div class="container gap-6 pt-4 pb-16">
      <div class="mx-auto space-y-4 max-w-6xl">
        {cartItems &&
          cartItems.map((item) => <ProductCardTwo key={item} item={item} />)}
        {!cartItems && <p>No items in the cart</p>}
      </div>
    </div>
  );
}
