import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SVG extends Component {
  static defaultProps = {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  };

  static propTypes = {
    viewBox: PropTypes.string.isRequired,
    height: PropTypes.string,
    xmlns: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
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
      <svg
        viewBox={this.props.viewBox}
        height={this.props.height}
        xmlns={this.props.xmlns}
        alt={this.props.alt}
        className={this.props.className}
        id={this.props.id}
      >

        {/* title */}
        {this.props.title ?
          <title>{this.props.title}</title> :
          null
        }

        {/* circles */}
        {this.props.circles ?
          this.props.circles.map((circle, index) => {
            return (
              <circle
                fill={circle.fill}
                cx={circle.cx}
                cy={circle.cy}
                r={circle.r}
                key={`circle-${index}`}
              />
            );
          }) :
          null
        }

        {/* paths */}
        {this.props.paths ?
          this.props.paths.map((path, index) => {
            return (
              <path
                fill={path.fill}
                d={path.d}
                key={`path-${index}`}
              />
            );
          }) :
          null
        }

      </svg>
    );
  }
}

export default SVG;