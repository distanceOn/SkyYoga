import Header from "./Header/Header";
import "./Main.scss";
import Inscription from "./Inscription/Inscription";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <Header />
        <Inscription />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
