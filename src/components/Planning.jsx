import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import PlanningBanner from "../assets/PlanningBanner.jpg";
import "../css/Planning.css";
import PlanningButtons from "./PlanningButtons";

const planningContent = [
  {
    title: `Welcome`,
    class: `welcome`,
    text: `It would be my honor to collaborate with you to make your dream
day a reality! I offer different levels and options of my
planning guidance to allow you to choose what best fits your
needs. Take a look at the brief descriptions below and choose
what's right for you!`,
  },
  {
    title: `A La Carte`,
    class: `carte`,
    text: ` A La Carte services allow you to pick and choose where you need
bursts of assistance from a professional. Each service is priced
individually.PERFECT for mini events as well!`,
  },
  {
    title: `Month of`,
    class: `month`,
    text: `  Month OF" Coordination is best for the couple who handled it all
and now just wants to sit back and enjoy the ride. I run the show
the final month before the event all the way through the end of
the big day!`,
  },
  {
    title: `Full Service`,
    class: `service`,
    text: `With full service planning, I will help you with everything from
the wording on your invitations and full event design, to our
final goodbye at the end of your best day ever!`,
  },
];

const Planning = forwardRef((props, ref) => {
  const [buttonActive, setButtonActive] = useState(0);
  const eventRef = useRef(null);
  useImperativeHandle(
    ref,
    () => ({
      scrollIntoView: () => {
        eventRef.current.scrollIntoView({ behavior: "smooth" });
      },
    }),
    []
  );
  const planningList = planningContent.map((plan, i) => {
    return (
      <div
        key={i}
        className={
          buttonActive === i
            ? ` active ${plan.class}`
            : `inactive ${plan.class}`
        }
      >
        <div
          className={`text-title planning-content__text-title-${plan.class}`}
        >
          {plan.title}
        </div>
        <div className={`${plan.class}-text plannin__text`}>{plan.text}</div>
      </div>
    );
  });

  function buttonClick(i) {
    setButtonActive(i);
  }

  console.log(buttonActive);

  const buttonList = planningContent.map((plan, i) => {
    return (
      <div key={i} className={`btn ${i}`} onClick={() => buttonClick(i)}>
        <span>{plan.title}</span>
      </div>
    );
  });

  return (
    <div className="planning" ref={eventRef}>
      <div className="planning__divider-quote">
        It would be my honor to collaborate with you to make your dream day a
        reality! Take a look at the brief descriptions below and choose what's
        right for you!
      </div>
      <div className="planning__pic-text-wrapper">
        <div className="planning__content-not-background">
          <div className="planning__pic-title">
            <div className="planning-title-container">
              <div className="planning-title-event">event</div>
              <div className="planning-title-planning">planning</div>
            </div>
            <div className="planning_banner-container">
              <img src={PlanningBanner} className="planning-banner" />
            </div>
          </div>
          <div className="planning-content-container">
            <PlanningButtons buttonList={buttonList} />
            <div className="planning-content__text-container">
              {planningList}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Planning;
