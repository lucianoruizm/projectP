import { useState } from "react";


const Filter = ({onFilter}) => {
  
    const [value, setValue] = useState('')

    function handleClick (e){
        // const op = e.target.name;
        setValue(e.target.value)
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
    <div>
        <button onClick={handleClick} name="All" value="">All</button>
        <button onClick={handleClick} name="Diapers" value="Diapers">Diapers</button>
        <button onClick={handleClick} name="Crochet" value="Crochet">Crochet</button>
        <button onClick={handleClick} name="Clothes" value="Clothes">Clothes</button>
    </div>
  )
}

export default Filter;