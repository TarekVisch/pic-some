import React, { useState } from "react";

const PhotosContext = React.createContext();

function PhotosContextProvider(props) {
  const [images, setImages] = useState([
    {
      id: "1",
      url: "",
    },
    {
      id: "2",
      url: "",
    },
    {
      id: "3",
      url: "",
    },
  ]);

  return (
    <PhotosContext.Provider value={{ images }}>
      {props.children}
    </PhotosContext.Provider>
  );
}

export { PhotosContextProvider, PhotosContext };
