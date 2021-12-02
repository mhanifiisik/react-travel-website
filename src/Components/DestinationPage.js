import React, { useRef, useEffect } from "react";
import HoverImage from "react-hover-image";

const DestinationPage = ({ title, text, image1, image2, flipped }) => {
  return (
    <>
      {flipped ? (
        <div className="slider left-text">
          <div className="text-left">
            <h1>{title}</h1>
            <p>{text}</p>
            <div>
              <button>Explore more</button>
            </div>
          </div>
          <HoverImage
            className="country-images"
            src={image1}
            hoverSrc={image2}
          />
        </div>
      ) : (
        <div className="slider right-text">
          <div className="text-right">
            <h1>{title}</h1>
            <p>{text}</p>
            <div>
              <button>Explore more</button>
            </div>
          </div>
          <HoverImage
            className="country-images"
            src={image1}
            hoverSrc={image2}
          />
        </div>
      )}
    </>
  );
};

export default DestinationPage;
