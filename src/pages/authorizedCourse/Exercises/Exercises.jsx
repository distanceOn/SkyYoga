import Button from "../../../components/Button/Button";
import s from "./Exercises.module.scss";

export const Exercises = () => {
  const exercisesTypes = [
    "Наклон вперед (10 повторений)",
    "Наклон назад (10 повторений)",
    "Поднятие ног, согнутых в коленях (5 повторений)",
  ];
  return (
    <section className={s.container}>
      <h2 className={s.heading}>Упражнения</h2>
      <ul className={s.ul}>
        {exercisesTypes.map((item, i) => {
          return (
            <li key={i} className={s.li}>
              {item}
            </li>
          );
        })}
      </ul>
      <Button buttonText="Заполнить свой прогресс" />
    </section>
  );
};
