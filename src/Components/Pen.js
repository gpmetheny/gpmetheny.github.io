import React, {Component} from 'react';

class Pen extends Component {
  static defaultProps = {
    dataUser: 'gpmetheny',
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
          data-user={this.props.dataUser}
          data-embed-version={2}
          data-pen-title={this.props.dataPenTitle}
          className="codepen"
        >
          See the Pen <a href={`https://codepen.io/${this.props.dataUser}/pen/${this.props.dataSlugHash}/`} target="_blank" rel="noopener noreferrer">{this.props.dataPenTitle}</a> by Gabbie (<a href={`https://codepen.io/${this.props.dataUser}`} target="_blank" rel="noopener noreferrer">@{this.props.dataUser}</a>) on <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">CodePen</a>.
        </p>
      </div>
    );
  }
}

export default Pen;