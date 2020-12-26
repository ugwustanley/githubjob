import React,{useContext , useState} from 'react'
import icon2 from './img/travel_explore-24px (5).svg'
import './LocationSearch.scss'

const LocationSearch = ({HandleChange}) => {

   
    

    return (
        <div className="locationsearch">
           <div className="locationsearch__iconbox">
           <img src={icon2} alt="icon2" className="locationsearch__icon" />
           </div>
           <input type="text" onChange={HandleChange} id="locationsearch__input" className="locationsearch__input" placeholder="City, state, zip code or country" />
        </div>
    )
}

export default LocationSearch;
