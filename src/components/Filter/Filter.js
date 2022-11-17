// import { useState } from "react";
import './Filter.css';


export const Filter = ({ onFilter }) => {
  
    // const [value, setValue] = useState('')

    // function handleClick (e){
        // const op = e.target.name;
        // setValue(e.target.value)
        // switch (op) {
        //     case "Diapers":
        //         setValue("Diapers");
        //         console.log("diapers")
        //         break;
        //     case "Crochet":
        //         setValue("Crochet");
        //         console.log("crochet")
        //         break;
        //     case "Clothes":
        //         setValue("Clothes");
        //         console.log("clothes")
        //         break;
        //     default:
        // }
    //     onFilter(e);
    // }

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