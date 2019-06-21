import React from 'react';
import ItemInformation from '../ItemInformation/ItemInformation.js';
import ItemImage from '../ItemImage/ItemImage.js';

function MediumImage(props){
  return(
    props.empty ?
    <div className="grid__item grid__item--empty col-3">
      <ItemImage id={props.id}/>
      <ItemInformation id={props.id}/>
    </div>
    :
    <div className="grid__item col-3">
      <ItemImage id={props.id}/>
      <ItemInformation id={props.id}/>
    </div>
  )
}

export default MediumImage;
