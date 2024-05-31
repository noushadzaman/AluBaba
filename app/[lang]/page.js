import Ads from "@/components/home/Ads";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Features from "@/components/home/Features";
import NewArrival from "@/components/home/NewArrival";
import TrendingProducts from "@/components/home/TrendingProducts";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <Banner dict={dict} />
      <Features dict={dict} />
      <Categories dict={dict} />
      <NewArrival dict={dict} />
      <Ads dict={dict} />
      <TrendingProducts dict={dict} />
    </>
  );
}
