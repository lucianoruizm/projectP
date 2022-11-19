import './FavoritesCard.css';

export const FavoritesCard = ({ results, exist }) => {

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

