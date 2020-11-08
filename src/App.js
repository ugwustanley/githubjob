import React,{useState , useEffect} from 'react';
import Name from './Names'

const App = () =>{
  const [data , setData] = useState([
    {
     name:'Ijeoma Belinda',
     age: 13 },
      {
     name:'Ozioko Chioma',
     age: 17
    }
  ])

  useEffect(() => {
   setData([
   ...data,
    {
      name:'Eze ifechi',
      age: 17,
     }
  ])
  },[])
  return(
    <Name data = {data} />
  )
}
export default App;