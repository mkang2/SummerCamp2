import AboutHero from "../components/AboutHero";
import VisionDirector from "../components/VisionDirector";
import FrameComponent10 from "../components/FrameComponent10";
import "./About.css";
import BottomBar from "../components/BottomBar";

const About = () => {
  return (
    <div className="about">
      <AboutHero />
      <section className="calvary-summer-camp-is-a-place-wrapper">
        <div className="calvary-summer-camp-container">
          <p className="calvary-summer-camp1">
            <br></br>
            Calvary Summer Camp is a place where your child can come to
            strengthen their mathematical and language arts skills and cultivate
            relationships with one another in a Christian environment. We have a
            dedicated team of young professionals who are adept at fostering
            academic growth while nurturing meaningful relationships among
            campers.
          </p>
          <p className="blank-line">&nbsp;</p>
          <p className="we-look-forward">
            We look forward to working with your child during this fun-filled
            summer with learning, games, arts and crafts, science, and field
            trips. Hope to see you there! 
          </p>
        </div>
      </section>
      <section className="frame-parent">
        <div className="frame-child" />
        {/* <img
          className="frame-item"
          loading="lazy"
          alt=""
          src="/frame-370@2x.png"
        /> */}
      </section>
      <section className="about-inner">
        <VisionDirector />
      </section>
      <BottomBar></BottomBar>
      {/* <FrameComponent10></FrameComponent10> */}
    </div>
  );
};

export default About;
