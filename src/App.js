import React, { useState } from "react";
import { data as productList } from './components/data';
import './App.css';

// import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
// import Pagination from "./components/Pagination/Pagination";
// import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {
  // let [diapers, updateDiapers] = useState("");
  // let [fabrics, updateFabrics] = useState("");
  // let [clothing, updateClothing] = useState("");
  // let [search, setSearch] = useState(""); para cuando se aplique fetch a la api
  let [fetchedData, updateFetchedData] = useState([ ...productList]);

  // Para consumir la futura api, primero en package.json --->  "proxy": "http://localhost:8000"
  // let api = "http://localhost:8000/product"; Luego se agregaran variables haciendo referencias al filtrado por nombre, paginas y categorias

  // useEffect(() => {
  //   (async function () {
  //     let data = await fetch(api).then((res) => res.json());
  //     updateFetchedData(data);
  //   })();
  // }, [api]);

  function handleSearch(e) {
    const query = e.target.value;

    if (!!query) {
      const search = productList.filter((product) => {
        return (
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        );
      });

      updateFetchedData(search);
    } else {
      updateFetchedData(productList)
    }
}

// function handleChange(e) {
//   const query = e.target.name;

//   if (!!query) {
//     const category = productList.filter((product) => {
//       return (
//         product.diapers.toLowerCase().includes(query) ||
//         product.fabrics.toLowerCase().includes(query) ||
//         product.clothing.toLowerCase().includes(query)
//       );
//     });

//     updateFetchedData(category);
//   } else {
//     updateFetchedData(productList)
//   }
// }



  return (
    <div className="App">
      <Navbar />
      <Search onSearch={handleSearch} />
        {/* <Filter
          // updateDiapers={updateDiapers}
          // updateFabrics={updateFabrics}
          // updateClothing={updateClothing}
        /> */}
        <h1>Nuestros Productos</h1>
        <div className="container-1">
          <Card results={fetchedData} />
        </div>
    </div>
  );
}

export default App;