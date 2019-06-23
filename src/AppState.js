import React from 'react';

const {Provider, Consumer} = React.createContext();

class AppState extends React.Component{
  state = {
    fullscreen:false,
    about:false,
    selected: {
      src: null,
      title: null,
      description:null
    },
    information: [
      {
        id:1,
        content: {
          title:'Hawainn Island Florals',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: 'Watercolor Painting Original 16 x 20 Giclees available',
          src: 'https://drp.mk/i/1z7YGPxCQ6.jpg',
          breakpointImgs: {
            large: 'https://drp.mk/i/1z7YGPxCQ6.jpg',
            medium: 'https://drp.mk/i/1z7YGPxCQ6.jpg',
            small: 'https://drp.mk/i/1z7YGPxCQ6.jpg',
          }
        }
      },
      {
        id:2,
        content: {
          title:'Specefic Title',
          subtitle: 'Better Description',
          description: '43rd Annual Montgomery Art Guild Museum Exhibition Montgomery, Alabama',
          src: 'https://drp.mk/i/FxDhkqCZ8C.jpg',
          breakpointImgs: {
            large: 'https://drp.mk/i/FxDhkqCZ8C.jpg',
            medium: 'https://drp.mk/i/FxDhkqCZ8C.jpg',
            small: 'https://drp.mk/i/FxDhkqCZ8C.jpg',
          }
        }
      },
      {
        id:3,
        content: {
          title:'Color Therapy',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: 'Watercolor Painting Original 16 x 20 Giclees available',
          src: 'https://drp.mk/i/0XSYw9W21w.jpg',
          breakpointImgs: {
            large: 'https://drp.mk/i/0XSYw9W21w.jpg',
            medium: 'https://drp.mk/i/0XSYw9W21w.jpg',
            small: 'https://drp.mk/i/0XSYw9W21w.jpg'
          }
        }
      },
      {
        id:4,
        content: {
          title:'The Lure of Leaves',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: 'ABLAZE 2016 Merit Award Brush With Success, Viera, Florida',
          src: 'https://drp.mk/i/FVwkbTbF4j.jpg',
          breakpointImgs: {
            large: 'https://drp.mk/i/FVwkbTbF4j.jpg',
            medium: 'https://drp.mk/i/FVwkbTbF4j.jpg',
            small: 'https://drp.mk/i/FVwkbTbF4j.jpg'
          }
        }
      },
      {
        id:5,
        content: {
          title:'Flower in Bloom',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: '43rd Annual Montgomery Art Guild Museum Exhibition Montgomery, Alabama',
          src: 'https://drp.mk/i/HDqKRZs4Gx.jpg',
          breakpointImgs: {
            large: 'https://drp.mk/i/HDqKRZs4Gx.jpg',
            medium: 'https://drp.mk/i/HDqKRZs4Gx.jpg',
            small: 'https://drp.mk/i/FVwkbTbF4j.jpg'
          }
        }
      },
      {
        id:6,
        content: {
          title:'Vibrance in Red',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: '43rd Annual Montgomery Art Guild, Museum Exhibition Montgomery, Alabama',
          src: 'https://drp.mk/i/HgtHYNgNKc.jpg',
          breakpointImgs: {
            large: 'https://drp.mk/i/HgtHYNgNKc.jpg',
            medium: 'https://drp.mk/i/HgtHYNgNKc.jpg',
            small: 'https://drp.mk/i/HgtHYNgNKc.jpg'
          }
        }
      }

    ],
    toggleFullscreen: (payload) => {
      this.setState((state) => {
        if(!state.fullscreen){
          return {
            fullscreen:!state.fullscreen,
            selected: {
              src: payload.src,
              title: payload.title,
              description:payload.description
            }
          }
        }
        else{
          return {
            fullscreen:!state.fullscreen,
            selected: {
              src: null,
              title: null,
              description:null
            }
          }
        }

      })
      console.log('received payload',payload)
    },
    toggleAbout: () => {
      this.setState((state) => {
        return {
          about: !state.about
        }
      })
    console.log(this.state.about)
    }
  }
  render(){
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}

export {AppState as AppState};

export default Consumer;
