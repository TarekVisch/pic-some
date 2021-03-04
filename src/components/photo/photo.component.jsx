import React from "react";

import "./photo.styles.scss";

function Photo({ img }) {
  return (
    <div className="image__container">
      <img src={img.url} alt={img.alt} className="image__item" />
    </div>
  );
}

export default Photo;
