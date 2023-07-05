import img from "../../imgs/logo.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <div>
      <img src={img} alt="СкайФитнесПро" className="logo" />
    </div>
  );
};

export default Logo;
