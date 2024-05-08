import OurProgram from "./OurProgram";
import "./ProgramHome.css";

const ProgramHome = () => {
  return (
    <section className="home-child">
      <div className="frame-parent7">
        <img
          className="frame-child1"
          loading="lazy"
          alt=""
          src="/frame-5@2x.png"
        />
        <div className="volunteer-application-form-wrapper">
          <div className="volunteer-application-form">
            <div className="frame-parent8">
              <div className="explore-the-adventure-awaiting-wrapper">
                <div className="explore-the-adventure">
                  Explore the adventure awaiting in our program! From thrilling
                  activities to meaningful moments, discover how our summer camp
                  experience will inspire, challenge, and empower you.
                </div>
              </div>
              <OurProgram />
            </div>
            <div className="volunteer-application-form-inner">
              <a href="/program">
                <button className="learn-more-frame">
                  <b className="learn-more2">Learn More</b>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHome;
