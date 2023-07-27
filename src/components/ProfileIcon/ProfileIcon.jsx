import { useSelector } from "react-redux";
import { selectUserEmail } from "../../redux/selectors";
import s from "./ProfileIcon.module.scss";

const ProfileIcon = ({ isOpen, setIsOpen, color }) => {
	const email = useSelector(selectUserEmail);
	if (!email) return;
	const userLogin = email.split("@")[0];

	const handleSetIsOpen = (e) => {
		e.stopPropagation();
		setIsOpen(!isOpen);
	};

	return (
		<div className={s.profileIcon} onClick={handleSetIsOpen}>
			<div
				className={
					color === "white"
						? `${s.icon} ${s.icon_white}`
						: `${s.icon}`
				}
			>
				<svg
					className={`${s.icon_svg} ${s[color]}`}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					<path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
				</svg>
			</div>
			<div className={s.info}>
				<p className={`${s.info__name} ${s[color]}`}>{userLogin}</p>
				<div className={s.info__arrow}>
					<svg
						className={isOpen ? "" : `${s.arrow__rotate_svg}`}
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
