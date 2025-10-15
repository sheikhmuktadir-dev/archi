import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../../Components/Section/Section";
import Style from "./home.module.css";
import heroData from "../../Data/Data.json";
import ButtonLarge from "../../Components/Button/ButtonLarge";

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const {
    heading = "",
    image = null,
    subheading = "",
    bottomTextOne = "",
    bottomTextTwo = "",
    cta = "",
    link = "",
  } = heroData.hero || {};

  return (
    <Section>
      {/* Hero Section */}
      <div
        className={Style.heroInner}
        style={{
          opacity: imageLoaded ? 1 : 0,
          transition: "opacity 0.6s ease-out",
        }}
      >
        {/* Hero image */}
        <img
          src={image}
          className={Style.heroImage}
          alt="hero"
          loading="eager"
          style={{ filter: "blur(20px)", transition: "filter 0.6s ease" }}
          onLoad={(e) => {
            e.target.style.filter = "blur(0)";
            setImageLoaded(true);
          }}
        />

        {/* Hero Content */}
        <div className={Style.heroContent}>
          <div className={Style.heroContentCenter}>
            {/* Small Text */}
            <div className={Style.homeSmallTextCover}>
              <h6 className="lightColor">{subheading}</h6>
            </div>

            {/* Large Heading */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: imageLoaded ? 1 : 0,
                y: imageLoaded ? 0 : 100,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="ExtraLargeHeading"
            >
              {heading}
            </motion.div>

            {/* Bottom Text */}
            <div className={Style.heroContentBottomFlex}>
              <h5 className="lightColor">{bottomTextOne}</h5>
              <h5 className="lightColor">{bottomTextTwo}</h5>
            </div>

            {/* CTA Button */}
            <div className={Style.heroBtnArea}>
              <ButtonLarge
                background="buttonWhiteBackground"
                color="buttonBlackColor"
                url={link}
              >
                {cta}
              </ButtonLarge>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
