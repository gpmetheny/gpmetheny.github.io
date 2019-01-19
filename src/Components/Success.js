import React, {Component} from 'react';
import styled from 'styled-components';

import CTA from './CTA';

class _Success extends Component {
  componentDidMount() {
    document.querySelector('nav a:first-child').focus();
    document.querySelector('nav a:first-child').blur();
    
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
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={`${this.props.className} jumbotron jumbotron-fluid content-wrapper`} id="success">
        <div className="pt-3 d-flex align-items-center justify-content-center success-wrapper">
          <div className="container d-flex flex-column align-items-center justify-content-around px-md-5">
            <div className="mb-5 text-center">

              <div className="d-flex flex-column align-items-center justify-content-between mb-3">
                <h2 className="text-center">contactMe(<i className="material-icons" style={{fontSize: '1.5rem'}}>done</i>)</h2>
                <div className="twitter-wrap">
                  <a href="https://twitter.com/gpmetheny?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @gpmetheny</a>
                </div>
              </div>
              <p>Thanks! I'll be in touch soon!</p>
            </div>
            <div className="my-5">
              <CTA to="/work">{'<<'} back to my work</CTA>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Success = styled(_Success)`
  i {
    color: ${props => props.theme.color.contrast};
  }
`;

export default Success;