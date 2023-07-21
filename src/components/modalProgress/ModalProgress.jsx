import s from "./ModalProgress.module.scss";
import { CSSTransition } from "react-transition-group";
import Button from "../Button/Button";
import { Input } from "../Input/Input";

export const ModalProgress = ({ isOpen, setIsOpen, setIsSubmitted }) => {
  const questions = [
    "Сколько раз вы сделали наклоны вперед?",
    "Сколько раз вы сделали наклоны вперед?",
    "Сколько раз вы сделали наклоны вперед?",
    "Сколько раз вы сделали наклоны вперед?",
  ];

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={{
        enter: s["alert-enter"],
        enterActive: s["alert-enter-active"],
        exit: s["alert-exit"],
        exitActive: s["alert-exit-active"],
      }}
      unmountOnExit
    >
      <div
        className={s.wrapper}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className={s.modal} onClick={(e) => e.stopPropagation()}>
          <h2 className={s.heading}>Мой прогресс</h2>
          {questions.map((question, i) => {
            return (
              <div key={i} className={s.inputs}>
                <label className={s.label}>
                  {question}

                  <Input uniqueClass={s.input} placeholder="Введите значение" />
                </label>
              </div>
            );
          })}
          <Button
            onClick={() => {
              setIsOpen(false);
              setIsSubmitted(true);
            }}
            buttonText="Отправить"
          />
        </div>
      </div>
    </CSSTransition>
  );
};
