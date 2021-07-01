import React, { useState } from "react";

const NavBar = () => {
  const [HamActive, setHamActive] = useState(false);
  const hamBurgerHandler = () => {
    setHamActive(!HamActive);
  };
  return (
    <section className="NavBarSection">
      <div className="container">
        <div className="NavBarFlex">
          <div className="NavBarLogo h1-m">Maxeon</div>
          <div className="HamburgerMenu" onClick={hamBurgerHandler}>
            <div className="Hamburger" id={HamActive ? "active" : ""}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="NavBarLinks" id={HamActive ? "active" : ""}>
            <ul>
              <li>Products</li>
              <li>Features</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
