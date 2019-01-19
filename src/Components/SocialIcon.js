import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SVG from './SVG';

class SocialIcon extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    circles: PropTypes.arrayOf(PropTypes.shape({
      fill: PropTypes.string,
      cx: PropTypes.string.isRequired,
      cy: PropTypes.string.isRequired,
      r: PropTypes.string.isRequired
    })),
    paths: PropTypes.arrayOf(PropTypes.shape({
      fill: PropTypes.string,
      d: PropTypes.string.isRequired
    }))
  };

  render() {
    return (
      <li className="social-icon" id={this.props.id}>
        <a
          href={this.props.href}
          target="_blank"
          rel={this.props.id === 'mastodon-icon' ? 'me noopener noreferrer' : 'noopener noreferrer'}
        >
          <SVG
            alt={this.props.id}
            circles={this.props.circles}
            paths={this.props.paths}
          />
        </a>
      </li>
    );
  }
}

export default SocialIcon;