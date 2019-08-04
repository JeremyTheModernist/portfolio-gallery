import React from 'react';
import Consumer from '../../AppState.js'

class Fullscreen extends React.Component{
  showFullscreen = (context) => {
    return (
      <div className="fullscreen fullscreen--visible" onClick={() => context.toggleFullscreen()}>
        <svg className="fullscreen__close" width="20" height="20">
          <line x1="0" y1="0" x2="20" y2="20" stroke="black" stroke-width="2"/>
          <line x1="20" y1="0" x2="0" y2="20" stroke="black" stroke-width="2"/>
        </svg>
        <div className="fullscreenContent">
          <div className="fullscreenContent__words col-1">
              <h2 className="fullscreenContent__title">{context.selected.title}</h2>
              <p className="fullscreenContent__description">{context.selected.description}</p>
              <a className="fullscreenContent__link"
                 href="mailto:m_mcinarnay@bellsouth.net"
                 target="_top">
                 Contact for More Info
              </a>
          </div>
          <div className="fullscreenContent__image col-4">
            <img src={context.selected.src}/>
          </div>
      </div>

      </div>
    )
  }
  hideFullscreen = (context) => {
    return (
      <div className="fullscreen fullscreen--hidden">
      </div>
    )
  }
  render(){
    return (
      <Consumer>
        {
          (context) => {
            return (
              context.fullscreen ?
              this.showFullscreen(context)
              :
              this.hideFullscreen(context)
           )
          }
        }
      </Consumer>
    )
  }
}

export default Fullscreen;
