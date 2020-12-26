import React,{useContext , useState , useEffect} from 'react'
import LocationSearch from '../LocationSearch/LocationSearch'
import {JobsdataContext} from '../Context/JobsdataProvider'
import './CheckInput.scss'
import { convertToObject } from 'typescript'

const CheckInput = () => {

    const [word , setWord] = useState(``)
    const [select , setSelect] = useState(false)
    const [data2, loading , setKeyword , setFulltime , setData]  = useContext(JobsdataContext)
  

 
   

    const HandleChange = (e)=>{

        setWord(e.target.value)
        let words = e.target.value
        setKeyword(`location=${words}`)
        }

    const FulltimeHandler = (e) =>{
           if(e.target.checked){
             setFulltime(true)
           }else{
               setFulltime(false)
           }
        }

    return (
        <div className="checkinput">
            <div className="fulltime">
            <input type="checkbox" name="fulltime__input" className="fulltime__input" onClick={FulltimeHandler} id="fulltime__input"/>
            <span className="fulltime__input2"></span>
            <label htmlFor="fulltime__input" className="fulltime__label">Full time</label>
            </div>
            <h2 className="checkinput__header">LOCATION</h2>
            
            <LocationSearch HandleChange={HandleChange} />

            <div className="city">
            <input type="radio" name="city__input" className="city__input" onClick={HandleChange} value = "london" id="city__input"/>
            <span className="city__input2"></span>
            <label htmlFor="city__input" className="city__label" >London</label>
            </div>

            <div className="city">
            <input type="radio" name="city__input" onClick={HandleChange} value="Amsterdom" className="city__input" id="city__input"/>
            <span className="city__input2"></span>
            <label htmlFor="city__input" className="city__label">Amsterdom</label>
            </div>

            <div className="city">
            <input type="radio" name="city__input" onClick={HandleChange} value='new york' className="city__input" id="city__input"/>
            <span className="city__input2"></span>
            <label htmlFor="city__input" className="city__label">New York</label>
            </div>

            <div className="city">
            <input type="radio" name="city__input" onClick={HandleChange} value="berlin" className="city__input" id="city__input"/>
            <span className="city__input2"></span>
            <label htmlFor="city__input" className="city__label">Berlin</label>
            </div>

        </div>
    )
}

export default CheckInput
