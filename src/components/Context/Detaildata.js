import React,{ useState, createContext } from 'react'

export const DetaildataContext = createContext()

export const DetaildataProvider = (props) =>{
  
    const [detaildata , setDetaildata] = useState('')

    return(
        <DetaildataContext.Provider value={[detaildata , setDetaildata]}>
            {props.children}
        </DetaildataContext.Provider>
    )

}