import React, {Component} from 'react';

class TechIcon extends Component {
  render() {
    return (
      <div className="tech-wrap" id={this.props.id}>
        {/* svg */}
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" alt={this.props.id}>
          {/* title */}
          <title>{this.props.id}</title>
          {/* circle */}
          {this.props.circles ? this.props.circles.map((circle, index) => {
            return (
              <circle cx={circle.cx} cy={circle.cy} r={circle.r} key={`circle-${index}`} />
            );
          }) : null}
          {/* path */}
          {this.props.paths ? this.props.paths.map((path, index) => {
            return (
              <path d={path.d} key={`path-${index}`} />
            );
          }) : null}
        </svg>
      </div>
    );
  }
}

export default TechIcon;