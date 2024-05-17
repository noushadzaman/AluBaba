import Ads from "@/components/home/Ads";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Features from "@/components/home/Features";
import NewArrival from "@/components/home/NewArrival";
import TrendingProducts from "@/components/home/TrendingProducts";

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <NewArrival />
      <Ads />
      <TrendingProducts />
    </>
  );
}
