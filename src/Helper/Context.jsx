import { createContext, useEffect, useState } from "react";

export const productContext=createContext(null)

export const ProductContextProvider=({children})=>{
    const [dataToBeDisplayed,setDataToBeDisplayed]=useState([])
   
    const categories=[
        'Bags',
        'Watches',
        'Sports',
        'Sunglasses'
    ]
    
    const data=[
        {name:'Prada',category:'Bags'},
        {name:'Gucci',category:'Bags'},
        {name:'Guess',category:'Bags'},
        {name:'Rolex',category:'Watches'},
        {name:'Timex',category:'Watches'},
        {name:'Nike',category:'Sports'},
        {name:'Adidas',category:'Sports'},
        {name:'Fila',category:'Sports'},
        {name:'Ray Ban',category:'Sunglasses'},
        {name:'Aldo',category:'Sunglasses'},
        {name:'Polaroid',category:'Sunglasses'},
    ];
    
    return <productContext.Provider value={{dataToBeDisplayed,setDataToBeDisplayed,categories,data}}>
        {children}
    </productContext.Provider>
}