import s from "./Input.module.scss";

export const Input = ({ placeholderText, onChange, type }) => {
  return (
    <div className={s.input__form}>
      <input
        className={s.input}
        type={type}
        placeholder={placeholderText}
        onChange={onChange}
      />
    </div>
  );
};
