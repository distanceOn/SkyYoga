import Button from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import s from "./login.module.scss";
import Logo from "../../components/Logo/Logo";

import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        const user = userData.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const handleRegistrationButtonClick = () => {
    navigate("/registration");
  };
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.modal}>
          <div className={s.login}>
            <Logo />
            <div className={s.login__margin_top}>
              <Input
                placeholderText="Логин"
                id="email-address"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholderText="Пароль"
                id="password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className={s.login__margin}>
              <Button buttonText="Войти" onClick={onSubmit} />
            </div>
            <button
              className={s.btn__register}
              type="submit"
              onClick={handleRegistrationButtonClick}
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
