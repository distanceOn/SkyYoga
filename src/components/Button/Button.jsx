import s from './Button.module.scss';

const Button = (props) => {
	return (
		<div>
			<button onClick={props.onClick} className={s.btn}>
				{props.buttonText}
			</button>
		</div>
	);
};

export default Button;
