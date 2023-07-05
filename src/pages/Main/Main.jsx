import Header from "./Header/Header";
import s from "./Main.module.scss";
import Inscription from "./Inscription/Inscription";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <div className={s.main}>
      <div className={s.container}>
        <Header />
        <Inscription />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
