import Style from "./container.module.css";

export default function Container({ children }) {
  return <div className={Style.containerMain}>{children}</div>;
}
