import { auth } from "@/auth";
import ProductCardTwo from "@/components/ProductCardTwo";
import Wishlist from "@/components/wishlist/Wishlist";
import { getUserByEmail } from "@/database/queries";
import { redirect } from "next/navigation";
import React from "react";

export default async function WishListPage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  // const user = await getUserByEmail(session?.user?.email);
  // const wishlist = user?.wishlist;

  return (
    <div className="container gap-6 pt-4 pb-16">
      <Wishlist />
    </div>
  );
}
