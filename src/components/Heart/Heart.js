import { useState } from "react";
import { BsFillSuitHeartFill } from 'react-icons/bs';
import './Heart.css';

const Heart = ({ card })=>{

    const [like, setLike] = useState(false);
    let className = 'heart__icon';

    function handleClick (e) {
      e.preventDefault();
      addProductLocalStorage(card);
      setLike(!like);
    }

    if (like === true) {
      className += ' active';
    }

    // function handleClick (e) {
    //   e.preventDefault();
    //   setLike(!like);
      // if (like === true) {
      //   addProductLocalStorage(card);
      // }
    // }

   

    function getProductLocalStorage() {
      let productList;
      if(localStorage.getItem('productList') === null){
        productList = [];
      } else{
        productList = JSON.parse(localStorage.getItem('productList'))
      }
      return productList;
    }

    function addProductLocalStorage(product) {
      const productList = getProductLocalStorage();
      productList.push(product);
      localStorage.setItem('productList', JSON.stringify(productList))
      console.log(productList)
    }
  
    return (
      <BsFillSuitHeartFill className={className} onClick={handleClick} />
    )
  }
  
  export {Heart}