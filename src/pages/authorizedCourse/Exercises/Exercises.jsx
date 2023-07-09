import s from './Exercises.module.scss'

export const Exercises = () => {
    const exercisesTypes = ['Наклон вперед (10 повторений)', 'Наклон назад (10 повторений)', 'Поднятие ног, согнутых в коленях (5 повторений)']
    return(
        <section className={s.container}>
       <h2 className={s.heading}>Упражнения</h2>
       <ul className={s.ul} >
        {exercisesTypes.map((item) => 
        {
            return(
            <li className={s.li}>{item}</li>

        )})}
       </ul>
       <button className={s.button}>Заполнить свой прогресс</button>
        </section>
        

    )
}