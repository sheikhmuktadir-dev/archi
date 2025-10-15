import Style from "./button.module.css";
import { Link } from "react-router-dom";

export default function ButtonLarge({ children, background, color, url }) {
  const buttonBg = Style[background] || Style.buttonBlackBackground;
  const buttonColor = Style[color] || Style.buttonWhiteColor;
  return (
    <Link
      to={url || "/"}
      className={`${Style.buttonLarge} ${buttonBg} ${buttonColor}`}
    >
      {children}
    </Link>
  );
}
