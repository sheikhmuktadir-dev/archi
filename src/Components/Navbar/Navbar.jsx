import Style from "./navbar.module.css";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import navData from "./Navbar.json";
import PrimaryButton from "../Button/PrimaryButton";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const { logo, menus, cta } = navData.navbar;

  function toggleClicked() {
    setToggle(true);
  }

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  return (
    <nav className={Style.navMain}>
      <Container>
        <div className={Style.navInnerFlex}>
          {/* nav logo area start */}
          <div className={Style.navLogoArea}>
            <Link to="/" className={Style.navLogo}>
              {logo}
            </Link>

            <button className={Style.toggleBtn} onClick={toggleClicked}>
              <RiMenu3Fill />
            </button>
          </div>
          {/* nav logo area end */}

          {/* nav menu area  start*/}
          <div
            className={`${Style.navMenuArea} ${
              toggle && Style.navMenuAreaShow
            }`}
          >
            <button className={Style.closeBtn} onClick={() => setToggle(false)}>
              <MdOutlineClose />
            </button>
            {/* ------------- */}
            <div className={Style.navCenterMenu}>
              <ul className={Style.navList}>
                {menus.map((navitem, index) => {
                  return (
                    <li className={Style.navItem} key={index}>
                      <Link
                        to={navitem.url}
                        className={Style.navLink}
                        onClick={() => setToggle(false)}
                      >
                        {navitem.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* ------------ */}

            {/* ------------- */}
            <div className={Style.navEndMenu}>
              <PrimaryButton setToggle={setToggle} url={cta.ctaUrl}>
                {cta.ctaLabel}
              </PrimaryButton>
            </div>
            {/* -------------- */}
          </div>
          {/* nav menu area end */}
        </div>
      </Container>
    </nav>
  );
}
