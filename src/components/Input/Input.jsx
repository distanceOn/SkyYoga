import s from "./Input.module.scss";

export const Input = (props) => {
  return (
    <div className={s.input__form}>
      <input
        type={props.type}
        placeholder={props.placeholderText}
        onChange={props.onChange}
        className={props.class ? props.class : s.input}
      />
    </div>
  );
};
