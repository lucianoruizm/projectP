// import { useEffect, useState } from "react";
// import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
// import './Heart.css';

// export const Heart = ({ props })=>{

//     const [favs, setFavs] = useState([]);
//     const getArray = JSON.parse(localStorage.getItem('favorites') || '0');

//     useEffect(() => {
//       if (getArray !== 0) {
//         setFavs([...getArray]);
//       }
//     }, []);
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

//     const onAdd = (props) => {
//       let array = favs;
//       let addArray = true;
//       array.map((item, key) => {
//         if (item === props.productI) {
//           array.splice(key, 1);
//           addArray = false;
//         }
//       });
//       if (addArray) {
//         array.push(props.productI);
//       }
//       setFavs([...array])
//       console.log(addArray);
//       console.log(favs);

//       localStorage.setItem("favorites", JSON.stringify(favs));

//       let storage = localStorage.getItem('favItem' + (props.productI) || '0');
//       if (storage == null) {
//         localStorage.setItem(('favItem' + (props.productI)), JSON.stringify(props.productProps));
//       } else {
//         localStorage.removeItem('favItem' + (props.productI));
//       }
//     }    
  
//     return (
//       <>
      
//       </>
//     )
// }