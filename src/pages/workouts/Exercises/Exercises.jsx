import s from "./Exercises.module.scss";
import { useState } from "react";
import { ModalProgress } from "../../../components/modalProgress/ModalProgress";
import { ModalSubmittedProgress } from "../../../components/ModalSubmittedProgress/ModalSubmittedProgress";
import Button from "../../../components/Button/Button";

export const Exercises = ({ exercises }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className={s.container}>
      <h2 className={s.heading}>Упражнения</h2>
      <ul className={s.ul}>
        {exercises.map((item, i) => {
          return (
            <li key={i} className={s.li}>
              {item.name}
            </li>
          );
        })}
      </ul>
      <Button
        onClick={() => setIsModalOpen(!isModalOpen)}
        buttonText="Заполнить свой прогресс"
      ></Button>

      <ModalProgress
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        // isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
      />
      <ModalSubmittedProgress isOpen={isSubmitted} setIsOpen={setIsSubmitted} />
    </section>
  );
};
