import Cards from "../../../components/Cards/Cards";
import s from "./MyCourses.module.scss";

const MyCourses = () => {
	return (
		<div className={s.courses}>
			<h2 className={s.courses__h2}>Мои курсы</h2>
			<Cards page="profile" />
		</div>
	);
};

export default MyCourses;
