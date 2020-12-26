import React ,{useContext , useState , useEffect} from 'react'
import ReactPaginate from 'react-paginate'
import {JobsdataContext} from '../Context/JobsdataProvider'
import Loading from '../Loading/Loading'
import Job from '../Job/Job'
import './Jobs.scss'

const Jobs = () => {
    

    const [data2 , loading , setKeyword , setFulltime , fulltime]  = useContext(JobsdataContext)
    const [newdata , setNewdata] = useState(data2)
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 5;
    const offset = currentPage * PER_PAGE;
    const currentPageData = data2.slice(offset, offset + PER_PAGE)
    const pageCount = Math.ceil(data2.length / PER_PAGE);
     
   // useEffect(() => {
   //    if(fulltime){
   //        data2.filter(data => data.type !== "Full Time")
   //    }
   // }, [fulltime])

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }
   

    if(loading === true ){
        return(
            <Loading />
        )
    }

    if(loading === false && data2.length === 0){
        return(
            <h2  className="not__found">Sorry, data not found</h2>
        )
    }

    else{
  
    return (
        
        <div className="jobs">

        {currentPageData.map( job => <Job key={job.id} id={job.id} currentPageData = {currentPageData} company={job.company} company_logo={job.company_logo} created_at={job.created_at}  title={job.title} type={job.type} location={job.location} />)}
        
        <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        marginPagesDisplayed={0}
        pageRangeDisplayed={0}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        />
        </div>
    )
 }
}

export default Jobs
