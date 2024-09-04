import style from './Scroll.module.css'

import Card from './Card';
import { FaAngleLeft ,  FaAngleRight} from "react-icons/fa";
import { useState } from 'react';


const Scroll = ({photo})=>{

  const [index,setIndex] = useState(0)

    function leftClickHandler(){
      if (index-1 < 0) {
        setIndex(photo.length-1)
      }
      else{
        setIndex(index-1)
      }
    }

    function rightClickHandler(){
      if(index+1 >= photo.length){
        setIndex(0)
       }
       else{
        setIndex(index+1)
       }
    }

    function surpriseClickHandler(){
     let random = Math.floor(Math.random()*photo.length)
     setIndex(random)
    }


  return (
    <div className={style.ScrollBox}>
      <Card photo={photo[index]}></Card>

     <div className={style.btn}>
      <div className={style.leftRight}>
        <button onClick={leftClickHandler}><FaAngleLeft /></button>
        <button onClick={rightClickHandler}><FaAngleRight /></button>
       </div>
       <div className={style.surprise}>
        <button className={style.surpriseBtn}  onClick={surpriseClickHandler}>Surprise</button>
       </div>
       </div>
    </div>
  )
}

export default Scroll;