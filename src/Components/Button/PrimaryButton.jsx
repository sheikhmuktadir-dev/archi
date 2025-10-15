import { Link } from "react-router-dom";
import Style from "./button.module.css";

export default function PrimaryButton({ children, url, setToggle }) {
  return (
    <Link
      to={url || "/"}
      className={Style.primaryButton}
      onClick={() => setToggle(false)}
    >
      {children}
    </Link>
  );
}
