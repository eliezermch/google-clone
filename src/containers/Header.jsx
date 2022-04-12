import React from "react";
import { useLocation } from "react-router-dom";
import { Nav } from "../components/Nav";
import "../css/header.css";

const Header = () => {
  const location = useLocation();
  let page;

  switch (location.pathname) {
    case "/":
      page = "default";
      break;

    case "/images":
      page = "image";
      break;

    default:
      break;
  }
  let logo;
  if (page !== "default") {
    logo = `${process.env.PUBLIC_URL}/assets/menu_icon_black.png`;
  } else {
    logo = `${process.env.PUBLIC_URL}/assets/menu.png`;
  }

  return (
    <header>
      <Nav page={page} logo={logo} />
    </header>
  );
};

export { Header };
