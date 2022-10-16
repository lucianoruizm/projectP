import { useState } from "react";
import { AiOutlineHeart } from 'react-icons/ai';
import './Heart.css';

const Heart = ()=>{

    const [like, setLike] = useState(false);
  
    let className = 'heart__icon';
  
    function handleClick () {
      setLike(!like);
    }
  
    if (like === true) {
      className += ' active';
      console.log(like)
      console.log('pintado')
    }
  
    return (
      <AiOutlineHeart className={className} onClick={handleClick} />
    )
  }
  
  export {Heart}