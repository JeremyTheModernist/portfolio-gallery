import React from 'react';
import ItemInformation from '../ItemInformation/ItemInformation.js'

function XXLargeImage(props){
  return(
    <div className="grid__item col-6">
      <ItemInformation id={props.id}/>
    </div>
  )
}

export default XXLargeImage;
