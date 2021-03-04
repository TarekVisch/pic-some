import React, { useContext } from "react";
import { PhotosContext } from "../../context/photosContext";

import Photo from "../../components/photo/photo.component";
// import imageClassName from "../../utilities/imageClassName";

import "./gallery.styles.scss";

function Gallery() {
  const { images } = useContext(PhotosContext);

  return (
    <div className="gallery">
      {images.map((img) => (
        <Photo key={img.id} img={img} />
      ))}
    </div>
  );
}

export default Gallery;
