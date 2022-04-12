import React from "react";
import "../css/nav.css";
import { GoogleApps } from "./GoogleApps";
import { Account } from "./Account";

const fotoEliezer = `${process.env.PUBLIC_URL}/assets/FotoDeEliezer.jpg`;

const Nav = (props) => {
  const [toggleApps, setToggleApps] = React.useState(false);
  const handleToggleApps = () => {
    setToggleApps(!toggleApps);
    if (toggleAccount) {
      setToggleAccount(false);
    }
  };

  const [toggleAccount, setToggleAccount] = React.useState(false);
  const handleToggleAccount = () => {
    setToggleAccount(!toggleAccount);
    if (toggleApps) {
      setToggleApps(false);
    }
  };

  return (
    <nav className={`${props.page} nav-container`}>
      <ul className="list-nav">
        {props.page === "default" && (
          <>
            <li>
              <a href="https://mail.google.com/"> Gmail</a>
            </li>
            <li>
              <a href="/images"> Images</a>
            </li>
          </>
        )}
        <li>
          <button className="menu-button-icon" onClick={handleToggleApps}>
            <img className="menu-icon" src={props.logo} alt="" />
          </button>
        </li>
        {props.page !== "default" && (
          <li>
            <button className="menu-button-icon-signin_images">Sign In</button>
          </li>
        )}
        {props.page === "default" && (
          <li>
            <button className="menu-button-icon" onClick={handleToggleAccount}>
              <img src={fotoEliezer} alt="" />
            </button>
          </li>
        )}
      </ul>
      {toggleApps && <GoogleApps />}
      {toggleAccount && <Account />}
    </nav>
  );
};

export { Nav };
