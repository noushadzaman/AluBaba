import { Inter } from "next/font/google";
import "../globals.css";
import { auth } from "@/auth";
import { dbConnect } from "@/service/mongo";
import UserProvider from "@/providers/UserProvider";
import WishlistProvider from "@/providers/WishListProvider";
import CartProvider from "@/providers/CartProvider";
import Header from "@/components/Header";
import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { getUserByEmail } from "@/database/queries";
import LanguageProvider from "@/providers/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LWSKart - Home",
  description: "Your only online shop.",
};

export default async function RootLayout({ children, params: { lang } }) {
  await dbConnect();
  const session = await auth();
  const user = await getUserByEmail(session?.user?.email);

  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider lang={lang}>
          <UserProvider dbUser={user}>
            <WishlistProvider dbWishList={user?.wishlist}>
              <CartProvider dbCart={user?.cart_items}>
                <Header />
                <Nav lang={lang} />
                <div style={{ minHeight: `calc(100vh - 583.42px)` }}>
                  {children}
                </div>
                <Footer />
                <CopyRight />
              </CartProvider>
            </WishlistProvider>
          </UserProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
