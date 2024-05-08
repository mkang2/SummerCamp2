import "./BottomBar.css";

const BottomBar = () => {
  return (
    <footer className="frame-footer">
      <div className="image-2-parent">
        <img
          className="image-2-icon"
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
        <div className="calvary-logo">
          <b className="calvary-summer-camp5">Calvary Summer Camp</b>
        </div>
        <div className="calvary-kumc-all">
          @ 2024 Calvary KUMC. All rights reserved
        </div>
      </div>
      <div className="frame-wrapper2">
        <div className="contact-us-parent">
          <div className="contact-us2">Contact Us</div>
          <div className="location-details-parent">
            <div className="location-details">
              <img
                className="fluentcall-20-filled-icon"
                loading="lazy"
                alt=""
                src="/fluentcall20filled.svg"
              />
              <div className="div">(917) 282-5706 ; (908) 930-6483</div>
            </div>
            <div className="email-address">
              <img
                className="dashiconsemail"
                loading="lazy"
                alt=""
                src="/dashiconsemail.svg"
              />
              <div className="calvarykumcsummercampgmailc">
                calvarykumc.summercamp@gmail.com
              </div>
            </div>
            <div className="email-address1">
              <img
                className="mdiaddress-marker-icon"
                loading="lazy"
                alt=""
                src="/mdiaddressmarker.svg"
              />
              <div className="ryders-lane-east">
                572 Ryders Lane, East Brunswick, NJ 08816
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BottomBar;
