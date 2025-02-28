import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const Home = () => {
  const [images, setImages] = useState([]);
  const galleryRef = useRef(null);

  // Fetch images from API
  useEffect(() => {
    fetch("http://localhost:5000/images")
      .then((res) => res.json())
      .then((data) => setImages(data.images))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      <h1>Welcome to Toastmasters Club, where leaders are made.</h1>
      <h2>All activities done:</h2>
      <div className="gallery-container">
        <button onClick={scrollLeft} className="scroll-button left">
          <ChevronLeft size={24} />
        </button>
        <div ref={galleryRef} className="image-gallery">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="image-preview">
                <img
                  src={`http://localhost:5000${image}`}
                  alt={`Uploaded ${index + 1}`}
                  className="large-image responsive-image"
                />
              </div>
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
        <button onClick={scrollRight} className="scroll-button right">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Home;
