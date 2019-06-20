import React from 'react';

function ItemInformation(props){
  return(
    <div className="item__information">
      <h2 className="item__title">{props.title}</h2>
      <h3 className="item__subTitle">{props.subtitle}</h3>
    </div>
  )
}

export default ItemInformation;
