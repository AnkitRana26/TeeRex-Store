import React, { useContext, useEffect } from "react";
import "./Home.css";
import { filters, filterCategory } from "../../utils/filters";
import Context from "../../context/Context";
import { fetchData } from "../../utils/fetch";
import ProductCard from "../../components/HomeComponent/ProductCard";


const Home = () => {
  
  const {products,productsHandler} = useContext(Context);

  useEffect(()=>{
    fetchData(process.env.REACT_APP_FETCH_URL)
    .then(res=>productsHandler(res))
    .catch(err=>console.log(err))
  },[])

  return (
    <div id="productsMainContainer">
      <div id="searchContainer">
        <input id="searchInput" type="text" placeholder="Search Product" spellCheck="false" />
        <button id="searchIconButton">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div id="productSection">
        <div id="filterContainer">

          {/* Maping Filter Category and Then showing Filters*/}
          {filterCategory.map((ele,idx) => {
            return (
              <div key={`category-${idx}`}>
                <h4>{ele.toUpperCase()}</h4>
                <div>
                  {
                    filters.filter((obj) => {
                      return obj.category === ele;
                    })
                      .map((ele,idx) => {
                        return <div key={`filters-${idx}`} className="checkboxContainer">
                          <input type='checkbox' />
                          <p>{ele.value}</p>
                        </div>;
                      })
                  }
                </div>
              </div>
            );
          })}
        </div>
        <div id='productsContainer'>
          {/* Products Mapping */}
          {
            products.map((ele)=>{
              return <ProductCard key={ele.id} imageURL={ele.imageURL} />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
