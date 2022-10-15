// import { useState } from "react";
import './Filter.css';


const Filter = ({onFilter}) => {
  
    // const [value, setValue] = useState('')

    function handleClick (e){
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
        onFilter(e);
    }

    return (
    <div className="btn-container">
        <button className="all-btn" onClick={handleClick} name="All" value="">Todo</button>
        <button className="diapers-btn" onClick={handleClick} name="Diapers" value="Diapers">Pañales</button>
        <button className="crochet-btn" onClick={handleClick} name="Crochet" value="Crochet">Crochet</button>
        <button className="clothes-btn" onClick={handleClick} name="Clothes" value="Clothes">Atuendos</button>
    </div>
  )
}

export default Filter;