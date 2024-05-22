import { auth } from "@/auth";
import CartList from "@/components/cartlist/CartList";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container gap-6 pt-4 pb-16">
      <CartList />
    </div>
  );
}
