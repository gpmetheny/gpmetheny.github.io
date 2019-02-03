import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';

import CTA from './CTA';

class _Home extends Component {

  componentDidMount() {
    document.querySelector('nav a:first-child').focus();
    document.querySelector('nav a:first-child').blur();
    
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav').classList.remove('menuActive');
  }
  
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <div className={`${this.props.className} jumbotron jumbotron-fluid d-flex content-wrapper`} id="feature">
        <div id="banner-img-wrap"></div>
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center text-center align-self-center" id="welcome">
          <div className="row w-100">

            <div className="col-12 d-flex flex-column justify-content-center my-4">
              <h1>I'm Gabbie,<br />a web developer who creates <span>engaging</span>, accessible designs.</h1>
            </div>
            
            <div className="col-12 my-5">
              <CTA to="/work">
                see my work
                <span> {'>>'}</span>
              </CTA>
            </div>

          </div> {/* end row */}
        </div> {/* end welcome */}
      </div> /* end feature */
    );
  }
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const rotateGradient = keyframes`
  0% {
    filter: hue-rotate(0);
  }
  100% {
    filter: hue-rotate(180deg);
  }
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    pointer-events: none;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    pointer-events: normal;
    transform: translateX(0);
  }
`;

const Home = styled(_Home)`
  animation: ${fadeIn} .5s .5s both;

  #banner-img-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* background-color: ${props => props.theme.color.black}; */
    background-image: linear-gradient(130deg, ${props => props.theme.color.logo}, ${props => props.theme.color.brandInvert});
    opacity: .7;
    animation: ${rotateGradient} 5s linear 2s both;
  }

  h1 {
    padding: 2rem;
    font-family: ${props => props.theme.font.sans};
    font-weight: bold !important;
    font-size: 1.5rem;
    text-align: left;
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.contrast} !important;
    box-shadow: 16px 16px 0 ${props => props.theme.color.contrastTransparent};

    @media (min-width: 768px) {
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      padding: 4rem;
      padding-left: 5rem;
      padding-right: 2rem;
      border: none;
      font-size: 2.5rem !important;
    }
  }

  a {
    background-color: ${props => props.theme.color.contrastTransparent};
    color: ${props => props.theme.color.primary} !important;
    border: 4px solid ${props => props.theme.color.primary};
    animation: ${slideIn} .5s 3s backwards;
  }
`;

export default Home;