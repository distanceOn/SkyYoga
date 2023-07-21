import s from "./Input.module.scss";

export const Input = ({ type, placeholderText, onChange, uniqueClass }) => {
  return (
    <div className={s.input__form}>
      <input
        type={type}
        placeholder={placeholderText}
        onChange={onChange}
        className={uniqueClass ? uniqueClass : s.input}
      />
    </div>
  );
};
