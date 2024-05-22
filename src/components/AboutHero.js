import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="instance-group">
      <header className="frame-parent10">
        <div className="image-3-parent1">
          <img
            className="image-3-icon3"
            loading="lazy"
            alt=""
            src="/Logo.png"
          />
          <div className="calvary-summer-camp-wrapper1">
            <h3 className="calvary-summer-camp6">Calvary Summer Camp</h3>
          </div>
        </div>
        <div className="frame-wrapper3">
          <div className="home-program-box-parent">
            <nav className="home-program-box">
              <nav className="home-container">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/program">Program</a>
                <a href="/volunteer">Volunteer</a>
                <a href="/contact">Contact</a>
              </nav>
            </nav>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfLalY5hj0OM9tmiKdXrSOY0ltDpwPwAGk6dgxKQX1ka7_uzA/viewform"
              target="_blank"
            >
              <button className="register-button1">
                <div className="register3">Register</div>
              </button>
            </a>
          </div>
        </div>
      </header>
      <div className="image-8-container">
        <div className="image-82" />
        <button className="contact-us-frame">
          <b className="contact-us3">About</b>
        </button>
      </div>
    </section>
  );
};

export default AboutHero;
