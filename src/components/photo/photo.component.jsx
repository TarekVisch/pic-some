import React from "react";

import "./photo.styles.scss";

function Photo({ className, img }) {
  return (
    <div className={`image__container image__container${className}`}>
      <img src={img.url} alt={img.alt} className="image__item" />
    </div>
  );
}

export default Photo;
