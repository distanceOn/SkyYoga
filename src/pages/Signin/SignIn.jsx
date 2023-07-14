import Button from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import s from "../Login/login.module.scss";
import Logo from "../../components/Logo/Logo";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase/firebase";

export const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        const user = userData.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
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
              <Input placeholderText="Повторите пароль" type="password" />
            </div>

            <div className={s.login__margin}>
              <Button buttonText="Зарегистрироваться" onClick={onLogin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
