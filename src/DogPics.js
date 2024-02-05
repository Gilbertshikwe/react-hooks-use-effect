import React, { useState, useEffect } from "react";

function DogPics() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    
    // Fetch dog images and update state
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        console.log("setState");
        setImages(data.message);
      });

    // Cleanup function (optional)
    return () => {
      console.log("Cleanup function");
    };
  }, []); // Empty dependencies array means this effect runs only once

  console.log("render");

  return (
    <div>
      {images.map((image) => (
        <img src={image} key={image} alt="Dog" />
      ))}
    </div>
  );
}

export default DogPics;

