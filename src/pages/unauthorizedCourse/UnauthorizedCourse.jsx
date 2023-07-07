import s from "./UnauthorizedCourse.module.scss";

import { Title } from "./components/Title/Title";
import { Description } from "./components/Description/Description";
import { Directions } from "./components/Directions/Directions";
import { Summary } from "./components/Summary/Summary";
import { Enrolling } from "./components/Enrolling/Enrolling";
import Header from "./components/Header/Header";

const UnauthorizedCourse = () => {
  //все данные будут с бэка из пропса

  return (
    <div className={s.container}>
      <Header />
      <Title />
      <Description />
      <Directions />
      <Summary />
      <Enrolling />
    </div>
  );
};

export default UnauthorizedCourse;