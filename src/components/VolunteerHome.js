import "./VolunteerHome.css";

const VolunteerHome = () => {
  return (
    <section className="frame-section">
      <div className="frame-parent9">
        <div className="frame-wrapper1">
          <div className="become-a-volunteer-parent">
            <h2 className="become-a-volunteer">Become a Volunteer</h2>
            <div className="ready-to-make-a-difference-jo-wrapper">
              <div className="ready-to-make">
                Ready to make a difference? Join us as a volunteer and help
                create unforgettable summer memories for our campers! Click here
                to learn more and get involved.
              </div>
            </div>
            <div className="instance-wrapper">
              <a href="/volunteer">
                <button className="frame-button">
                  <b className="learn-more3">See Requirements</b>
                </button>
              </a>
            </div>
          </div>
        </div>
        <img
          className="frame-child2"
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
      </div>
    </section>
  );
};

export default VolunteerHome;
