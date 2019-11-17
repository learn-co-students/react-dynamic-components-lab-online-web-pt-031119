import React, { Component } from 'react';
import BlogPost from './BlogPost.js'
import ColorBox from './ColorBox.js'

class App extends Component {
  
  // Nothing needs to change here! 
  // Make note of what prop we are initially passing to `ColorBox` below!
    
    render() {
      if(this.props.opacity >= 0.2) {
        return (
          <div className="color-box" style={{opacity: this.props.opacity}}>
            <ColorBox opacity={this.props.opacity - 0.1} />
          </div>
        )
      } else {
        return null
      }
    }
    
  }
export default App;
