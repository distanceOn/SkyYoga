import s from "./Input.module.scss";

export const Input = (props) => {
  return (
    <div className={s.input__form}>
      <input
        className={props.class ? props.class : s.input}
        type="text"
        placeholder={props.placeholderText}
      />
    </div>
  );
};
