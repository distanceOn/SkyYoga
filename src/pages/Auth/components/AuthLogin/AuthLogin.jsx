import s from "./AuthLogin.module.scss";
import Logo from "../../../../components/Logo/Logo";
import { Input } from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { AuthPopup } from "../AuthPopup/AuthPopup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase/firebase";

export const AuthLogin = ({
  navigate,
  dispatch,
  setLogin,
  setIsError,
  setIsVisiblePopup,
  setErrorState,
  setEmail,
  errorSource,
  targetPopup,
  setPassword,
  targetPassword,
  observeToError,
  popupPosition,
  errorText,
  isError,
  isVisiblePopup,
  email,
  password,
}) => {
  const handleRegistrationButtonClick = () => {
    navigate("/registration");
  };

  async function onSubmit(event) {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        const user = userData.user;

        dispatch(
          setLogin({
            userId: user.uid,
            email: user.email,
          })
        );
        localStorage.setItem("userID", user.uid);
        localStorage.setItem("userEmail", user.email);
        navigate("/profile");
      })
      .catch((error) => {
        // устанавливаем isError когда ошибка
        setIsError(true);
        setIsVisiblePopup(true);
        const errorCode = error.code;
        // устанавливаем состояние ошибки
        setErrorState(errorCode);
      });
  }
  return (
    <div className={s.container}>
      <div className={s.modal}>
        <div className={s.login}>
          <Logo />
          <div className={s.login__margin_top}>
            <Input
              placeholderText="E-mail"
              id="email-address"
              name="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
                if (errorSource === targetPopup) {
                  observeToError();
                }
              }}
              ref={targetPopup}
            />
            <Input
              placeholderText="Пароль"
              id="password"
              name="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                if (errorSource === targetPassword) {
                  observeToError();
                }
              }}
              ref={targetPassword}
            />
          </div>

          <div className={s.login__margin}>
            <Button buttonText="Войти" type="submit" onClick={onSubmit} />
          </div>
          <button
            className={s.btn__register}
            type="submit"
            onClick={handleRegistrationButtonClick}
          >
            Зарегистрироваться
          </button>
          <AuthPopup
            style={{
              top: popupPosition.top,
              left: popupPosition.left,
              opacity: isError ? 1 : 0,
            }}
            errorText={errorText}
            isVisiblePopup={isVisiblePopup}
          />
        </div>
      </div>
    </div>
  );
};
