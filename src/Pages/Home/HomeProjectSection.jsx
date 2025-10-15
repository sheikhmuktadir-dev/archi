import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import Style from "./home.module.css";
import projectData from "../../Data/Data.json";
import ProjectCard from "../../Components/Card/ProjectCard";
import ButtonLarge from "../../Components/Button/ButtonLarge";

export default function HomeProjectSection() {
  const {
    title = "",
    description = "",
    cards = [],
    cta = "",
    link = "",
  } = projectData.projects || {};
  return (
    <Section padding="sectionPaddingLarge">
      <Container>
        {/* project heading */}
        <div className={Style.homeTopHeadingGrid}>
          <h6 className="textUpperCase">{title}</h6>
          <h3 className="textEnd textUpperCase">{description}</h3>
        </div>

        {/* project reuseable card */}
        <div className={Style.projectCardGrid}>
          <ProjectCard
            projectData={cards}
            image="image"
            title="title"
            date="date"
          />
        </div>

        {/* project btn */}
        <div className={Style.projectsBtnArea}>
          <ButtonLarge url={link}>{cta}</ButtonLarge>
        </div>
      </Container>
    </Section>
  );
}
