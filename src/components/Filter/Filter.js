import './Filter.css';

export const Filter = ({ onFilter }) => {

    return (
    <div className="btn-container">
        <button className="all-btn" onClick={onFilter} name="All" value="">Todo</button>
        <button className="diapers-btn" onClick={onFilter} name="Diapers" value="Diapers">Pañales</button>
        <button className="crochet-btn" onClick={onFilter} name="Crochet" value="Crochet">Crochet</button>
        <button className="clothes-btn" onClick={onFilter} name="Clothes" value="Clothes">Atuendos</button>
        <button className="others-btn" onClick={onFilter} name="Others" value="Others">Otros</button>
    </div>
  )
}