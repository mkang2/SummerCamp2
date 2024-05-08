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
                <p className="if-you-are">{`If you are looking for a way to serve God while having the most amazing summer experience, please fill out the Registration form below! `}</p>
                <p className="blank-line5">&nbsp;</p>
                <p className="make-sure-to">
                  *Make sure to apply as a volunteer
                </p>
              </div>
              <div className="instance-container">
                <button className="learn-more-wrapper1">
                  <b className="learn-more4">Apply Today!</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetUsHere;
