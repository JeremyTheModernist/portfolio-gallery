import React from 'react';
import Consumer from '../../AppState.js'

function Quote(props){
  return(
    <div>
      <h1 className="grid__quote col-5">
        {props.children}
      </h1>
    </div>
  )
}

export default Quote;
