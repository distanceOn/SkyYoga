import Header from "./Header/Header";
import Info from "./Info/Info";
import s from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={s.profile}>
      <Header />
      <Info />
    </div>
  );
};

export default Profile;
