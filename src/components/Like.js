import React, { Component } from 'react';
import './Like.css'

class Like extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleCounter = (value1) => {
    this.setState({count: value1});
  }

  render() {
    return (
      <div className="containerLike">
          <div className="heart">
             <img className="heartPicto" onClick={() =>  this.handleCounter(this.state.count + 1)} src="https://zupimages.net/up/20/18/yiyd.png" alt="" />
          </div>
          <div className="likecounter">
            <p> {this.state.count} likes</p>
          </div>
              
      </div>
    );
  }
}

export default Like;