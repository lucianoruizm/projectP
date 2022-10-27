import { useState } from "react";
import { BsFillSuitHeartFill } from 'react-icons/bs';
import './Heart.css';

export const Heart = ({ productCard })=>{

    const [favs, setFavs] = useState([]);
    let className = 'heart__icon';

    // function handleClick (e) {
    //   e.preventDefault();
    //   setLike(!like);
    //   if(like === true) {
    //     addProductLocalStorage(card);
    //   }
    // }

    // if (like === true) {
    //   className += ' active';
    // }

    const onAdd = (product) => {
      const exist = favs.find(x => x.id === product.id);
      if(exist){
        setFavs([...favs])
        console.log('ya esta agregado');
      } else {
      setFavs([...favs, {...product}]);
      console.log('agregado a favs');
      addProductLocalStorage(productCard);
      }
    }

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
      let productList = getProductLocalStorage()
      productList.push(product);
      localStorage.setItem('productList', JSON.stringify(productList))
    }
  
    return (
      <BsFillSuitHeartFill className={className} onClick={onAdd} />
    )
}