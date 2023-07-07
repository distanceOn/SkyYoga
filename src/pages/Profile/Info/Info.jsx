import s from "./Info.module.scss";
import Button from "../../../components/Button/Button";

const Info = () => {
  return (
    <div className={s.info}>
      <h2 className={s.info__h2}>Мой профиль</h2>
      <div className={s.info__dataContainer}>
        <p className={s.info__data}>Логин: sergey.petrov96</p>
        <p className={s.info__data}>Пароль: 4fkhdj880d</p>
      </div>
      <div className={s.info__btns}>
        <Button buttonText="Редактировать логин" />
        <Button buttonText="Редактировать пароль" />
      </div>
    </div>
  );
};

export default Info;
