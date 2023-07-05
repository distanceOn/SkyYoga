import Header from "./Header/Header";
import "./Main.scss";
import Inscription from "./Inscription/Inscription";
import Cards from "./Cards/Cards";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <Header />
        <Inscription />
        <Cards />
      </div>
    </div>
  );
};

export default Main;
