import { createContext } from "react";

export const ShopContext = createContext<any>(null)

const ShopContextProvider =(props:any)=>{

    const value = {

    }
    return(
        <ShopContext.Provider value={value} >{props.children}</ShopContext.Provider>
    )
}

export default ShopContext.Provider;