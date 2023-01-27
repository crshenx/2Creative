import React from "react";
import "../css/Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonial">
      <div className="testimonial__title">testimonials</div>
      <div className="testimonial__container">
        {/* <div className="testimonial__opening-qotation qotation">"</div> */}
        <div className="testimonial__text">
          Alisha always made time to help us troubleshoot challenges along the
          way. Her positive energy and spirit helped us focus on what was
          important. Alisha communicated with our venue, and advocated for what
          we wanted in our wedding. She was incredibly thorough and thoughtful
          in helping us shape and make our dream wedding become a reality!
        </div>
        <div className="testimonial__footer">
          <div className="testimonial__footer-client">
            Lauren Q. // Full Service Planning 2021
          </div>
        </div>
        {/* <div className="testimonial__closing-qotation qotation">"</div> */}
      </div>
    </div>
  );
}

export default Testimonials;
