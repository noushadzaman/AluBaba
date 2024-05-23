import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import CopyRight from "@/components/CopyRight";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import { dbConnect } from "@/service/mongo";
import WishlistProvider from "@/providers/WishListProvider";
import { auth } from "@/auth";
import { getUserByEmail } from "@/database/queries";
import CartProvider from "@/providers/CartProvider";
import UserProvider from "@/providers/UserProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  const session = await auth();
  const user = await getUserByEmail(session?.user?.email);

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider dbUser={user}>
          <WishlistProvider dbWishList={user?.wishlist}>
            <CartProvider dbCart={user?.cart_items}>
              <Header />
              <Nav />
              <div style={{ minHeight: `calc(100vh - 583.42px)` }}>
                {children}
              </div>
              <Footer />
              <CopyRight />
            </CartProvider>
          </WishlistProvider>
        </UserProvider>
      </body>
    </html>
  );
}
