import Button from "../../../components/Button/Button";
import s from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={s.footer}>
      <Button class={s.footer__btn} buttonText="Наверх ↑" />
    </div>
  );
};

export default Footer;
