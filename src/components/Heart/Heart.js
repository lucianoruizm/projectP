import { useState } from "react";
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import './Heart.css';

export const Heart = ({ productCard })=>{

    const [favs, setFavs] = useState([]);
    // let className = 'heart__icon';

    // // function handleClick (e) {
    // //   e.preventDefault();
    // //   setLike(!like);
    // //   if(like === true) {
    // //     addProductLocalStorage(card);
    // //   }
    // // }

    // // if (like === true) {
    // //   className += ' active';
    // // }

    // const onAdd = (product) => {
    //   const exist = favs.find(x => x.id === product.id);
    //   if(exist){
    //     setFavs([...favs])
    //     console.log('ya esta agregado');
    //   } else {
    //   setFavs([...favs, {...product}]);
    //   console.log('agregado a favs');
    //   localStorage.setItem("favs", JSON.stringify(productCard.id));

    //   }
    //   console.log(favs);
    // }

    // function getProductLocalStorage() {
    //   let productList;
    //   if(localStorage.getItem('productList') === null){
    //     productList = [];
    //   } else{
    //     productList = JSON.parse(localStorage.getItem('productList'))
    //     console.log(productList);
    //   }
    //   return productList;
    // }

    // function addProductLocalStorage(product) {
    //   let productList = getProductLocalStorage()
    //   productList.push(product);
    //   localStorage.setItem('productList', JSON.stringify(productList))
    //   console.log(productList);
    // }

    const onAdd = () => {
      let array = favs;
      let addArray = true;
      array.map((item, key) => {
        if (item === productCard.id) {
          array.splice(key, 1);
          addArray = false;
        }
        return addArray;
      });
      if (addArray) {
        array.push(productCard.id);
      }
      setFavs([...array])
      console.log(addArray);
      console.log(favs);

      localStorage.setItem("favorites", JSON.stringify(favs));

      let storage = localStorage.getItem('favItem' + (productCard.id) || '0');
      if (storage == null) {
        localStorage.setItem(('favItem' + (productCard.id)), JSON.stringify(productCard));
      } else {
        localStorage.removeItem('favItem' + (productCard.id));
      }
    }

    
  
    return (
      <>
        {favs.includes(productCard.i) ? (<BsSuitHeartFill 
          onClick={() => onAdd({ productCard })}
          style={{ color: 'red'}}
        />
        ) : (
              <BsSuitHeart
              onClick={() => onAdd({ productCard })}
                style={{ color: 'red'}} 
              />
            )}
      </>
    )
}