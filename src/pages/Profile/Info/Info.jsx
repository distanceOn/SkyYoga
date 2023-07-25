/* eslint-disable no-mixed-spaces-and-tabs */
import s from "./Info.module.scss";
import Button from "../../../components/Button/Button";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { ModalNewAuth } from "../../../components/ModalNewAuth/ModalNewAuth";

const Info = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const userName = user.email;
  let isProfile = false;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={s.info}>
      <h2 className={s.info__h2}>Мой профиль</h2>
      <div className={s.info__dataContainer}>
        <p className={s.info__data}>Логин: {userName}</p>
        <p className={s.info__data}>Пароль: </p>
      </div>
      <div className={s.info__btns}>
        <Button
          buttonText="Редактировать логин"
          onClick={() =>
            isProfile && (
              <ModalNewAuth isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            )
          }
        />
        <Button buttonText="Редактировать пароль" />
      </div>
    </div>
  );
};

export default Info;
