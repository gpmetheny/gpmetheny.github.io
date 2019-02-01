import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';

import cityHall from '../img/city-hall-dtla.jpg';

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
              <h1>I'm Gabbie,<br />a web developer who creates <span>engaging</span>, <span>accessible</span> designs.</h1>
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
    background-color: ${props => props.theme.color.black};
    background-image: url(${cityHall});
    background-size: cover;
    background-position: top right 30%;
    filter: hue-rotate(70deg) contrast(4) invert(.2) brightness(.85);
    opacity: .8;

    @media (min-width: 768px) {
      background-image: linear-gradient(130deg, rgba(0, 0, 0, .8), transparent, transparent), url(${cityHall});
      background-position: top center;
    }
  }

  h1 {
    padding: 1rem;
    font-family: ${props => props.theme.font.sans};
    font-weight: bold !important;
    font-size: 1.5rem;
    text-align: left;
    background-color: rgba(0, 0, 0, .8);
    color: white !important;
    text-shadow: 1px 4px 3px black;

    @media (min-width: 768px) {
      width: 50%;
      min-width: 700px;
      margin-right: auto;
      padding-left: 5rem;
      background-color: unset;
      font-size: 3.5rem !important;
    }

    span {
      /* font-style: italic; */
      /* border-bottom: 6px solid ${props => props.theme.color.brand}; */
      /* border-bottom-style: groove; */
      
    }
  }

  a {
    background-color: ${props => props.theme.color.primaryTransparent};
    border: 2px solid ${props => props.theme.color.contrast};
    animation: ${slideIn} .5s 2s both;
  }
`;

export default Home;