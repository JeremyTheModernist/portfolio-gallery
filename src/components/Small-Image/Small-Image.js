import React from 'react';
import ItemInformation from '../ItemInformation/ItemInformation.js'

const {Provider,Consumer} = React.createContext();

function SmallImage(props){
  return(
    <div className="grid__item col-1">
       <ItemInformation id={props.id}/>
       <Consumer>
         {
          (context) => {
            console.log(context)
         }
         }
       </Consumer>
    </div>
  )
}

export default SmallImage;
