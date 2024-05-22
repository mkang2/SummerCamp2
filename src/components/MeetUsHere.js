import "./MeetUsHere.css";

const MeetUsHere = () => {
  return (
    <section className="meet-us-label-wrapper">
      <div className="meet-us-label">
        <div className="image-4-parent">
          <img className="image-4-icon" alt="" src="/image-4@2x.png" />
          <img className="image-5-icon" alt="" src="/image-5@2x.png" />
        </div>
        <div className="looking-to-serve-label">
          <div className="meet-us-here-label-parent">
            <div className="meet-us-here-label">
              <h2 className="meet-us-here">Meet Us Here!</h2>
            </div>
            <div className="if-you-are-looking-for-a-way-t-parent">
              <div className="if-you-are-container">
                <p className="if-you-are">{`If you are looking for a way to serve God while having the most amazing summer experience, please fill out the registration form below! `}</p>
                <p className="blank-line5">&nbsp;</p>
                <p className="make-sure-to">
                  *Make sure to apply as a volunteer
                </p>
              </div>
              <div className="instance-container">
                <a
                  href="https://docs.google.com/document/d/12ENpocNVzE1hWJo8EiXFpKg1PMGui46Z/edit?usp=sharing&ouid=108619811667458028511&rtpof=true&sd=true"
                  target="_blank"
                >
                  <button className="learn-more-wrapper1">
                    <b className="learn-more4">Apply Today!</b>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetUsHere;
