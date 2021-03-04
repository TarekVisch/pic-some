import React, { useState, useContext } from "react";
import { PhotosContext } from "../../context/photosContext";

import "./photo.styles.scss";

function Photo({ img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleLike } = useContext(PhotosContext);

  function heartIcon() {
    if (img.isLiked) {
      return (
        <i
          className="ri-heart-fill icon"
          onClick={() => toggleLike(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line icon"
          onClick={() => toggleLike(img.id)}
        ></i>
      );
    }
  }

  const cartIcon = hovered && <i className="ri-add-circle-line icon"></i>;

  return (
    <div
      className={`image__container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} alt={img.alt} className="image__item" />
      <div className="image__icons">
        {heartIcon()}
        {cartIcon}
      </div>
    </div>
  );
}

export default Photo;
