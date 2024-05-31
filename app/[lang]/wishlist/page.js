import { auth } from "@/auth";
import Wishlist from "@/components/wishlist/Wishlist";
import { redirect } from "next/navigation";
import React from "react";
import { getDictionary } from "../dictionaries";

export default async function WishListPage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container gap-6 pt-4 pb-16">
      <Wishlist dict={dict} />
    </div>
  );
}
