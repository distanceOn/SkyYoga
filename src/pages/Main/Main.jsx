import Header from "../../components/Header/Header";
import s from "./Main.module.scss";
import Inscription from "./Inscription/Inscription";
import Cards from "../../components/Cards/Cards";
import Footer from "./Footer/Footer";
import { User } from "../../firebase/getUser";

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
        <User />
      </div>
    </div>
  );
};

export default Main;
