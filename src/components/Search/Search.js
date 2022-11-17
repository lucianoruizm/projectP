import { useState } from "react";
import './Search.css';

export const Search = ({onSearch}) => {

    const [value, setValue] = useState('')
    
    function handleChange(e) {
        setValue(e.target.value);
        onSearch(e);
    }
    return (
     <div className="search-container">
         <input
           className="input-search"
           placeholder="Buscar..."
           type='text'
           onChange={handleChange}
           value={value}
         />
     </div>
    )
}