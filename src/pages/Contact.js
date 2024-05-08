import ContactUs from "../components/ContactUs";
import FrameComponent8 from "../components/FrameComponent8";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <section className="instance-parent">
        <header className="frame-group">
          <div className="image-3-parent">
            <img
              className="image-3-icon"
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
            />
            <div className="calvary-summer-camp-wrapper">
              <h3 className="calvary-summer-camp2">Calvary Summer Camp</h3>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="calvary-summer-camp-instance-parent">
              <nav className="calvary-summer-camp-instance">
                <nav className="home-parent">
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/program">Program</a>
                  <a href="/volunteer">Volunteer</a>
                  <a href="/contact">Contact</a>
                </nav>
              </nav>
              <button className="register-wrapper">
                <div className="register">Register</div>
              </button>
            </div>
          </div>
        </header>
        <div className="image-8-parent">
          <div className="image-8" />
          <button className="contact-us-wrapper">
            <b className="contact-us">Contact</b>
          </button>
        </div>
      </section>
      <section className="contact-inner">
        <ContactUs />
      </section>
      <FrameComponent8 />
    </div>
  );
};

export default Contact;
