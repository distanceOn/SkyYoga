import s from "./ProfileIcon.module.scss";

const ProfileIcon = ({ isOpen, setIsOpen, color }) => {
	const handleSetIsOpen = (e) => {
		e.stopPropagation();
		setIsOpen(!isOpen);
	};

	return (
		<div className={s.profileIcon} onClick={handleSetIsOpen}>
			<div className={s.icon}></div>
			<div className={s.info}>
				<p className={`${s.info__name} ${s[color]}`}>Сергей</p>
				<div className={s.info__arrow}>
					<svg
						className={isOpen && `${s.arrow__rotate_svg}`}
						xmlns="http://www.w3.org/2000/svg"
						width="9"
						height="14"
						viewBox="0 0 9 14"
						fill="none"
					>
						<path
							d="M7.67767 12.7106L2.00006 7.03296L7.67767 1.35535"
							stroke={color}
							strokeWidth="2"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default ProfileIcon;
