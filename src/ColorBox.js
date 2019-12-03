import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const value = this.props.opacity
    return value >= 0.2 ? (
      <div className="color-box" style={{opacity: value}}>
        <ColorBox opacity={value - 0.1} />
      </div> ) : (
        null
      )
    
  }

}
