
import React,{useState , useContext} from 'react'
import {JobsdataContext}  from '../Context/JobsdataProvider'
import icon from './img/work_outline-24px.svg'
import './Search.scss'

const Search = () => {

    const [data , loading , setKeyword]  = useContext(JobsdataContext)
    const [word , setWord] = useState(``)


    const HandleClick = (e) =>{
       setKeyword(`search=${word}`)
       setWord('')
    }

    return (
        <div className="searchbox">
             <div className="searchbox__icon">                
               <img src={icon} alt="search icon"/>
             </div>
                 <input type="text" className="searchbox__input" name="search__box" id="searchbox__input" onChange={(e) => setWord(e.target.value)} value={word}  placeholder="Title, companies, expertise or benefits"/>
              <input type="button" className="searchbox__btn" id="searchbox__btn" onClick={HandleClick} value="Search"/>

        </div>
    )
}

export default Search;

