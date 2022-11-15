import './FavoritesCard.css';

export const FavoritesCard = ({ results, exist, loading }) => {

  // const onRemove = ( {id} ) => {
    

  //   // eslint-disable-next-line array-callback-return
  //   // getArray.map((item, key) => {
  //   //   if (item === id) {
  //   //     getArray.splice(key, 1);
  //   //   }
  //   // });

  //   localStorage.removeItem('favorites' + (id));
  //   }

  // const onRemove = (props) => {
  //   localStorage.removeItem('favItem' + (props.id));
  //   localStorage.removeItem('favorites' + (props.id));
  // }

  // const onRemove = (props) => {
  //   const exist = results.find((x) => x.id === product.id);
  //   if(exist.qty === 1) {
  //     setresults(results.filter((x) => x.id !== product.id))
  //   } else {
  //     setresults(
  //       results.map(x =>
  //          x.id === product.id ? {...exist, qty: exist.qty -1} : x))
  //   }
  // }

  let display;
  if(exist){
  display = results.map((x) => {
      let { id, name, price, size, img, description } = x;
          return (
              <div 
                key={id}
                className="cards-container fav-card"
              >
                <div key={id} className="card"
                >
                    <img className="card-img" src={img} alt={name} />
                    <div className="card-body">
                        <div className="card-name">{name}</div>
                        <div className="card-info-container">
                            <div className="card-info"><strong>Precio:</strong>{price}</div>
                            {size? <div className="card-info"><strong>Tamaño:</strong>{size}</div> : ''}
                            <div className="card-info"><strong>Descripción:</strong> {description}</div>
                        </div>
                        <span 
                          className='remove-item' 
                          // onClick={() => onRemove({ id })} 
                        >
                          Eliminar de favoritos
                        </span>
                    </div>
                </div>
              </div>
          );
      });
  } else {
      display = <div className='message'>No se encuentra una lista de favoritos, podes agregar los productos haciendo click en su ❤</div>
  }
  return <>{display}</>
}

