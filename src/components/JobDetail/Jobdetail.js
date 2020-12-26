import React,{usestate , useContext} from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { DetaildataContext }  from '../Context/Detaildata'
import notfound from './img/image-not-found2.jpg'
import back from './img/arrow_right_alt-24px.svg'
import './Jobdetail.scss'

const Jobdetail = () => {

    const [detaildata , setDetaildata] = useContext(DetaildataContext)

    return (
        <div className="jobdetail">
           <section className="section1">
               <Link to="/">
               <button className="back_btn"> <img src={back} className="back__arrow" alt="back arrow"/> Back to search</button>
               </Link>
              
                <h2 className="section1__header">how to apply</h2> 
                <div className="section1__description" dangerouslySetInnerHTML={{__html: detaildata.how_to_apply}} >

                </div>
           </section>
           <section className="section2">
              
              <h2>{detaildata.title}</h2> <button>{detaildata.type}</button>
              <p className="time">{moment(detaildata.created_at).format('MMMM Do')}</p>

              <div className="section2__company">
                <img src={detaildata.company_logo !== null ? detaildata.company_logo : notfound } className="company__logo" alt=""/>
                <div className="section2__company__data">
                        <h3>{detaildata.company}</h3>
                         <p className="created_at">{detaildata.location}</p>
                </div>
              </div>
              <div  dangerouslySetInnerHTML={{__html: detaildata.description}} className="decription">

              </div>
            
           </section>
        </div>
    )
}

export default Jobdetail
