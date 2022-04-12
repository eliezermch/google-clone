import React from "react";
import { Header } from "../containers/Header";
import { Main } from "../containers/Main";
import { FooterImage } from "../containers/FooterImage";
import "../css/images.css";

const Images = () => {
  return (
    <div className="images-viewport">
      <Header />
      <Main />
      <FooterImage />
    </div>
  );
};

export default Images;
