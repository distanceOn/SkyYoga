import s from "./ProgressBar.module.scss";
import ProgressBar from "@ramonak/react-progress-bar";

export const Progress = () => {
  const workouts = [
    "Наклоны вперед",
    "Наклоны назад",
    "Поднятие ног, согнутых в коленях",
  ];
  const workoutNumb = [2];
  return (
    <section className={s.progress__container}>
      {workoutNumb.map((item, i) => {
        return (
          <h2 key={i} className={s.progress__heading}>
            Мой прогресс по тренировке {item}:
          </h2>
        );
      })}
      <div className={s.progress__workouts}>
        {workouts.map((item, i) => {
          return (
            <div key={i} className={s.progress__workouts_name}>
              <h3 className={s.progress__workouts_title}>{item}</h3>
              <ProgressBar
                completed={45}
                className={s.wrapper}
                barContainerClassName={s.container}
                completedClassName={s.barCompleted}
                labelClassName={s.label}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};