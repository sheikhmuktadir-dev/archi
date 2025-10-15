import Section from "../../Components/Section/Section";
import Style from "./home.module.css";
import heroData from "../../Data/Data.json";
import ButtonLarge from "../../Components/Button/ButtonLarge";
import { motion } from "framer-motion";

export default function HeroSection() {
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
      <div className={Style.heroInner}>
        {/* hero image */}
        <img
          src={image}
          className={Style.heroImage}
          alt="hero image"
          style={{ filter: "blur(20px)", transition: "filter 0.5s" }}
          onLoad={(e) => (e.target.style.filter = "blur(0)")}
          loading="lazy"
        />

        {/* hero content start */}
        <div className={Style.heroContent}>
          {/* hero center content  start*/}
          <div className={Style.heroContentCenter}>
            <div className={Style.homeSmallTextCover}>
              <h6 className="lightColor">{subheading}</h6>
            </div>

            {/* hero large heading */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="ExtraLargeHeading"
            >
              {heading}
            </motion.div>
            <div className={Style.heroContentBottomFlex}>
              <h5 className="lightColor">{bottomTextOne}</h5>
              <h5 className="lightColor">{bottomTextTwo}</h5>
            </div>

            {/* hero button */}
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
          {/* hero center content end*/}
        </div>
        {/* hero content end */}
      </div>
    </Section>
  );
}
