import { useState } from "react";
import Style from "./card.module.css";

export default function TeamCard({ galleryData = [], image }) {
  const [galleryIndex, setGalleryIndex] = useState(2);
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  if (galleryData.length === 0) {
    return <p className="dataNotFound">No Data Found</p>;
  }

  return (
    <>
      {galleryData.map((list, index) => (
        <div
          key={index}
          className={`${Style.galleryCard} ${
            galleryIndex === index ? Style.galleryCardActive : ""
          }`}
          onMouseEnter={() => {
            if (!isTouch) {
              setGalleryIndex(index);
            }
          }}
          onClick={() => {
            if (isTouch) {
              setGalleryIndex(index);
            }
          }}
        >
          {image && list[image] && (
            <img
              src={list[image]}
              alt={`Gallery ${index}`}
              className={Style.galleryCardImage}
            />
          )}
        </div>
      ))}
    </>
  );
}
