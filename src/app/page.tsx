import FeaturedItems from "@/components/FeaturedItems";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Slider/>
      <FeaturedItems/>
      <Offer/>
    </main>
  );
}
