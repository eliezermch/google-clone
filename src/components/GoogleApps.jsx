import React from "react";
import "../css/googleapps.css";
import "../css/nav.css";

const fotoEliezer = `${process.env.PUBLIC_URL}/assets/FotoDeEliezer.jpg`;
const playStoreImg = `${process.env.PUBLIC_URL}/assets/play-store-icon-2-300x300.png`;
const gmailImg = `${process.env.PUBLIC_URL}/assets/gmail_new_logo_icon_159149.png`;
const meetImg = `${process.env.PUBLIC_URL}/assets/meet.svg.png`;
const youtubeImg = `${process.env.PUBLIC_URL}/assets/youtube.png`;
const googleNewsImg = `${process.env.PUBLIC_URL}/assets/Google_News_icon.svg.png`;

const GoogleApps = () => {
  return (
    <div className="apps_container grid">
      <span className="apps_container-span">
        <img className="apps_container-img-account" src={fotoEliezer} alt="" />
        Account
      </span>
      <span className="apps_container-span">
        <img className="apps_container-img" src={playStoreImg} alt="" />
        Play
      </span>
      <span className="apps_container-span">
        <img className="apps_container-img" src={gmailImg} alt="" />
        Gmail
      </span>
      <span className="apps_container-span">
        <img className="apps_container-img" src={meetImg} alt="" />
        Maps
      </span>
      <span className="apps_container-span">
        <img className="apps_container-img" src={youtubeImg} alt="" />
        YouTube
      </span>
      <span className="apps_container-span">
        <img className="apps_container-img" src={googleNewsImg} alt="" />
        News
      </span>
    </div>
  );
};

export { GoogleApps };
