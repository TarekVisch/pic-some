import React, { useState, useEffect } from "react";

const PhotosContext = React.createContext();

function PhotosContextProvider(props) {
  const [images, setImages] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos?per_page=24&client_id=gWq17QYOX1lzaC6VQ1myMNnhQXNGW4efHeuYdm5vFWg"
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
    const newImages = images.map((image) => {
      if (image.id === id) {
        return { ...image, isLiked: !image.isLiked };
      }
      return image;
    });
    setImages(newImages);
  }

  function addToCart(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeFromCart(id) {
    console.log("Remove " + id);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  console.log(cartItems);

  return (
    <PhotosContext.Provider
      value={{ images, toggleLike, cartItems, addToCart, removeFromCart }}
    >
      {props.children}
    </PhotosContext.Provider>
  );
}

export { PhotosContextProvider, PhotosContext };
