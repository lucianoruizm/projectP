import { useState } from "react";
import './Search.css';

const Search2 = ({onSearch}) => {

    const [value, setValue] = useState('')
    
    function handleChange(e) {
        setValue(e.target.value);
        onSearch(e);
    }
    return (
     <div className="search-container">
         <input
           className="input-search"
           placeholder="Search..."
           type='text'
           onChange={handleChange}
           value={value}
         />
     </div>
    )
}

export default Search2;