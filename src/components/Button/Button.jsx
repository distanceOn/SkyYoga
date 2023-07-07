import s from "./Button.module.scss";

const Button = (props) => {
  return (
    <div>
      <button className={s.btn}>{props.buttonText}</button>
    </div>
  );
};

export default Button;
