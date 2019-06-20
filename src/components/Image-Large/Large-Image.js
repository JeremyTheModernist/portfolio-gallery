import React from 'react';
import ItemInformation from '../ItemInformation/ItemInformation.js';
import ItemImage from '../ItemImage/ItemImage.js';

function LargeImage(props){
  return(
    <div className="grid__item col-3">
       <ItemInformation id={props.id}/>
       <ItemImage id={props.id}/>
    </div>
  )
}

export default LargeImage;
