import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Error extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    document.querySelector('.logo-wrap').focus();
    document.querySelector('.logo-wrap').blur();

    // menu
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav').classList.remove('menuActive');
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid content-wrapper" id="error">
        <div className="pt-3 d-flex align-items-center justify-content-center error-wrapper">
          <div className="container d-flex flex-column align-items-center justify-content-around px-md-5">
            <div className="mb-5 text-center">

              <div className="d-flex flex-column align-items-center justify-content-between mb-3">
                <h2 className="text-center">error()</h2>
              </div>
              <p>Not Found</p>
            </div>
            <div className="mt-5">
              <Link to="/work" className="more">{'<<'} back to my work</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;