import React, { Component } from 'react';
import './SplashPage.css';

class SplashPage extends Component {
  render() {
    return (
      <div className="SplashPage parallax">
        <div className="title">
          <div className="letter">c</div>
          <div className="letter down" onClick={this.props.scrollToBottom}>v</div>
          <div className="letter">r</div>
          <div className="letter">r</div>
          <div className="letter">i</div>
          <div className="letter">e</div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
