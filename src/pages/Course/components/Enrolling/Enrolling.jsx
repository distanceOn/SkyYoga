import Button from "../../../../components/Button/Button";
import s from "./Enrolling.module.scss";

export const Enrolling = () => {
	return (
		<section className={s.enrolling}>
			<p className={s.text}>
				Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором
				направления и тренера, с которым тренировки принесут здоровье и радость!
			</p>
			<Button buttonText="Записаться на тренировку" />
		</section>
	);
};
