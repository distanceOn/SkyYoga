import Header from "../../components/Header/Header";
import s from "./Main.module.scss";
import Inscription from "./Inscription/Inscription";
import Cards from "../../components/Cards/Cards";
import Footer from "./Footer/Footer";
import { User } from "../../firebase/getUser";

const Main = () => {
  return (
    <div className={s.main}>
      <div className={s.container}>
        <Header />
        <Inscription />
        <Cards page="main" />
        <Footer />
        <User />
      </div>
    </div>
  );
};

export default Main;
