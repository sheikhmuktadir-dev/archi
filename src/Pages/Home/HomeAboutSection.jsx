import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import Style from "./home.module.css";
import aboutData from "../../Data/Data.json";
import ButtonLarge from "../../Components/Button/ButtonLarge";
import { motion } from "framer-motion";

export default function HomeAboutSection() {
  const {
    title = "",
    description = "",
    bottomParaOne = "",
    bottomParaTwo = "",
    cta = "",
    link = "",
  } = aboutData.about || {};
  return (
    <Section padding="sectionPaddingLarge">
      <Container>
        {/* about top heading */}
        <div className={Style.homeTopHeadingGrid}>
          <h6 className="textUpperCase">{title}</h6>
          <h3 className="textEnd textUpperCase">{description}</h3>
        </div>

        {/* about content */}
        <motion.div
          className={Style.aboutContentGrid}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={Style.homeSmallTextCover}>
            <p className="lightColor">{bottomParaOne}</p>
          </div>
          <div className={Style.homeSmallTextCover}>
            <p className="lightColor">{bottomParaTwo}</p>
          </div>
          <div className="textEnd">
            <ButtonLarge url={link}>{cta}</ButtonLarge>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
