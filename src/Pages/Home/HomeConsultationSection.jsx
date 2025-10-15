import Section from "../../Components/Section/Section";
import Style from "./home.module.css";
import consultationData from "../../Data/Data.json";
import ButtonLarge from "../../Components/Button/ButtonLarge";

export default function HomeConsultationSection() {
  const {
    image = null,
    textOne = "",
    textTwo = "",
    cta = "",
    link = "",
  } = consultationData.consultation || {};
  return (
    <Section padding="sectionPaddingLarge">
      <div className={Style.homeConsultationInner}>
        {/* large image */}
        <img src={image} className={Style.homeConsultationImage} />

        {/* content start */}
        <div className={Style.homeConsultationContent}>
          {/* left side content */}
          <div className={Style.homeConsultationContentStart}>
            <div className={Style.homeSmallTextCover}>
              <h6 className="primaryColor">{textOne}</h6>
            </div>
          </div>
          {/* left side content end */}

          {/* right side content */}
          <div className={Style.homeConsultationContentEnd}>
            <div className={Style.homeSmallTextCover}>
              <h6 className="primaryColor">{textTwo}</h6>
            </div>

            <div className={Style.homeConsultationBtn}>
              <ButtonLarge
                background="buttonWhiteBackground"
                color="buttonBlackColor"
                url={link}
              >
                {cta}
              </ButtonLarge>
            </div>
          </div>
          {/* right side content end*/}
        </div>
        {/* content end */}
      </div>
    </Section>
  );
}
