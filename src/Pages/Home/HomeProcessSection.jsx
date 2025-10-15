import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import Style from "./home.module.css";
import processData from "../../Data/Data.json";
import HoverCard from "../../Components/Card/HoverCard";

export default function HomeProcessSection() {
  const {
    title = "",
    description = "",
    processCard = [],
  } = processData.process || {};
  return (
    <Section padding="sectionPaddingLarge">
      <Container>
        {/* project heading */}
        <div className={Style.homeTopHeadingGrid}>
          <h6 className="textUpperCase">{title}</h6>
          <h3 className="textEnd textUpperCase">{description}</h3>
        </div>

        {/* process reuseable card */}
        <div className={Style.processCardArea}>
          <HoverCard
            cardData={processCard}
            num="number"
            title="title"
            description="description"
            image="image"
          />
        </div>
      </Container>
    </Section>
  );
}
