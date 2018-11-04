import React, {Component} from 'react';
import SVG from './SVG';

class TechIcon extends Component {
  render() {
    return (
      <div className="tech-wrap" id={this.props.id}>
        <SVG
          id={this.props.id}
          circles={this.props.circles}
          paths={this.props.paths}
        />
      </div>
    );
  }
}

export default TechIcon;