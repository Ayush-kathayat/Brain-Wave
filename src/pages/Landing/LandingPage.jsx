import React from "react";

import Nav from "../../components/Navbar";
import Hero from "./Hero/HeroSection";
import Feat from "./Feat/FeatureSection";
import Testi from "./Testi/testi";
import Faq from "./Faq/faq";
import Footer from "./Footer/footer";

const Landing = () => {
  return (
    <div className="landing">
      <Nav isAuthenticated={false} />
      <Hero />
      <Feat />
      {/* <Testi /> */}
      <Faq />
      <Footer />
    </div>
  );
};

export default Landing;
