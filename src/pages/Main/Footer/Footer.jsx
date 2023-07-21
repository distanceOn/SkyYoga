import Button from "../../../components/Button/Button";
import s from "./Footer.module.scss";
const Footer = () => {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className={s.footer}>
			<Button
				onClick={handleScrollToTop}
				uniqueClass={s.footer__btn}
				buttonText="Наверх ↑"
			/>
		</div>
	);
};

export default Footer;
