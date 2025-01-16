import React from 'react'
import Items from './Items';


const Food = ({items}) => {
  return (
    <>
        <ul>
        {
          items.map((val,key) =>(
            <Items key={key} foodItmes = {val}/>
          ))
        }
      </ul>
    </>
  )
}

export default Food 