import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="frame-header">
      <div className="image-3-container">
        <img
          className="image-3-icon2"
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
        <div className="calvary-summer-camp-frame">
          <h3 className="calvary-summer-camp4">Calvary Summer Camp</h3>
        </div>
      </div>
      <div className="register-button">
        <div className="frame-parent5">
          <nav className="home-about-program-wrapper">
            <nav className="home-about-program">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/program">Program</a>
              <a href="/volunteer">Volunteer</a>
              <a href="/contact">Contact</a>
            </nav>
          </nav>
          <button className="camp-image-container">
            <div className="register2">Register</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
