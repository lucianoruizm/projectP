import { useState } from "react";
import { BsFillSuitHeartFill } from 'react-icons/bs';
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
      <BsFillSuitHeartFill className={className} onClick={handleClick} />
    )
  }
  
  export {Heart}