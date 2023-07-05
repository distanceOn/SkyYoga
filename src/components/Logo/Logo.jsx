import img from "../../imgs/logo.svg";
import s from "./Logo.module.scss";

const Logo = () => {
  return (
    <div>
      <img src={img} alt="СкайФитнесПро" className={s.logo} />
    </div>
  );
};

export default Logo;
