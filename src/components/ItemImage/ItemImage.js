import React from 'react';
import Consumer from '../../AppState.js'

function ItemImage(props){
  return (
    <Consumer>
      {
        (context) => {
          return context.information.map((item) => {
              return props.id == item.id ?
                <div className="item__image" key={item.id}>
                  {item.id}
                </div>
              :
              null
            })
        }
      }
    </Consumer>
  )
}

export default ItemImage;
