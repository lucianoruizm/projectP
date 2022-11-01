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
import { FavoritesPage } from "./pages/FavoritesPage";

function App() {
  let [fetchedData, updateFetchedData] = useState([ ...productList]);

  function handleSearch(e) {
    const query = e.target.value;
    const queryLowerCase = query.toLowerCase();

    if (!!queryLowerCase) {
      const search = productList.filter((product) => {
        return (
          product.name.toLowerCase().includes(queryLowerCase) ||
          product.description.toLowerCase().includes(queryLowerCase)
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
      <h1 id="h1">Nuestros Productos</h1>
      <Search onSearch={handleSearch} />
      <Filter onFilter={handleFilter}/>
      <div className="grid-container">
        <Card results={fetchedData} />
      </div>
      <div>
        <FavoritesPage />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;