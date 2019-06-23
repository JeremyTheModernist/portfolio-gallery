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
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1561322636/painters-portfolio/02_Courtyar-Poipu_r8tamg.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_50/v1561322636/painters-portfolio/02_Courtyar-Poipu_r8tamg.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/q_70/w_700/v1561322636/painters-portfolio/02_Courtyar-Poipu_r8tamg.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/q_60/w_550/v1561322636/painters-portfolio/02_Courtyar-Poipu_r8tamg.jpg'
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
      },
      {
        id:7,
        content: {
          title:'Vibrance in Red',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: '43rd Annual Montgomery Art Guild, Museum Exhibition Montgomery, Alabama',
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1561324525/painters-portfolio/BlueGold-Macaw_dm8cce.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_50/v1561324525/painters-portfolio/BlueGold-Macaw_dm8cce.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/q_70/w_500/v1561324525/painters-portfolio/BlueGold-Macaw_dm8cce.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/q_60/w_500/v1561324525/painters-portfolio/BlueGold-Macaw_dm8cce.jpg',
          }
        }
      },
      {
        id:8,
        content: {
          title:'Vibrance in Red',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: '43rd Annual Montgomery Art Guild, Museum Exhibition Montgomery, Alabama',
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1561325649/painters-portfolio/Church-Northshore_ydvtzy.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_50/v1561325649/painters-portfolio/Church-Northshore_ydvtzy.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_700/v1561325649/painters-portfolio/Church-Northshore_ydvtzy.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_500/v1561325649/painters-portfolio/Church-Northshore_ydvtzy.jpg',
          }
        }
      },
      {
        id:9,
        content: {
          title:'Vibrance in Red',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: '43rd Annual Montgomery Art Guild, Museum Exhibition Montgomery, Alabama',
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1561329010/painters-portfolio/KeyWest-Palm_clt97q.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_30/v1561329010/painters-portfolio/KeyWest-Palm_clt97q.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/v1561325649/painters-portfolio/Church-Northshore_ydvtzy.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/v1561325649/painters-portfolio/Church-Northshore_ydvtzy.jpg',
          }
        }
      },
      {
        id:10,
        content: {
          title:'Vibrance in Red',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: '43rd Annual Montgomery Art Guild, Museum Exhibition Montgomery, Alabama',
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1561330382/painters-portfolio/Sidewalk-saunter_nh2g98.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_50/v1561330382/painters-portfolio/Sidewalk-saunter_nh2g98.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_400/v1561330382/painters-portfolio/Sidewalk-saunter_nh2g98.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_400/v1561330382/painters-portfolio/Sidewalk-saunter_nh2g98.jpg',
          }
        }
      },
      {
        id:11,
        content: {
          title:'Vibrance in Red',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: '43rd Annual Montgomery Art Guild, Museum Exhibition Montgomery, Alabama',
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1561331046/painters-portfolio/Color-Therapy_cvsiz6.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_50/w_800/v1561331876/painters-portfolio/02_ColorTherapy_xf0exo.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/q_50/w_800/v1561331876/painters-portfolio/02_ColorTherapy_xf0exo.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/q_50/w_800/v1561331876/painters-portfolio/02_ColorTherapy_xf0exo.jpg',
          }
        }
      },
      {
        id:12,
        content: {
          title:'Vibrance in Red',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: '43rd Annual Montgomery Art Guild, Museum Exhibition Montgomery, Alabama',
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1561331055/painters-portfolio/Paved-Paradise_jd0rze.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/v1561331055/painters-portfolio/Paved-Paradise_jd0rze.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/v1561331055/painters-portfolio/Paved-Paradise_jd0rze.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/v1561331055/painters-portfolio/Paved-Paradise_jd0rze.jpg',
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
