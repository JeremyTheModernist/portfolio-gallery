import React from 'react';
import ItemInformation from '../ItemInformation/ItemInformation.js'

function LargeImage(props){
  return(
    <div className="grid__item col-3">
       <ItemInformation id={props.id}/>
    </div>
  )
}

export default LargeImage;
