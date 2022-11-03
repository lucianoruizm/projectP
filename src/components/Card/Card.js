import { useEffect, useState } from "react";
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import './Card.css';

const Card = ({ results }) => {
    // Favorites
    const [favs, setFavs] = useState([]);
    const getArray = JSON.parse(localStorage.getItem('favorites') || '0');

    useEffect(() => {
      if (getArray !== 0) {
        setFavs([...getArray]);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onAdd = (props) => {
        let array = favs;
        let addArray = true;
        // eslint-disable-next-line array-callback-return
        array.map((item, key) => {
          if (item === props.i) {
            array.splice(key, 1);
            addArray = false;
          }
        });
        if (addArray) {
          array.push(props.i);
        }
        setFavs([...array])
        console.log(addArray);
        console.log(favs);
  
        localStorage.setItem("favorites", JSON.stringify(favs));
  
        let storage = localStorage.getItem('favItem' + (props.i) || '0');
        if (storage == null) {
          localStorage.setItem(('favItem' + (props.i)), JSON.stringify(props.x));
        } else {
          localStorage.removeItem('favItem' + (props.i));
        }
    }
    // Favourites end--  

    let display;

    if (results) {
        display = results.map((x, i) => {
            let { id, name, price, size, img, description } = x;

            return (
                <div 
                  key={id}
                  className="cards-container"
                >
                  <div className="card"
                  >
                      <img className="card-img" src={img} alt="" />
                      <div className="card-body">
                          <div className='heart'>
                              <div className="card-name">{name}</div>
                                {favs.includes(i) ? (
                                      <BsSuitHeartFill 
                                        onClick={() => onAdd({ x, i })}
                                        style={{ color: 'red'}}
                                      />
                                    ) : (
                                          <BsSuitHeart
                                            onClick={() => onAdd({ x, i })}
                                            style={{ color: 'red'}} 
                                          />
                                )}
                          </div>
                          <div className="card-info-container">
                              <div className="card-info"><strong>Precio:</strong> {price}</div>
                              <div className="card-info"><strong>Tamaño</strong>: {size}</div>
                              <div className="card-info"><strong>Descripción:</strong> {description}</div>
                          </div>
                      </div>
                  </div>
                </div>
            );
        });
    }else {
        display = "No products Found :/";
    }
    
    return <>{display}</>
}

export default Card;