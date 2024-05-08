import "./VolunteerLabel.css";

const VolunteerLabel = () => {
  return (
    <section className="volunteer-label">
      <header className="frame-parent20">
        <div className="image-3-parent2">
          <img
            className="image-3-icon4"
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
          <div className="camp-description-label">
            <h3 className="calvary-summer-camp9">Calvary Summer Camp</h3>
          </div>
        </div>
        <div className="register-button2">
          <div className="program-title-label-parent">
            <div className="program-title-label">
              <div className="email-address-label-parent">
                {/* <div className="email-address-label"> */}
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/program">Program</a>
                <a href="/volunteer">Volunteer</a>
                <a href="/contact">Contact</a>
                {/* <div className="home5">Home</div> */}
                {/* </div> */}
                {/* <div className="email-address-label1"> */}
                {/* <div className="about5">About</div> */}
                {/* </div> */}
                {/* <div className="program5">Program</div> */}
                {/* <b className="volunteer5">Volunteer</b> */}
                {/* <div className="contact5">Contact</div> */}
              </div>
            </div>
            <button className="register-frame">
              <div className="register4">Register</div>
            </button>
          </div>
        </div>
      </header>
      <div className="image-8-parent1">
        <div className="image-83" />
        <button className="contact-us-wrapper1">
          <b className="contact-us7">Volunteer</b>
        </button>
      </div>
    </section>
  );
};

export default VolunteerLabel;
