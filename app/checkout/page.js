import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  
  return (
    <div class="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
      <CheckoutForm />
      <OrderSummary />
    </div>
  );
}
