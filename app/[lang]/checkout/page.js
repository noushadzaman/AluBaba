import CheckOutPage from "@/components/checkout/CheckOutPage";
import { getDictionary } from "../dictionaries";

export default async function CheckoutPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
      <CheckOutPage dict={dict} />
    </div>
  );
}
