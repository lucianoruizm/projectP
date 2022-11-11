import { useState } from "react";
import Navbar from "../components/Navbar/Navbar"
import Card from "../components/Card/Card"
import Filter from "../components/Filter/Filter"
import Search from "../components/Search/Search"
import SlideshowGallery from "../components/SlideshowGallery/SlideshowGallery"
import { data as productList } from "../data";
import './LandingPage.css';

export const LandingPage = () => {

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
    <div>
        <Navbar />
        <div id="gallery">
          <SlideshowGallery />
        </div>
        <h1 id="h1">Nuestros Productos</h1>
        <Search onSearch={handleSearch} />
        <div className="filter-cards-containers">
          <div class="filter-container">
            <Filter onFilter={handleFilter}/>
          </div>
          <div className="grid-container">
            <Card results={fetchedData} />
          </div>
        </div>
    </div>
  )
}
