import React from 'react';
import Quote from '../Quote/Quote.js'
import Consumer from '../../AppState.js'

class About extends React.Component{
  showAbout = (context) => {
    console.log('showing about!')
    return (
      <div className="about about--visible" onClick={() => context.toggleAbout()}>
        <div className="aboutContent">
          <div className="aboutContent__intro">
            <h2 className="aboutContent__title">About Margie McInarnay</h2>
            <img className="aboutContent__img" src="http://drp.mk/i/FVwkbTbF4j.jpg"></img>
          </div>
          <div className="aboutContent__quote">
            There is something extraordinary about stepping
            into a new place filled with its own unique beauty
            of flora and fauna that inspires and motivates me
            to capture the emotions it invokes.
          </div>
          <div className="aboutContent__description">
            <p className="description__copy">
              There is something extraordinary about stepping
              into a new place filled with its own unique beauty
              of flora and fauna that inspires and motivates me
              to capture the emotions it invokes.
            </p>
            <p className="description__copy">
              There is something extraordinary about stepping
              into a new place filled with its own unique beauty
              of flora and fauna that inspires and motivates me
              to capture the emotions it invokes
            </p>
          </div>
        </div>
      </div>
    )
  };
  hideAbout = () => {
    return (
      <div className="about about--hidden">
      </div>
    )
  }
  render(){
    return(
      <Consumer>
        {
          (context) => {
            return context.about ?
            this.showAbout(context)
            :
            this.hideAbout(context)
          }
        }
      </Consumer>
    )
  }
}

export default About;
