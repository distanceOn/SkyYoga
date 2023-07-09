import s from './Workout.module.scss'

export const Workout = () => {
const selections = [' Красота и здоровье',
                    'Йога на каждый день',
                    ' 2 день']
return(
    <ul className={s.selections}>
        {selections.map((item,i) => {
            return(
                <li className={s.li}>
                    <span>{item}</span>
                </li>
            )
        
        })}
    </ul>
)
}