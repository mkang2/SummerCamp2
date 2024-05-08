import NavBar from "../components/NavBar";
import VisionHome from "../components/VisionHome";
import ProgramHome from "../components/ProgramHome";
import VolunteerHome from "../components/VolunteerHome";
import BottomBar from "../components/BottomBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <section className="learn-more-button-wrapper">
        <div className="learn-more-button">
          <img className="image-1-icon" alt="" src="/GroupPic.png" />
          <div className="dates-and-prices-component">
            <h1 className="calvary-summer-camp">Calvary summer camp 2024</h1>
          </div>
        </div>
      </section>
      <VisionHome />
      <ProgramHome />
      <VolunteerHome />
      <BottomBar />
    </div>
  );
};

export default Home;
