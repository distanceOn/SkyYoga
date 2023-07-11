import Button from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import s from "../Login/login.module.scss";
import Logo from "../../components/Logo/Logo";

export const SignIn = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.modal}>
          <div className={s.login}>
            <Logo />
            <div className={s.login__margin_top}>
              <Input placeholderText="Логин" />
              <Input placeholderText="Пароль" />
              <Input placeholderText="Повторите пароль" />
            </div>

            <div className={s.login__margin}>
              <Button buttonText="Зарегистрироваться" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
