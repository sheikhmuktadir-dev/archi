import { motion } from "framer-motion";
import Style from "./card.module.css";

export default function ProjectCard({
  projectData = [],
  image = null,
  title = "",
  date = "",
}) {
  if (projectData.length === 0) {
    return <p className="dataNotFound">No Data Found</p>;
  }

  return (
    <>
      {projectData.map((list, index) => (
        <motion.div
          key={list.id || index}
          className={Style.projectCard}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={Style.projectCardImageCover}>
            {image && list[image] && (
              <motion.img
                src={list[image]}
                alt="project image"
                className={Style.projectCardImage}
                initial={{ rotateX: -90, opacity: 0, transformOrigin: "top" }}
                whileInView={{ rotateX: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  delay: index * 0.2,
                }}
              />
            )}
          </div>

          <div className={Style.projectCardTextFlex}>
            {title && list[title] && (
              <h5 className="textUpperCase">{list[title]}</h5>
            )}
            {date && list[date] && (
              <h5 className="textUpperCase">{list[date]}</h5>
            )}
          </div>
        </motion.div>
      ))}
    </>
  );
}
