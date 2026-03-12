import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Cook from "@/components/Home/Cook";
import Expert from "@/components/Home/Expert";
import Gallery from "@/components/Home/Gallery";
 import Review from "@/components/Home/Review/page";
import Contact from "@/components/Home/Contact/page";
import Newsletter from "@/components/Home/Newsletter";
import MenuList from "@/components/Home/Menu/Menulist";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Kitchen",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Cook />
      <Expert />
      <Gallery />
       <MenuList />
      <Review/>
      <Contact/>
      <Newsletter />
    </main>
  );
}

// import MenuList from "@/components/Menu/MenuList";

// export default function MenuPage() {
//   return (
//     <div className="container mx-auto py-10">
//       <MenuList />
//     </div>
//   );
// }