import React from "react";
import BasicCard from "./BasicCard";
import ProductCard from "./ProductCard";
import CardWithImage from "./CardWithImage";
import HorizontalCard from "./HorizontalCard";
import ProfileCard from "./ProfileCard";
import BlogCard from "./BlogCard ";
import RecipeReviewCard from "./RecipeReviewCard";
import PricingCards from "./PricingCards";

const CardsApp = () => {
  return (
    <>
      {/* Ex1: Basic Card : Card with no image */}
      {/* <BasicCard /> */}
      {/* Ex2: Card with Image */}
      {/* <CardWithImage /> */}
      {/* Ex3: Horizontal Card  */}
      {/* <HorizontalCard /> */}
      {/* Ex4: A Product Card */}
      {/* <ProductCard /> */}
      {/* Ex5: Profile Card  */}
      {/* <ProfileCard /> */}
      {/* Ex6: Blog Card */}
      {/* <BlogCard /> */}
      {/* Ex7: Expandable card */}
      {/* <RecipeReviewCard /> */}
      {/* Ex8: Pricing Cards */}
      <PricingCards />
    </>
  );
};

export default CardsApp;
