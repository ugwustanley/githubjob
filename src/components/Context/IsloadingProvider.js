import React,{createContext , useState}  from 'react'

export const IsloadingContext = createContext()

export const IsloadingProvider = (props) =>{

const    [loading , setLoading]  =  useState(false)

    return(
        <IsloadingContext.Provider value={[loading , setLoading]}>
            {props.children}
        </IsloadingContext.Provider>
    )
}

