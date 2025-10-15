import HeroSection from "./HeroSection";
import HomeAboutSection from "./HomeAboutSection";
import HomeConsultationSection from "./HomeConsultationSection";
import HomeProcessSection from "./HomeProcessSection";
import HomeProjectSection from "./HomeProjectSection";
import HomeQuestionSection from "./HomeQuestionSection";
import HomeServiceSection from "./HomeServiceSection";
import HomeGallerySection from "./HomeGallerySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeAboutSection />
      <HomeServiceSection />
      <HomeProjectSection />
      <HomeProcessSection />
      <HomeConsultationSection />
      <HomeGallerySection />
      <HomeQuestionSection />
    </>
  );
}
