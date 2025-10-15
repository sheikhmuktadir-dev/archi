import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Style from "./card.module.css";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function HoverCard({
  cardData = [],
  num = "",
  title = "",
  description = "",
  image = null,
}) {
  const initialIndex = cardData.length > 2 ? 2 : 0;
  const [hoverIndex, setHoverIndex] = useState(initialIndex);
  const [activeImage, setActiveImage] = useState(
    cardData[initialIndex] ? cardData[initialIndex][image] : null
  );
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  const handleHover = (index, img) => {
    setHoverIndex(index);
    setActiveImage(img);
  };

  if (cardData.length === 0) {
    return <p className="dataNotFound">No Data Found</p>;
  }

  return (
    <div className={Style.hoverCardWrapper}>
      {cardData.map((list, index) => (
        <div
          key={list.id || index}
          className={`${Style.hoverCard} ${
            hoverIndex === index ? Style.hoverCardActive : ""
          }`}
          onMouseEnter={() => {
            if (!isTouch) {
              handleHover(index, list[image]);
            }
          }}
          onClick={() => {
            if (isTouch) {
              handleHover(index, list[image]);
            }
          }}
        >
          {/* Number */}
          {num && list[num] && (
            <h5 className={Style.hoverCardNum}>{`[${list[num]}]`}</h5>
          )}

          {/* Text */}
          <div className={Style.hoverCardText}>
            {title && list[title] && (
              <h4 className={Style.hoverCardTitle}>{list[title]}</h4>
            )}
            {description && list[description] && (
              <p className={Style.hoverCardPara}>{list[description]}</p>
            )}
          </div>

          {/* Arrow */}
          {title && list[title] && (
            <div className={Style.hoverCardArrow}>
              <RiArrowRightUpLine />
            </div>
          )}
        </div>
      ))}

      <AnimatePresence>
        {activeImage && (
          <motion.img
            key={activeImage}
            src={activeImage}
            alt=""
            className={Style.hoverCardImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
