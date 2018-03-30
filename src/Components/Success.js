import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Success extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    // twitter script
    let script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.charset = 'utf-8';
    script.async = true;
    script.id = "twitterScript";
    document.querySelector('body').appendChild(script);

    // menu
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(4) a').classList.add('active-link');
    document.querySelector('nav').classList.remove('menuActive');
  }

  componentWillUnmount() {
    let script = document.querySelector('#twitterScript');
    document.querySelector('body').removeChild(script);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid content-wrapper" id="success">
        <div className="pt-3 d-flex align-items-center justify-content-center success-wrapper">
          <div className="container d-flex flex-column align-items-center justify-content-around px-md-5">
            <div className="mb-5 text-center">

              <div className="d-flex flex-column align-items-center justify-content-between mb-3">
                <h2 className="text-center">contactMe(<i className="material-icons" style={{color: '#222', fontSize: '1.5rem'}}>done</i>)</h2>
                <div className="twitter-wrap">
                  <a href="https://twitter.com/gpmetheny?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @gpmetheny</a>
                </div>
              </div>


              {/* <h2 className="mb-3">contactMe(<i className="material-icons" style={{color: '#222', fontSize: '1.5rem'}}>done</i>)</h2> */}
              <p>Thanks! I'll be in touch soon!</p>
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

export default Success;