import React, { useState, useEffect } from "react";

const PhotosContext = React.createContext();

function PhotosContextProvider(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos?per_page=30&client_id=gWq17QYOX1lzaC6VQ1myMNnhQXNGW4efHeuYdm5vFWg"
    )
      .then((response) => response.json())
      .then((data) => {
        const imagesArray = data.map((image) => {
          return {
            id: image.id,
            url: image.urls.small,
            alt: image.alt_description,
            isLiked: false,
          };
        });
        setImages(imagesArray);
      })
      .catch((err) => console.error("Fetch Error: " + err));
  }, []);

  function toggleLike(id) {
    console.log(id);
  }

  return (
    <PhotosContext.Provider value={{ images, toggleLike }}>
      {props.children}
    </PhotosContext.Provider>
  );
}

export { PhotosContextProvider, PhotosContext };
