import Style from "./footer.module.css";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import footerData from "./Footer.json";

export default function Footer() {
  const { corporateOffice, navigation, socialMedia, newsletter, bottom } =
    footerData.footer;
  return (
    <footer>
      <Container>
        <div className={Style.footerMainArea}>
          <div className={Style.footerContent}>
            <h6 className="textUpperCase mutedColor">
              {corporateOffice.title}
            </h6>
            <h6 className="textUpperCase">{corporateOffice.address}</h6>
            <h6>{corporateOffice.phone}</h6>
          </div>
          <div className={Style.footerContent}>
            <h6 className="textUpperCase mutedColor">{navigation.title}</h6>
            <ul className={Style.footerList}>
              {navigation.links.map((navlink, index) => {
                return (
                  <li className={Style.footerItem} key={index}>
                    <Link
                      to={navlink.path}
                      className="textUpperCase secondaryColor"
                    >
                      {navlink.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={Style.footerContent}>
            <h6 className="textUpperCase mutedColor">{socialMedia.title}</h6>
            <ul className={Style.footerList}>
              {socialMedia.links.map((social, index) => {
                return (
                  <li className={Style.footerItem} key={index}>
                    <Link
                      to={social.path}
                      className="textUpperCase secondaryColor"
                    >
                      {social.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={Style.footerContent}>
            <div className={Style.footerContentNews}>
              <h4 className="textUpperCase">{newsletter.title}</h4>
              <h6 className="mutedColor">{newsletter.subtitle}</h6>
            </div>

            <div className={Style.footerContentInputArea}>
              <input
                type="text"
                placeholder={newsletter.placeholder}
                className="formBox"
              />
              <button type="button" className={Style.footerContentButton}>
                <HiArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className={Style.footerBottomFlex}>
          <p className="mutedColor">{bottom.text}</p>
          <Link to={bottom.privacyPolicy.path} className="mutedColor">
            {bottom.privacyPolicy.label}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
