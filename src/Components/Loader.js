import React, {Component} from 'react';

import '../Loading.css';

class Loader extends Component {
  render() {
    return (
      <div className="loading">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    );
  }
}

export default Loader;