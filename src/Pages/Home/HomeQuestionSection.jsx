import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import Style from "./home.module.css";
import questionsData from "../../Data/Data.json";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HomeQuestionSection() {
  const {
    title = "",
    description = "",
    subheading = "",
    cta = "",
    placeholderOne = "",
    placeholderTwo = "",
  } = questionsData.questions || {};
  return (
    <Section padding="sectionPaddingLarge">
      <Container>
        <div className={Style.homeTopHeadingGrid}>
          <h6 className="textUpperCase">{title}</h6>

          {/* form area */}
          <motion.div
            className={Style.questionsArea}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            {/* heading */}
            <div className={Style.questionsAreaHeading}>
              <h1 className="textUpperCase">{description}</h1>
              <h5 className="mutedColor">{subheading}</h5>
            </div>

            {/* main form start*/}
            <form>
              <div className={Style.inputAreaFlex}>
                <input
                  type="text"
                  placeholder={placeholderOne}
                  className={`formBox ${Style.inputArea}`}
                />
                <input
                  type="text"
                  placeholder={placeholderTwo}
                  className={`formBox ${Style.inputArea}`}
                />
              </div>

              <div className={Style.submitBtnArea}>
                <button type="button" className="submitButton">
                  {cta}
                </button>
              </div>
            </form>
            {/* main form end */}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
