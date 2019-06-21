import React from 'react';
import Consumer from '../../AppState.js'

function Quote(props){
  return(
    <div className={`col-${props.colNum}`}>
      <h1 className={`grid__quote ${props.styleName}`}>
        {props.children}
      </h1>
    </div>
  )
}

export default Quote;
