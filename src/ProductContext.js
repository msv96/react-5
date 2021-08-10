import React, { useState } from 'react'

let ProductContext = React.createContext();

export default ProductContext;

export const ProductProvider = ({children}) => {
    const [productlist, setProductList] = useState([]);
    return (
        <ProductContext.Provider value={{productlist,setProductList}}>
            {children}
        </ProductContext.Provider>
    );
}