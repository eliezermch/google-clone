import React from "react";
import "../css/search.css";
import "../css/searchimagecard.css";

const search = `${process.env.PUBLIC_URL}/assets/search.svg`;
const micro = `${process.env.PUBLIC_URL}/assets/googlemic_color_24dp.png`;
const camara = `${process.env.PUBLIC_URL}/assets/icons8-camara.png`;
const close = `${process.env.PUBLIC_URL}/assets/close.png`;

function Search(props) {
  const { page } = props;

  const [state, setState] = React.useState({
    searchImageCard: false,
    searchImage: true,
  });

  let placeHolder;
  if (page === "default") {
    placeHolder = "Search Google or type a URL";
  } else {
    placeHolder = "";
  }

  if (!!state.searchImage) {
    return (
      <div className={`${page} main-search`}>
        <section className="main-input-container">
          <img className="search-icon" src={search} alt="" />
          <input type="text" placeholder={placeHolder} />

          {page === "image" && (
            <button
              className="search-camara-button_image"
              onClick={() => {
                setState({
                  ...state,
                  searchImage: false,
                  searchImageCard: true,
                });
              }}
            >
              <img className="search-camara-icon_image" src={camara} alt="" />
            </button>
          )}

          <a href="/">
            <img className="micro-icon" src={micro} alt="" />
          </a>
        </section>
      </div>
    );
  } else if (!!state.searchImageCard) {
    return (
      <div>
        <div className="image-card-container">
          <section className="image-card-container_search">
            <div className="image-card-section1_search">
              <p>Search by image</p>
              <img
                className="image-card-section1_search_img"
                src={close}
                alt=""
                onClick={() => {
                  setState({
                    ...state,
                    searchImage: true,
                    searchImageCard: false,
                  });
                }}
              />
            </div>
            <p className="image-card-section1_search_text">
              Search Google with an image instead of text. Try dragging an image
              here.
            </p>
          </section>
          <section className="image-card-container_span">
            <div className="image-card-container-section2_span">
              <span>Paste image URL</span>
              <span>Upload an image</span>
            </div>
          </section>
          <section className="image-card-container_input">
            <div className="image-card-section3_input">
              <input className="section3_input_text" type="text" />
              <input
                className="section3_input_submit"
                type="submit"
                value={"Search by image"}
              />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export { Search };
