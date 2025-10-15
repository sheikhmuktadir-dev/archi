import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import Style from "./home.module.css";
import galleryData from "../../Data/Data.json";
import GalleryCard from "../../Components/Card/GalleryCard";

export default function HomeGallerySection() {
  const { title = "", galleryCard = [] } = galleryData.gallery || {};
  return (
    <Section padding="sectionPaddingLarge">
      <Container>
        {/* project heading */}
        <div className={Style.homeTopHeadingGrid}>
          <h6 className="textUpperCase">{title}</h6>
        </div>

        {/* process reuseable card */}
        <div className={Style.galleryCardArea}>
          <GalleryCard galleryData={galleryCard} image="image" />
        </div>
      </Container>
    </Section>
  );
}
