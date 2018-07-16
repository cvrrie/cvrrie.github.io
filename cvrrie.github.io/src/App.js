import React, { Component } from 'react';
import Scroll from 'react-scroll';
import SplashPage from './components/SplashPage/SplashPage';
import Gallery from './components/Gallery/Gallery';
import './App.css';

var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class App extends Component {c
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin');
    Events.scrollEvent.register('end');
    scrollSpy.update();
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className="App">
        <div className="locationDots">
        
        </div>
        <SplashPage scrollToBottom={this.scrollToBottom} />
        <Gallery />
      </div>
    );
  }
}

export default App;
