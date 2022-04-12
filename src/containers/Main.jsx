import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import { Search } from "../components/Search";
import { SearchButtons } from "../components/SearchButtons";
import "../css/main.css";

const Main = () => {
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

  console.log("Current page =>", page);

  let logo;
  if (page === "image") {
    logo = `${process.env.PUBLIC_URL}/assets/googlelogo_white.png`;
  } else {
    logo = `${process.env.PUBLIC_URL}/assets/googlelogo_color_272x92dp.png`;
  }

  return (
    <main>
      <Logo image={logo} page={page} />

      <Search page={page} />

      {page === "default" && <SearchButtons />}
    </main>
  );
};

export { Main };
