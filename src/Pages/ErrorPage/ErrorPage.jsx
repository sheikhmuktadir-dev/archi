import { Link } from "react-router-dom";
import Style from "./error.module.css";
export default function ErrorPage() {
  return (
    <>
      <div className={Style.erroMain}>
        <h3>Oops! Page Not Found</h3>
        <Link to="/">Back To Home</Link>
      </div>
    </>
  );
}
