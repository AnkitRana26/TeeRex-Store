import React, { useState } from "react";

const Context = React.createContext();






export const ContextProvider =({children})=>{
    const [products,setProducts] = useState([]);
    
    const productsHandler =(products)=>{
        setProducts(products);
    }

    return <Context.Provider value={{products,productsHandler}}>
        {children}
    </Context.Provider>

} 

export default Context;
