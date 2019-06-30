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
          title:'Blue and Gold Macaw',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: 'Watercolor Painting Original 16 x 20 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_850,q_60/v1561668776/painters-folio/Vertical/Colonel_-_Blue_and_Gold_Macaw_Brevard_Zoo_tptwuv.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668776/painters-folio/Vertical/Colonel_-_Blue_and_Gold_Macaw_Brevard_Zoo_tptwuv.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668776/painters-folio/Vertical/Colonel_-_Blue_and_Gold_Macaw_Brevard_Zoo_tptwuv.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668776/painters-folio/Vertical/Colonel_-_Blue_and_Gold_Macaw_Brevard_Zoo_tptwuv.jpg',
          }
        }
      },
      {
        id:2,
        content: {
          title:'Specefic Title',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: 'Watercolor Painting Original 16 x 20 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1561668770/painters-folio/Horizontal/Ancient_Corinth_bwgr4u.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/v1561668770/painters-folio/Horizontal/Ancient_Corinth_bwgr4u.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/v1561668770/painters-folio/Horizontal/Ancient_Corinth_bwgr4u.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/v1561668770/painters-folio/Horizontal/Ancient_Corinth_bwgr4u.jpg',
          }
        }
      },
      {
        id:3,
        content: {
          title:'Church on the Northshore II',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: 'Watercolor Painting Original 16 x 20 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_1100,q_60/v1561668763/painters-folio/Horizontal/Church_on_the_North_Shore_II_dislat.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_1100,q_60/v1561668763/painters-folio/Horizontal/Church_on_the_North_Shore_II_dislat.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_800,q_60/v1561668763/painters-folio/Horizontal/Church_on_the_North_Shore_II_dislat.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60//v1561668763/painters-folio/Horizontal/Church_on_the_North_Shore_II_dislat.jpg'
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
          title:'Sidewalk Saunter',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: 'Watercolor Painting Original 16 x 20 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1561668764/painters-folio/Horizontal/Sidewalk_Saunter_wfda9t.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/v1561668764/painters-folio/Horizontal/Sidewalk_Saunter_wfda9t.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/v1561668764/painters-folio/Horizontal/Sidewalk_Saunter_wfda9t.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/v1561668764/painters-folio/Horizontal/Sidewalk_Saunter_wfda9t.jpg'
          }
        }
      },
      {
        id:6,
        content: {
          title:'Paved Paradise',
          subtitle: 'Watercolor Painting Original 20 x 16 Giclees available',
          description: 'Watercolor Painting Original 20 x 16 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668778/painters-folio/Horizontal/Paved_Paradise_ljz4ou.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668778/painters-folio/Horizontal/Paved_Paradise_ljz4ou.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668778/painters-folio/Horizontal/Paved_Paradise_ljz4ou.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668778/painters-folio/Horizontal/Paved_Paradise_ljz4ou.jpg'
          }
        }
      },
      {
        id:7,
        content: {
          title:'Key West Christmas Palm',
          subtitle: 'Watercolor Painting Original 28 x 22 Giclees available',
          description: 'Watercolor Painting Original 28 x 22 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_1100,q_40/v1561668765/painters-folio/Horizontal/Key_West_Christmas_Palm_gwvddk.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_1100,q_40/v1561668765/painters-folio/Horizontal/Key_West_Christmas_Palm_gwvddk.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_800,q_60/v1561668765/painters-folio/Horizontal/Key_West_Christmas_Palm_gwvddk.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668765/painters-folio/Horizontal/Key_West_Christmas_Palm_gwvddk.jpg',
          }
        }
      },
      {
        id:8,
        content: {
          title:'Ancient Corinth',
          subtitle: 'Watercolor Painting Original 20 x 16 Giclees available',
          description: 'Watercolor Painting Original 20 x 16 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668770/painters-folio/Horizontal/Ancient_Corinth_bwgr4u.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668770/painters-folio/Horizontal/Ancient_Corinth_bwgr4u.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668770/painters-folio/Horizontal/Ancient_Corinth_bwgr4u.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668770/painters-folio/Horizontal/Ancient_Corinth_bwgr4u.jpg',
          }
        }
      },
      {
        id:9,
        content: {
          title:'Right-Side Up',
          subtitle: 'Watercolor Painting Original 20 x 16 Giclees available',
          description: 'Watercolor Painting Original 20 x 16 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668773/painters-folio/Horizontal/Right-side_Up_bxgraz.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668773/painters-folio/Horizontal/Right-side_Up_bxgraz.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668773/painters-folio/Horizontal/Right-side_Up_bxgraz.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668773/painters-folio/Horizontal/Right-side_Up_bxgraz.jpg',
          }
        }
      },
      {
        id:10,
        content: {
          title:'Sidewalk Saunter',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: 'Watercolor Painting Original 16 x 20 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_850,q_60/v1561330382/painters-portfolio/Sidewalk-saunter_nh2g98.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561330382/painters-portfolio/Sidewalk-saunter_nh2g98.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561330382/painters-portfolio/Sidewalk-saunter_nh2g98.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561330382/painters-portfolio/Sidewalk-saunter_nh2g98.jpg',
          }
        }
      },
      {
        id:11,
        content: {
          title:'Library of Celsus, Ephesus',
          subtitle: 'Watercolor Painting Original 20 x 16 Giclees available',
          description: 'Watercolor Painting Original 20 x 16 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668777/painters-folio/Horizontal/Library_of_Celsus_in_Ephesus_l5mjy0.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668777/painters-folio/Horizontal/Library_of_Celsus_in_Ephesus_l5mjy0.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668777/painters-folio/Horizontal/Library_of_Celsus_in_Ephesus_l5mjy0.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668777/painters-folio/Horizontal/Library_of_Celsus_in_Ephesus_l5mjy0.jpg',
          }
        }
      },
      {
        id:12,
        content: {
          title:'Courtyard in Poipu',
          subtitle: '2013 Merit Award Brush With Success, Viera, Florida',
          description: 'Watercolor Painting Original 16 X 20 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668783/painters-folio/Vertical/Courtyard_in_Poipu_h0xxzo.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668783/painters-folio/Vertical/Courtyard_in_Poipu_h0xxzo.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668783/painters-folio/Vertical/Courtyard_in_Poipu_h0xxzo.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668783/painters-folio/Vertical/Courtyard_in_Poipu_h0xxzo.jpg',
          }
        }
      },
      {
        id:13,
        content: {
          title:'Cabana Canopy',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: 'Watercolor Painting Original 16 x 20 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_850,q_60/v1561668785/painters-folio/Vertical/Cabana_Canopy_ezfyuh.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668785/painters-folio/Vertical/Cabana_Canopy_ezfyuh.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668785/painters-folio/Vertical/Cabana_Canopy_ezfyuh.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668785/painters-folio/Vertical/Cabana_Canopy_ezfyuh.jpg',
          }
        }
      },
      {
        id:14,
        content: {
          title:'Pineapple on the Banana River',
          subtitle: 'Watercolor Painting Original 16 x 20 Giclees available',
          description: 'Watercolor Painting Original 16 x 20 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_850,q_60/v1561668781/painters-folio/Vertical/Pineapple_on_the_Banana_River_g8tglx.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668781/painters-folio/Vertical/Pineapple_on_the_Banana_River_g8tglx.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668781/painters-folio/Vertical/Pineapple_on_the_Banana_River_g8tglx.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668781/painters-folio/Vertical/Pineapple_on_the_Banana_River_g8tglx.jpg',
          }
        }
      },
      {
        id:15,
        content: {
          title:'Plumes in Bloom',
          subtitle: 'Roseate Spoonbill, 2019 Montgomery City Hall Exhibition Montgomery, Alabama',
          description: 'Watercolor Painting Original 16 X 20 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668785/painters-folio/Vertical/Plumes_in_Bloom_vdasfk.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668785/painters-folio/Vertical/Plumes_in_Bloom_vdasfk.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668785/painters-folio/Vertical/Plumes_in_Bloom_vdasfk.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668785/painters-folio/Vertical/Plumes_in_Bloom_vdasfk.jpg',
          }
        }
      },
      {
        id:16,
        content: {
          title:`Hoo's Hideout`,
          subtitle: '2019 Montgomery City Hall Exhibition, Montgomery, Alabama',
          description: 'Acrylic Painting Original 20 x 16 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_1100,q_40/v1561668769/painters-folio/Horizontal/Hoos_Hideout_ztwc19.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_1100,q_40/v1561668769/painters-folio/Horizontal/Hoos_Hideout_ztwc19.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_800,q_60/v1561668769/painters-folio/Horizontal/Hoos_Hideout_ztwc19.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668769/painters-folio/Horizontal/Hoos_Hideout_ztwc19.jpg',
          }
        }
      },
      {
        id:17,
        content: {
          title:'The Lure of Leaves',
          subtitle: '2014 Merit Award Brush With Success, Viera, Florida 2016 Merit Award 100% Florida Fifth Avenue Art Gallery, Melbourne, Florida',
          description: 'Watercolor Painting Original 20 x 16 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_1100,q_40/v1561668771/painters-folio/Horizontal/The_Lure_of_Leaves_-_ZAPP_huw1j4.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_1100,q_40/v1561668771/painters-folio/Horizontal/The_Lure_of_Leaves_-_ZAPP_huw1j4.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_800,q_60/v1561668771/painters-folio/Horizontal/The_Lure_of_Leaves_-_ZAPP_huw1j4.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668771/painters-folio/Horizontal/The_Lure_of_Leaves_-_ZAPP_huw1j4.jpg',
          }
        }
      },
      {
        id:18,
        content: {
          title:'Color Therapy',
          subtitle: '2017 Merit Award Brush With Success, Viera, Florida',
          description: 'Watercolor Painting Original 20 X 16 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668773/painters-folio/Horizontal/Color_Therapy_b0lps2.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668773/painters-folio/Horizontal/Color_Therapy_b0lps2.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668773/painters-folio/Horizontal/Color_Therapy_b0lps2.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668773/painters-folio/Horizontal/Color_Therapy_b0lps2.jpg',
          }
        }
      },
      {
        id:19,
        content: {
          title:'Ablaze',
          subtitle: '2016 Merit Award Brush With Success, Viera, Florida',
          description: 'Acrylic Painting Original 16 X 20 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668780/painters-folio/Vertical/Ablaze_rgzykh.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_900,q_50/v1561668780/painters-folio/Vertical/Ablaze_rgzykh.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668780/painters-folio/Vertical/Ablaze_rgzykh.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668780/painters-folio/Vertical/Ablaze_rgzykh.jpg',
          }
        }
      },
      {
        id:20,
        content: {
          title:'Naturometry',
          subtitle: '2019 43rd Annual Montgomery Art Guild Museum Exhibition Montgomery, Alabama',
          description: 'Watercolor Painting Original 16 x 20 Giclees available',
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_850,q_60/v1561668782/painters-folio/Vertical/Naturometry_hm7k1i.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668782/painters-folio/Vertical/Naturometry_hm7k1i.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668782/painters-folio/Vertical/Naturometry_hm7k1i.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_600,q_60/v1561668782/painters-folio/Vertical/Naturometry_hm7k1i.jpg',
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
