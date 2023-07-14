import s from "./Button.module.scss";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        // если нет пропса class то дефолт класс
        className={props.class ? props.class : s.btn}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default Button;
