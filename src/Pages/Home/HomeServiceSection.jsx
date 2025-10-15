import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import Style from "./home.module.css";
import serviceData from "../../Data/Data.json";
import { useState } from "react";
import { motion } from "framer-motion";

// framer
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

// framer
const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

export default function HomeServiceSection() {
  const { title = "", service = [] } = serviceData.services || {};

  // capture current image
  const [currentImage, setCurrentImage] = useState(
    (service.length > 0 && service[0].image) || {}
  );

  // capture inder
  const [activeIndex, setActiveIndex] = useState(0);

  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return (
    <Section padding="sectionPaddingLarge">
      <Container>
        <div className={Style.serviceGrid}>
          <h6 className="textUpperCase">{title}</h6>
          <div className={Style.serviceMainArea}>
            {/* image */}
            <motion.img
              key={currentImage}
              src={currentImage}
              className={Style.serviceImage}
              alt="service image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* ul */}
            <motion.ul
              className={Style.serviceList}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            >
              {service.map((list, index) => {
                return (
                  // li
                  <motion.li
                    key={list.serviceName}
                    onMouseEnter={() => {
                      if (!isTouch) {
                        setCurrentImage(list.image);
                        setActiveIndex(index);
                      }
                    }}
                    onClick={() => {
                      if (isTouch) {
                        setCurrentImage(list.image);
                        setActiveIndex(index);
                      }
                    }}
                    className={`${Style.serviceItem} ${
                      activeIndex === index ? Style.serviceItemActive : ""
                    }`}
                    variants={itemVariants}
                  >
                    <sup>{`[${list.num}]`}</sup>
                    <span>{list.serviceName}</span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
