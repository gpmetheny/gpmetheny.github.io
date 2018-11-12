import React, {Component} from 'react';

class Pen extends Component {
  static defaultProps = {
    dataHeight: 350,
    dataDefaultTab: 'result',
    className: 'pens col-12 col-lg-4 py-3'
  };

  // add propTypes

  render() {
    return (
      <div className={this.props.className}>
        <p
          data-height={this.props.dataHeight}
          data-theme-id={32730}
          data-slug-hash={this.props.dataSlugHash}
          data-default-tab={this.props.dataDefaultTab}
          data-user="gpmetheny"
          data-embed-version={2}
          data-pen-title={this.props.dataPenTitle}
          className="codepen"
        >
          See the Pen <a href={`https://codepen.io/gpmetheny/pen/${this.props.dataSlugHash}/`}>{this.props.dataPenTitle}</a> by Gabbie (<a href="https://codepen.io/gpmetheny">@gpmetheny</a>) on <a href="https://codepen.io">CodePen</a>.
        </p>
      </div>
    );
  }
}

export default Pen;