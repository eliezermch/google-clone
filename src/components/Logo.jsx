import React from "react";

function Logo({ image, page }) {
  return (
    <section className="main-logo_image">
      <img src={image} alt="logo de google" />
      {page === "image" && <p>images</p>}
    </section>
  );
}

export default Logo;
