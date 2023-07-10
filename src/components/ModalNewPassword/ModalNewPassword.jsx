import Button from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import s from "./ModalNewPassword.module.scss";

import Logo from "../../components/Logo/Logo";

export const ModalNewPassword = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.modal}>
          <div className={s.login}>
            <Logo />
            <h1 className={s.title}>Новый пароль:</h1>

            <Input placeholderText="Пароль" />
            <Input placeholderText="Повторите парольь" />

            <div className={s.login__margin}>
              <Button buttonText="Сохранить" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
