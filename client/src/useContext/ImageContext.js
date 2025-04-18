// ImageContext.js
import React, { createContext, useState } from 'react';
import Grid from '../Components/Grid/Grid';

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([
    {
        title: "HALDI",
        images: Array(40).fill().map((_, i) => ({
          id: `haldi-${i}`,
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtkWGeFk-jdt66eqiclq3gK8o6PBHlmHhlw&s"
        }))
      },
      // {
      //   title: "MEHNDI",
      //   images: Array(10).fill().map((_, i) => ({
      //     id: `mehndi-${i}`,
      //     src: "/api/placeholder/150/100"
      //   }))
      // },
      // {
      //   title: "WEDDING",
      //   images: Array(10).fill().map((_, i) => ({
      //     id: `wedding-${i}`,
      //     src: "/api/placeholder/150/100"
      //   }))
      // }
  ]);

  return (
    <ImageContext.Provider value={{ images, setImages }}>
      {Grid}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageProvider };
