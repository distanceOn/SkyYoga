import Button from "../Button/Button";
import { Input } from "../Input/Input";
import s from "./ModalNewAuth.module.scss";
import {
  getAuth,
  updateEmail,
  EmailAuthProvider,
  updatePassword,
  reauthenticateWithCredential,
} from "firebase/auth";
import Logo from "../Logo/Logo";
import { useRef } from "react";

export const ModalNewAuth = (props) => {
  const auth = getAuth();
  const emailRef = useRef();
  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const newPasswordConfirmRef = useRef();

  const user = auth.currentUser;

  const reauthenticate = (currentPassword) => {
    console.log(currentPassword);
    let credential = EmailAuthProvider.credential(user.email, currentPassword);
    reauthenticateWithCredential(user, credential);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    reauthenticate(currentPasswordRef.current)
      .then(() => {
        if (newPasswordRef !== newPasswordConfirmRef) {
          return console.log("password does not match");
        }
        if (emailRef.current !== user.email) {
          updateEmail(emailRef.current);
        }
        if (newPasswordRef.current.value) {
          updatePassword(newPasswordRef.current);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  function select(e) {
    const input = e.target;
    input.focus();
    input.select();
  }
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.modal}>
          <div className={s.login}>
            <Logo />
            <h1 className={s.title}>{props.title}</h1>
            <Input
              ref={emailRef}
              onChange={(e) => {
                select(e);
              }}
              placeholderText={
                props.title === "Новый пароль:" ? "Пароль" : "Логин"
              }
            />
            {props.title === "Новый пароль:" && (
              <Input placeholderText="Повторите пароль" />
            )}

            <div className={s.login__margin}>
              <Button buttonText="Сохранить" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
