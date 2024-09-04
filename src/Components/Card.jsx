
import style from './Card.module.css'


const Card = ({photo})=>{
  return (
    <div className={style.cardBox}>
       <div className={style.imageBox}>
        <img src={photo.image} alt="" />
       </div>
       <div className={style.content}>
        <p>{photo.title}</p>
       </div>

    </div>
  )
}

export default Card;