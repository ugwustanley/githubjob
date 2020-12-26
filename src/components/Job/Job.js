import React,{useContext , useState , useEffect} from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {JobsdataContext} from '../Context/JobsdataProvider'
import {DetaildataContext} from '../Context/Detaildata'
import Noimage from './img/image-not-found2.jpg'
import './Job.scss'

const Job = ({company, id , title , location , currentPageData , created_at , type , company_logo}) => {
   
   const [data] = useContext(JobsdataContext)
   const [detaildata , setDetaildata] = useContext(DetaildataContext)
   const [detailitem , setDetailitem] = useState([])
   const [newid , setNewid]  = useState()

    // useEffect(() => {
   // setNewid(id)
   // data.map(job => job.id === newid ? setNewid(data): null )
   //  console.log(detailitem)
   // }, [data , id])

  const HandleClick = (e) =>{
    setNewid(id)
    currentPageData.map(job => job.id === id ? (setDetaildata(job)): null )
    //console.log(detaildata)
 }
   

    return (
        <Link to="/detail">
           <div className="job" onClick={ HandleClick} id={id}>
            
            <div className="logo">
                <img src={company_logo === null? Noimage : company_logo} alt=""/>
            </div>
            <div className="job__description">
                <h2>{company}</h2>
                <h1>{title}</h1>
                <button>{type}</button>
                <div className="job__info">
                <p className="job__location">{location}</p>
                <p className="job__creation" >{moment(created_at).format('MMMM Do')}</p>
                </div>
            </div>
           
        </div>
       </Link>
       
    )
}

export default Job;
