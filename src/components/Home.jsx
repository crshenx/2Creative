import React from "react";
import "../css/Home.css";
import AboutMe from "./AboutMe";
import BridalConcierge from "./BridalConcierge";
import Planning from "./Planning";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <AboutMe />
      <BridalConcierge />
      <Planning />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
