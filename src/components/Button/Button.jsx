import s from "./Button.module.scss";

const Button = ({ uniqueClass, buttonText, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        // если нет пропса class то дефолт класс
        className={uniqueClass ? uniqueClass : s.btn}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
