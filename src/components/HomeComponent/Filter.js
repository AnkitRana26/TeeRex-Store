import React from 'react'
import "./Filter.css"

const Filter = ({filters,filterCategory}) => {
    
    return (
        <div id="filterContainer">

            {/* Maping Filter Category and Then showing Filters*/}
            {filterCategory.map((ele, idx) => {
                return (
                    <div key={`category-${idx}`}>
                        <h4>{ele.toUpperCase()}</h4>
                        <div>
                            {
                                filters.filter((obj) => {
                                    return obj.category === ele;
                                })
                                    .map((ele, idx) => {
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
    )
}

export default Filter