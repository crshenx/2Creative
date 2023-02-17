import React, { forwardRef, useImperativeHandle, useRef } from "react";
import "../css/Testimonials.css";

const testimonials = [
  {
    text: `Alisha always made time to help us troubleshoot challenges along the
way. Her positive energy and spirit helped us focus on what was
important. Alisha communicated with our venue, and advocated for
what we wanted in our wedding. She was incredibly thorough and
thoughtful in helping us shape and make our dream wedding become a
reality!`,
    footer: `Lauren Q. // Full Service Planning 2021`,
  },
  {
    text: `We absolutely recommend Alisha and her services; we could not have
successfully held our wedding without her. Alisha is patient,
attentive, and proactive. She is capable of taking the lead on
projects and planning, and served as an instrumental point of
contact for our venue and for our vendors. More importantly, Alisha
spent time to connect with us and our families, and prioritized what
was important to us. She was there to help with every challenge that
we encountered and we are grateful to have worked with her.`,
    footer: `Casey G. // Full Service Planning 2021`,
  },
  {
    text: ` It was so great meeting and working with you! Your services are SO
needed. Going forward with brides I meet at previews I’m 100% going
to tell them about you. Everyone needs you, the vendors and the
clients. You were so professional and kind and patient and what a
dream support. I’ll share with my clients!`,
    footer: `Tanya // CEO Page Beauty // Bridal Concierge Co-Vendor`,
  },
];

const Testimonials = forwardRef((props, ref) => {
  const testimonialsRef = useRef(null);
  useImperativeHandle(
    ref,
    () => ({
      scrollIntoView: () => {
        testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
      },
    }),
    []
  );
  const testimonialList = testimonials.map((testi, i) => {
    return (
      <div key={i} className={`testimonial__wrapper testimonial__${i}`}>
        <div className="testimonial__text">{testi.text}</div>
        <div className="testimonial__footer">
          <div className="testimonial__footer-client">{testi.footer}</div>
        </div>
      </div>
    );
  });
  return (
    <div ref={testimonialsRef} className="testimonial">
      <div className="testimonial__title">testimonials</div>
      <div className="testimonial__container">{testimonialList}</div>
    </div>
  );
});

export default Testimonials;
