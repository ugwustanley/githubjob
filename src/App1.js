import React,{useState} from 'react';
import Name from './Names'

const App = () =>{
  const [data , setData] = useState([
    {
     name:'Ijeoma Belinda',
     age: 13,
    },
    {
     name:'Ozioko Chioma',
     age: 17,
    }
  ])
  return(
    <Name />
  )
}
export default App;