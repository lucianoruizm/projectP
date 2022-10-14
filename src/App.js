import React, { useState } from "react";
import { data as productList } from './components/data';
import './App.css';

import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import SlideshowGallery from "./components/SlideshowGallery/SlideshowGallery";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Filter from "./components/Filter/Filter";

function App() {
  let [fetchedData, updateFetchedData] = useState([ ...productList]);

  function handleSearch(e) {
    const query = e.target.value;
    query.toUpperCase();

    if (!!query) {
      const search = productList.filter((product) => {
        return (
          product.name.includes(query) ||
          product.description.includes(query)
        );
      });

      updateFetchedData(search);
    } else {
      updateFetchedData(productList);
    }
  }

  function handleFilter(e) {
    const query = e.target.value;
    console.log(query)

    if (!!query) {
      const filterCategory = productList.filter((product) => {
        return (
          product.category.includes(query)
        );
      });
  
      updateFetchedData(filterCategory);
    } else {
      updateFetchedData(productList);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div id="gallery">
        <SlideshowGallery />
      </div>
      <Search onSearch={handleSearch} />
      <h1 id="h1">Nuestros Productos</h1>
      <Filter onFilter={handleFilter}/>
      <div className="container-1">
        <Card results={fetchedData} />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;