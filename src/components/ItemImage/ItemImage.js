import React from 'react';
import Consumer from '../../AppState.js'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

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
                    <source media="(min-width:500px)" srcset={`${item.content.breakpointImgs.medium}`}/>
                    <source media="(min-width:320px)" srcset={`${item.content.breakpointImgs.small}`}/>
                    <LazyLoadImage effect="opacity" src={item.content.breakpointImgs.large}/>
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
