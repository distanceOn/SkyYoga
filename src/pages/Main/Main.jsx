import Header from "./Header/Header";
import s from "./Main.module.scss";
import Inscription from "./Inscription/Inscription";
import Cards from "../../components/Cards/Cards";
import Footer from "./Footer/Footer";

import { ModalNewAuth } from "../../components/ModalNewAuth/ModalNewAuth";

const Main = () => {
  return (
    <div className={s.main}>
      <div className={s.container}>
        <ModalNewAuth title="Новый логин:" />
        <ModalNewAuth title="Новый пароль:" />

        <Header />
        <Inscription />
        <Cards page="main" />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
