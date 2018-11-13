import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Pen extends Component {
  // figure out better way to handle classNames

  static defaultProps = {
    dataUser: 'gpmetheny',
    dataHeight: 350,
    dataDefaultTab: 'result',
    className: 'pens col-12 col-lg-4 py-3'
  };

  static propTypes = {
    className: PropTypes.string.isRequired,
    dataHeight: PropTypes.number.isRequired,
    dataSlugHash: PropTypes.string.isRequired,
    dataDefaultTab: PropTypes.string.isRequired,
    dataUser: PropTypes.string.isRequired,
    dataPenTitle: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className={this.props.className}>
        <p
          className="codepen"
          data-height={this.props.dataHeight}
          data-theme-id={32730}
          data-slug-hash={this.props.dataSlugHash}
          data-default-tab={this.props.dataDefaultTab}
          data-user={this.props.dataUser}
          data-embed-version={2}
          data-pen-title={this.props.dataPenTitle}
        >
          See the Pen <a href={`https://codepen.io/${this.props.dataUser}/pen/${this.props.dataSlugHash}/`} target="_blank" rel="noopener noreferrer">{this.props.dataPenTitle}</a> by Gabbie (<a href={`https://codepen.io/${this.props.dataUser}`} target="_blank" rel="noopener noreferrer">@{this.props.dataUser}</a>) on <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">CodePen</a>.
        </p>
      </div>
    );
  }
}

export default Pen;