import { Exercises } from "./Exercises/Exercises";
import { Progress } from "./Progress/Progress";

import { Video } from "./Video/Video";

import s from "./AuthorizedCourse.module.scss";

export const AuthorizedCourse = () => {
  return (
    <div className={s.main}>
      <Video />
      <div className={s.workout}>
        <Exercises />
        <Progress />
      </div>
    </div>
  );
};
