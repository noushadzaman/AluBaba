import { auth } from "@/auth";
import AccountCard from "@/components/account/AccountCard";
import { getUserByEmail } from "@/database/queries";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const user = await getUserByEmail(session?.user?.email);

  return (
    <div class="container  items-start gap-6 pt-4 pb-16">
      <div class=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
        <AccountCard
          user={user}
          title={"Personal Profile"}
          firstPara={user?.name}
          secondPara={user?.email}
          thirdPara={user?.phone_number}
        />
        <AccountCard
          user={user}
          title={"Shipping address"}
          firstPara={user?.name}
          secondPara={user?.shipping_address}
          thirdPara={user?.shipping_address_number}
        />
        <AccountCard
          user={user}
          title={"Billing address"}
          firstPara={user?.name}
          secondPara={user?.billing_address}
          thirdPara={user?.billing_address_number}
        />
      </div>
    </div>
  );
}
