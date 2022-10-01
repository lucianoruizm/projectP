import './Card.css';

const Card = ({ results }) => {
    let display;

    if (results) {
        display = results.map((x) => {
            let { id, name, price, size, img, description } = x;

            return (
                <div 
                  key={id}
                  className="cards-container"
                >
                  <div className="card-container"
                  >
                      <img className="card-img" src={img} alt="" />
                      <div className="card-body">
                          <div className="card-name">{name}</div>
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