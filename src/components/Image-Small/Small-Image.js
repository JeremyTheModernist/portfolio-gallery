import React from 'react';
import ItemInformation from '../ItemInformation/ItemInformation.js'

function XSmallImage(props){
  return(
    <div className="grid__item col-2">
       <ItemInformation id={props.id}/>
    </div>
  )
}

export default XSmallImage;
