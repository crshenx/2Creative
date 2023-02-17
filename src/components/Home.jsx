import React, { useRef } from "react";
import "../css/Home.css";
import AboutMe from "./AboutMe";
import BridalConcierge from "./BridalConcierge";
import Planning from "./Planning";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  const navbarRef = useRef(null);
  const aboutRef = useRef(null);
  const bridalRef = useRef(null);
  const eventRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollTopRef = useRef(null);

  function toTop() {
    scrollTopRef.current.scrollIntoView({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="home" ref={scrollTopRef}>
      <Header
        navbarRef={navbarRef}
        aboutRef={aboutRef}
        bridalRef={bridalRef}
        eventRef={eventRef}
        testimonialsRef={testimonialsRef}
        contactRef={contactRef}
      />
      <AboutMe ref={aboutRef} />
      <BridalConcierge ref={bridalRef} />
      <Planning ref={eventRef} />
      <Testimonials ref={testimonialsRef} />
      <Footer ref={contactRef} scrollTopRef={scrollTopRef} toTop={toTop} />
    </div>
  );
}

export default Home;
