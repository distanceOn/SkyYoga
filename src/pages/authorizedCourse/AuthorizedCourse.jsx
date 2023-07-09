import { Exercises } from "./Exercises/Exercises"
import { Progress } from "./Progress/Progress"
import { Title } from "./Title/Title"
import { Video } from "./Video/Video"
import { Workout } from "./selectedWorkout/Workout"
import s from './AuthorizedCourse.module.scss'

export const AuthorizedCourse = () => {
    return(
        <div className={s.main}>
        <Title/>
        <Workout />
        <Video/>
        <div className={s.workout}>
        <Exercises/>
        <Progress/>
        </div>
        
        </div>
         
        
       
    )
}