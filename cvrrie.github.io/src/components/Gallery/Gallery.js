import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      isGallery: false
    };
  }

  render() {
    return (
      <div className="Gallery">
        <div className="about">
          Hi, I'm Carrie Rong.
        </div>
      </div>
    );
  }
}

export default Gallery;
