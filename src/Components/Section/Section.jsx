import Style from "./section.module.css";

export default function Section({ children, padding }) {
  const sectionPadding = Style[padding] || Style.noSectionPadding;
  return (
    <section className={`${Style.section} ${sectionPadding}`}>
      {children}
    </section>
  );
}
