import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import BannerSection from "./sections/banner/banner";
import ProductsSection from "./sections/products/products";
import TasteSection from "./sections/taste/taste";
import AboutSection from "./sections/about/about";
import ReviewsSection from "./sections/reviews/reviews";

const HomeScreen = ({reviews}) => {
  return (
    <main>
      <BannerSection />
      <AboutSection />
      <ProductsSection />
      <ReviewsSection reviews={reviews}/>
      <TasteSection />
    </main>
  );
};

export default HomeScreen;
