import React,{useState , useEffect} from 'react';
import Name from './Names'

const App = () =>{
  const [data , setData] = useState([
    {
     name:'Ugwu Stanley',
     age: 13 },
      {
     name:'Ozioko Chioma',
     age: 17
    }
  ])

  useEffect(() => {
   setData([
    {
     name:'Ugwu Stanley',
     age: 13
    },
    {
     name:'Ozioko Chioma',
     age: 17
    },
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