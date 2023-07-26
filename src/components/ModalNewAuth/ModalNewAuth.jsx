import Button from "../Button/Button";
import { Input } from "../Input/Input";
import s from "./ModalNewAuth.module.scss";
import { getAuth, updateEmail, updatePassword } from "firebase/auth";
import Logo from "../Logo/Logo";
import { useRef } from "react";

export const ModalNewAuth = (props) => {
  const auth = getAuth();
  const emailRef = useRef();

  const newPasswordRef = useRef();
  const newPasswordConfirmRef = useRef();

  const handlePasswordChange = () => {
    const user = auth.currentUser;
    if (newPasswordRef.current !== newPasswordConfirmRef.current) {
      console.log("password doesnot match");
      return;
    } else {
      updatePassword(user, newPasswordRef.current)
        .then(() => {
          console.log("password is changed");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };

  const handleEmailChange = () => {
    const user = auth.currentUser;

    updateEmail(user, emailRef.current)
      .then(() => {
        console.log("email is changed");
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
  if (props.login) {
    return (
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.modal}>
            <div className={s.login}>
              <Logo />
              <h1 className={s.title}>{props.title}</h1>

              <Input
                placeholderText="Логин"
                name="email"
                ref={emailRef}
                type="email"
                onChange={(e) => select(e)}
              />

              <div className={s.login__margin}>
                <Button buttonText="Сохранить" onClick={handleEmailChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.modal}>
            <div className={s.login}>
              <Logo />
              <h1 className={s.title}>{props.title}</h1>

              <Input
                ref={newPasswordRef}
                placeholderText=" Пароль"
                type="password"
                onClick={(e) => select(e)}
              />
              <Input
                ref={newPasswordConfirmRef}
                placeholderText="Повторите пароль"
                type="password"
                onClick={(e) => select(e)}
              />
              <div className={s.login__margin}>
                <Button buttonText="Сохранить" onClick={handlePasswordChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
