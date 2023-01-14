import React, { useContext, useEffect } from "react";
import "./Home.css";
import { filters, filterCategory } from "../../utils/filters";
import Context from "../../context/Context";
import { fetchData } from "../../utils/fetch";
import ProductCard from "../../components/HomeComponent/ProductCard";
import Filter from "../../components/HomeComponent/Filter";


const Home = () => {

  const { products, productsHandler } = useContext(Context);

  useEffect(() => {
    fetchData(process.env.REACT_APP_FETCH_URL)
      .then(res => productsHandler(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <div id="productsMainContainer">
      <div id="searchContainer">
        <input id="searchInput" type="text" placeholder="Search Product" spellCheck="false" />
        <button id="searchIconButton">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div id="productSection">
        <Filter filters={filters} filterCategory={filterCategory} />
        <div id='productsContainer'>

          {
            /* Products Mapping */
            products.map((ele) => {
              return <ProductCard key={ele.id} imageURL={ele.imageURL} name={ele.name} price={ele.price} />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
