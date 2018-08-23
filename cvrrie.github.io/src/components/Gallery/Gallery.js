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
          hi i'm carrie!
        </div>
      </div>
    );
  }
}

export default Gallery;
