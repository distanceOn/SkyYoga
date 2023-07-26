import s from "./ProfileIcon.module.scss";
import { useNavigate } from "react-router-dom";

const ProfileIcon = () => {
  const navigate = useNavigate();
  const handleProfile = () => navigate("/profile");

  return (
    <div className={s.profileIcon} onClick={handleProfile}>
      <div className={s.icon}></div>
      <div className={s.info}>
        <p className={s.info__name}></p>
        <div className={s.info__arrow} onClick={(e) => e.stopPropagation()}>
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3552 1.03308L6.67761 6.7107L0.999999 1.03308"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProfileIcon;
