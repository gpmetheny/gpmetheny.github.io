import React, {Component} from 'react';

class TechIcon extends Component {
  render() {
    return (
      <div className="tech-wrap" id={this.props.id}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" alt={this.props.id}>
          <title>{this.props.id}</title>
          {this.props.circles ? this.props.circles.map((circle) => {
            return (
              <circle cx={circle.cx} cy={circle.cy} r={circle.r} />
            );
          }) : null}
          {this.props.paths.map((path) => {
            return (
              <path d={path} />
            );
          })}
          {/* <path d={this.props.d} /> */}
        </svg>
      </div>
    );
  }
}

export default TechIcon;