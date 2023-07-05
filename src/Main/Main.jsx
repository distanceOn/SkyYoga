import Header from "./Header/Header";
import "./Main.scss";
import Inscription from "./Inscription/Inscription";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <Header />
        <Inscription />
      </div>
    </div>
  );
};

export default Main;
