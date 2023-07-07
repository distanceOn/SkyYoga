import Header from "./Header/Header";
import Info from "./Info/Info";
import MyCourses from "./MyCourses/MyCourses";
import s from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={s.profile}>
      <Header />
      <Info />
      <MyCourses />
    </div>
  );
};

export default Profile;
