import React, { useState } from "react";
import { data as productList } from './components/data';
import './App.css';

import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import SlideshowGallery from "./components/SlideshowGallery/SlideshowGallery";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  let [fetchedData, updateFetchedData] = useState([ ...productList]);

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

  return (
    <div className="App">
      <Navbar />
      <SlideshowGallery />
      <Search onSearch={handleSearch} />
      <h1>Nuestros Productos</h1>
      <div className="container-1">
        <Card results={fetchedData} />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;