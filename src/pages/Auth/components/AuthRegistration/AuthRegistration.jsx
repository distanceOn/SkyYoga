import s from "./AuthRegistration.module.scss";
import Logo from "../../../../components/Logo/Logo";
import { Input } from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { AuthPopup } from "../AuthPopup/AuthPopup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAddNewUserMutation } from "../../../../redux/services/usersApi";
import { userData } from "../../userData/userData";

export const AuthRegistration = ({
  password,
  repeatPassword,
  setIsError,
  setErrorState,
  auth,
  email,
  navigate,
  setIsVisiblePopup,
  setEmail,
  errorSource,
  observeToError,
  targetPopup,
  targetPassword,
  setPassword,
  setRepeatPassword,
  targetRepeat,
  popupPosition,
  isError,
  errorText,
  isVisiblePopup,
}) => {
  const [addNewUser] = useAddNewUserMutation();

  const createUser = async (uid) => {
    await addNewUser(userData(uid));
  };

  const onLogin = (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setIsError(true);
      setErrorState("passwords-mismatch");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        const user = userData.user;

        createUser(user.uid);
        navigate("/login");
      })
      .catch((error) => {
        // устанавливаем isError когда ошибка
        setIsError(true);
        setIsVisiblePopup(true);
        const errorCode = error.code;
        // устанавливаем состояние ошибки
        setErrorState(errorCode);
      });
  };
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
            <Input
              placeholderText="Повторите пароль"
              type="password"
              onChange={(e) => {
                setRepeatPassword(e.target.value);
                if (errorSource === targetRepeat) {
                  observeToError();
                }
              }}
              ref={targetRepeat}
            />
          </div>

          <div className={s.login__margin}>
            <Button buttonText="Зарегистрироваться" onClick={onLogin} />
          </div>
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
