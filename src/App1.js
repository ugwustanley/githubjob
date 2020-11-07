import React,{useState} from 'react';
import Name from './Names'

const App = () =>{
  const [data , setData] = useState([
    {
     name:'ugwu stanley',
     age: 13,
    },
    {
     name:'ozioko chioma',
     age: 17,
    }
  ])
  return(
    <Name />
  )
}
export default App;