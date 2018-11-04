import React, {Component} from 'react';

class SVG extends Component {
  render() {
    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        alt={this.props.id}
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