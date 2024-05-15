import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="frame-parent15">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5331370115346!2d-74.4213562883733!3d40.419192171320105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c577e0c24179%3A0x29995c444322d64f!2s572%20Ryders%20Ln%2C%20East%20Brunswick%2C%20NJ%2008816!5e0!3m2!1sen!2sus!4v1715816873808!5m2!1sen!2sus"
        width="500"
        height="350"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <img className="frame-child3" loading="lazy" alt="" src="/Suitcase.png" /> */}
      <i className="address-572-ryders">
        Address: 572 Ryders Lane, East Brunswick, NJ 08816
      </i>
      <div className="calvary-k-u-m-c-instance-parent">
        <div className="calvary-k-u-m-c-instance">
          <h2 className="contact-us4">Contact Us!</h2>
        </div>
        <div className="frame-parent16">
          <div className="got-questions-or-need-assistan-wrapper">
            <div className="got-questions-or">
              Got questions or need assistance? Reach out to us today. We're
              here to help make your summer camp experience unforgettable!
            </div>
          </div>
          <div className="contact-info-set-parent">
            <div className="contact-info-set">
              <img
                className="fluentcall-20-filled-icon1"
                loading="lazy"
                alt=""
                src="/TelephoneIcon.svg"
              />
              <div className="div1">(917) 282-5706 ; (908) 930-6483</div>
            </div>
            <div className="loanme">
              <img
                className="dashiconsemail1"
                loading="lazy"
                alt=""
                src="/EmailIcon.svg"
              />
              <div className="calvarykumcsummercampgmailc1">
                calvarykumc.summercamp@gmail.com
              </div>
            </div>
            <div className="phone-number">
              <img
                className="mdiaddress-marker-icon1"
                loading="lazy"
                alt=""
                src="/LocationIcon.svg"
              />
              <div className="ryders-lane-east1">
                572 Ryders Lane, East Brunswick, NJ 08816
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
