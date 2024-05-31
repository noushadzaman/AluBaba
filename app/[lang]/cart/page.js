import { auth } from "@/auth";
import CartList from "@/components/cartlist/CartList";
import { redirect } from "next/navigation";
import { getDictionary } from "../dictionaries";

export default async function page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container gap-6 pt-4 pb-16">
      <CartList dict={dict} />
    </div>
  );
}
