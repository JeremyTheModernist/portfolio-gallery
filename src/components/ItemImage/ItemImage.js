import React from 'react';
import Consumer from '../../AppState.js'

function ItemImage(props){
  return (
    <Consumer>
      {
        (context) => {
          return context.information.map((item) => {
              return props.id == item.id ?
                <div className="item__image" key={item.id}
                  onClick={() => context.toggleFullscreen({src:item.content.src,title:item.content.title,description:item.content.description})}>
                  <picture>
                    <source media="(min-width:1024px)" srcset={`${item.content.breakpointImgs.large}`}/>
                    <source media="(min-width:768px)" srcset={`${item.content.breakpointImgs.medium}`}/>
                    <source media="(min-width:320px)" srcset={`${item.content.breakpointImgs.small}`}/>
                    <img src={item.content.src}/>
                  </picture>
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
