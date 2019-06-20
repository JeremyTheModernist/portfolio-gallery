import React from 'react';


class GridBox extends React.Component{
  render(){
    return(
      <div className="grid">
        {this.props.children}
      </div>
    )
  }
}


export default GridBox;
