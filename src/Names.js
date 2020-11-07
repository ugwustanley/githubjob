import React from 'react';
import SingleName from './singleName'

const Name = (props) =>{
  return(
  <div>
      {props.data.map( unitData => <SingleName unitData = {unitData} />)}
  </div>
  )
}
export default Name;