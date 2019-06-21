import React from 'react';
import Consumer from '../../AppState.js'

function Quote(props){
  return(
    <div className="col-5">
      <h1 className="grid__quote">
        {props.children}
      </h1>
    </div>
  )
}

export default Quote;
