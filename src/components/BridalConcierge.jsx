import React from "react";
import "../css/BridalConcierge.css";
import ConciergeMainPhoto from "../assets/ConciergeMainPhoto.jpg";

function BridalConcierge() {
  return (
    <div className="concierge">
      <div className="concierge__content">
        <div className="concierge__title-and-img">
          <div className="concierge__title-box1">
            <div className="concierge__title1">The Original</div>
            <div className="concierge__title2">bridal</div>
            <div className="concierge__title3">concierge</div>
          </div>
          <img src={ConciergeMainPhoto} className="ConciergeMainPhoto" />
        </div>
        <div className="concierge__text-container">
          <div className="textborder">
            <div className="concierge__text-p1">
              What would it be like for a Bride to have an event planner,
              personal assistant, suedo therapist, and walking wardrobe/personal
              comfort MacGyver by her side throughout the biggest day of her
              life. . . ?
            </div>
            <div className="concierge__text-p2">Absolutely Heavenly! </div>
            <div className="concierge__text-p3">
              Whether you are a Bride to be looking to make your day run
              emotionally smoother, or a Planner wanting a trusted liaison to
              your Client's "in-suite" dynamics throughout the day; Your luxury
              wedding day is not complete without The Original Bridal Concierge.
            </div>
            <div className="concierge__text-p4">
              Over the last decade I have worked intimately with Brides and
              their bridal parties elevating their wedding experience. I am an
              adept wedding/event professional with a background specifically in
              Bridal gown design, luxury sales and customer service, in addition
              to "Day Of" Bridal Styling. I know how a wedding day feels for
              everyone involved - from the Bride's happy nerves mixed with
              complex family dynamics, to the planners side of schedule
              management and desire to thrill!
            </div>
            <div className="concierge__text-p5">
              I act as your emotional tuning fork for the day. You can trust me
              to keep the Bride and all parties involved feeling good vibes
              only! I assist with managing the in-room schedule of hair/makeup,
              aiding the photography team and Bride with her details and family
              photos, and communicating with the lead lanners on any timeline
              fluxuations.
            </div>
            <div className="concierge__text-p6">
              All this, as well as utilizing my unique background and skill sets
              to help manage and mitigate any pesky "day of" emergencies around
              the Bride. I look forward to being part of the magic!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BridalConcierge;
