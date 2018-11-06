import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SVG from './SVG';

class TechIcon extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
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
      <div className="tech-wrap" id={this.props.id}>
        <SVG
          alt={this.props.id}
          title={this.props.id}
          circles={this.props.circles}
          paths={this.props.paths}
        />
      </div>
    );
  }
}

export default TechIcon;