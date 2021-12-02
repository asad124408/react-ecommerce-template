import React from "react";
import TopCategory from "../components/Category/TopCategory";
import FeaturedProducts from "../components/Featured-Products/FeaturedProducts";
import Header from "../components/Header/Header";
import Homebanner from "../components/Home-Banner/Homebanner";
import RandomCategory from "../components/Random-Category-Summary/RandomCategory";

function Homepage() {
  return (
    <div className="">
      {/* Header Section */}
      <Header />
      {/* Home Banner */}
      <Homebanner />
      {/* Top Category */}
      <TopCategory />
      {/* Featured Products */}
      <FeaturedProducts />
      {/* Random Category 2/3 */}
      <RandomCategory />
      <RandomCategory />
      {/* Promoted Product Area */}
      {/* Best Category Products sold Last Month */}
      {/* New Arrivals Products */}
      {/* Contact Section */}
    </div>
  );
}

export default Homepage;
