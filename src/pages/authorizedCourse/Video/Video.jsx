import s from './Video.module.scss'
import image from '../../../assets/imgs/playBtn.png'

export const Video = () => {
    return(
        <div className={s.video__container} >
            <video className={s.video} src="#"  >
                
            </video>
          
             <img className={s.play__button} width="156" src={image} alt="play" />
                
        </div>
    )
}