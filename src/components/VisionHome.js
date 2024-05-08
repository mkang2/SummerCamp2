import { memo } from "react";
import "./VisionHome.css";

const VisionHome = memo(() => {
  return (
    <section className="home-inner">
      <div className="frame-parent6">
        <div className="contact-info-container-wrapper">
          <div className="contact-info-container">
            <div className="email-icon1">
              <h2 className="our-vision">Our Vision</h2>
            </div>
            <div className="address-icon1">
              <div className="our-vision-is">
                Our vision is to provide a space for students to be academically
                and socially engaged in a fun and friendly environment. Our goal
                is to empower each child with the tools and resources they need
                to navigate the challenges of the upcoming school year with
                resilience and enthusiasm!
              </div>
            </div>
            <div className="phone-call-icon">
              <a href="/about">
                <button className="learn-more-container">
                  <b className="learn-more1">Learn More</b>
                </button>
              </a>
            </div>
          </div>
        </div>
        <img
          className="frame-icon"
          loading="lazy"
          alt=""
          src="/frame-4@2x.png"
        />
      </div>
    </section>
  );
});

export default VisionHome;
