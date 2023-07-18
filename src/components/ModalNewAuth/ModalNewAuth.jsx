import Button from "../Button/Button";
import { Input } from "../Input/Input";
import s from "./ModalNewAuth.module.scss";

import Logo from "../Logo/Logo";

export const ModalNewAuth = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.modal}>
          <div className={s.login}>
            <Logo />
            <h1 className={s.title}>{props.title}</h1>
            <Input
              placeholderText={
                props.title === "Новый пароль:" ? "Пароль" : "Логин"
              }
            />
            {props.title === "Новый пароль:" && (
              <Input placeholderText="Повторите пароль" />
            )}

            <div className={s.login__margin}>
              <Button buttonText="Сохранить" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
