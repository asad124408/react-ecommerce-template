import React from "react";
import TopCategory from "../components/Category/TopCategory";
import Header from "../components/Header/Header";
import Homebanner from "../components/Home-Banner/Homebanner";

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
      {/* Promoted Product Area */}
      {/* Best Category Products sold Last Month */}
      {/* New Arrivals Products */}
      {/* Contact Section */}
    </div>
  );
}

export default Homepage;
