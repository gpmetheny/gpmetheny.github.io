import React, {Component} from 'react';
import SVG from './SVG';

class SocialIcon extends Component {
  render() {
    return (
      <li className="social-icon" id={this.props.id}>
        <a href={this.props.href} target="_blank" rel="noopener noreferrer">
          <SVG
            id={this.props.id}
            circles={this.props.circles}
            paths={this.props.paths}
          />
          {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill={this.props.fill} d={this.props.d}/>
          </svg> */}
        </a>
      </li>
    );
  }
}

export default SocialIcon;