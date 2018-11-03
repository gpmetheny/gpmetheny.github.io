import React, {Component} from 'react';

class SocialIcon extends Component {
  render() {
    return (
      <li className="social-icon">
        <a href={this.props.href} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id={this.props.id}>
            <path fill={this.props.fill} d={this.props.d}/>
          </svg>
        </a>
      </li>
    );
  }
}

export default SocialIcon;