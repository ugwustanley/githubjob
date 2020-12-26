
import React,{useEffect , createContext , useContext , useState} from 'react'
import axios from 'axios'

export const JobsdataContext = createContext()

export const JobsdataProvider = (props) => {

    const [loading , setLoading] = useState(false)
    const [data , setData]  =  useState([])
    const [keyword , setKeyword] = useState(``)
    const [fulltime , setFulltime] = useState(false)

    useEffect( () => {

        const header =  { headers : {"X-Requested-With": "XMLHttpRequest" }}
        let url = `https://stark-mesa-12909.herokuapp.com/https://jobs.github.com/positions.json?full_time=${fulltime}&${keyword}`
       
        const fetch = async () =>{
           try{
              await setLoading(true)
              let res =  await  axios.get(url , header)
              await setData(res.data)
              await setLoading(false)
           } catch(err){
                console.log(err)
           }
      }     
        fetch()


    }, [keyword , fulltime])

    return (
        <JobsdataContext.Provider value={[data , loading , setKeyword , setFulltime , setData]}>
            {props.children}
        </JobsdataContext.Provider>
    )
}

