import ContactUs from "../components/ContactUs";
import FrameComponent8 from "../components/FrameComponent8";
import "./Contact.css";
import NavBar from "../components/NavBar";
import BottomBar from "../components/BottomBar";

const Contact = () => {
  return (
    <div className="contact">
      <section className="instance-parent">
        <NavBar></NavBar>
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
      <BottomBar></BottomBar>
    </div>
  );
};

export default Contact;
