"use client";

import FeatureSection from "@/components/Feature-section/FeatureSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import MultistepForms from "@/components/calculate_area/MultiStepForms";
import MyExpertiseServices from "@/components/expertise-services/MyExpertiseServices";
import HomeVideo from "@/components/home-video/HomeVideo";
import ReviewCard from "@/components/review/ReviewCard";
// import ScrollTopButton from "@/components/scrolltop/ScrollPage";
// import NotableBrands from "@/components/notable-brands/NotableBrands";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <MyExpertiseServices />
      <MultistepForms />
      <ReviewCard />
      {/* <NotableBrands /> */}
      <HomeVideo />
      {/* <ScrollTopButton /> */}
    </>
  );
}
