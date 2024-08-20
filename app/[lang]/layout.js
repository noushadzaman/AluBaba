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
import { getDictionary } from "./dictionaries";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AluBaba - Home",
  description: "Your only online shop.",
};

export default async function RootLayout({ children, params: { lang } }) {
  const dict = await getDictionary(lang);
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
                <Header dict={dict} />
                <Nav dict={dict} />
                <div style={{ minHeight: `calc(100vh - 583.42px)` }}>
                  {children}
                </div>
                <ToastContainer />
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
