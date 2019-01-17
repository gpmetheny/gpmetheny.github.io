import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';

import CTA from './CTA';
import TechIcon from './TechIcon';

import techList from '../SVG/techList';

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

  /* typeLetters = (letters) => {
    let output = '';
    for (let letter of letters) {
      // setInterval(() => {
        output += letter;
      // }, 100);
    }
    return output;
  } */

  render() {
    let nameText = 'Gabbie Metheny';
    let titleText = 'web developer';
    let nameLetters = nameText.split('');
    let titleLetters = titleText.split('');

    return (
      <div className={`${this.props.className} jumbotron jumbotron-fluid d-flex content-wrapper`} id="feature">
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center text-center align-self-center" id="welcome">
          <div className="row w-100">

            <div className="col-12 d-flex flex-column justify-content-center my-4">
              <div id="name-wrap">
                <h1>{nameLetters.map((letter, index) => {
                  return <span key={`${letter}-${index}`}>{letter}</span>;
                })}</h1>
              </div>
              <div id="title-wrap">
                <h2>{titleLetters.map((letter, index) => {
                  return <span key={`${letter}-${index}`}>{letter}</span>;
                })}</h2>
              </div>
            </div>

            {/* <div className="col-12 d-flex justify-content-center px-0">
              {techList
                .filter((tech, index) => index <= techList.length / 2)
                .map((tech) => {
                  return (
                    <TechIcon
                      key={tech.id}
                      id={tech.id}
                      paths={tech.paths}
                      circles={tech.circles}
                    />
                  );
                })
              }
            </div>

            <div className="col-12 d-flex justify-content-center px-0 mb-5">
              {techList
                .filter((tech, index) => index > techList.length / 2)
                .map((tech) => {
                  return (
                    <TechIcon
                      key={tech.id}
                      id={tech.id}
                      paths={tech.paths}
                      circles={tech.circles}
                    />
                  );
                })
              }
            </div> */}
            
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

const appear = keyframes`
  0% {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    opacity: 0;
  }
  100% {
    opacity: 1;
    width: 1.2rem;
  }
`;

const blink = (props) => keyframes`
  0% {
    background-color: ${props.theme.color.contrast};
  }
  25% {
    background-color: ${props.theme.color.primary};
  }
  50% {
    background-color: ${props.theme.color.contrast};
  }
  75% {
    background-color: ${props.theme.color.primary};
  }
  100% {
    background-color: ${props.theme.color.contrast};
  }
`;

const italicize = (props) => keyframes`
  100% {
    font-style: italic;
    color: ${props.theme.color.gray};
  }
`;

const pad = keyframes`
  100% {
    padding-left: .6rem;
  }
`;

const leftComment = keyframes`
  0% {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const rightComment = (props) => keyframes`
  100% {
    content: '*/';
    display: inline-block;
    width: 3.6rem;
    height: 2rem;
    margin-left: .6rem;
    text-align: right;
    background-color: transparent;
    color: ${props.theme.color.gray};
  }
`;

const Home = styled(_Home)`
  #name-wrap,
  #title-wrap {
    width: 16.8rem;
    height: 3rem;
    align-self: center;
    overflow: visible;
    white-space: nowrap;
  }

  h1,
  h2 {
    text-align: left;
    font-size: 2rem !important;
    font-weight: 400;
    color: ${props => props.theme.color.contrast} !important;
    margin: 0;
  }

  h1 {
    &::after {
      content: '';
      display: inline-block;
      width: 1rem;
      height: 1.8rem;
      margin-bottom: -.2rem;
      animation: ${blink} 1s both 3,
                 ${appear} .01s 2.6s both reverse;
    }

    span {
      opacity: 0;
      animation: ${appear} .01s 1.1s both;
      

      &:nth-child(2) {
        animation-delay: 1.2s;
      }

      &:nth-child(3) {
        animation-delay: 1.3s;
      }

      &:nth-child(4) {
        animation-delay: 1.35s;
      }

      &:nth-child(5) {
        animation-delay: 1.5s;
      }

      &:nth-child(6) {
        animation-delay: 1.6s;
      }

      &:nth-child(7) {
        animation-delay: 1.75s;
      }

      &:nth-child(8) {
        animation-delay: 1.9s;
      }

      &:nth-child(9) {
        animation-delay: 2s;
      }

      &:nth-child(10) {
        animation-delay: 2.1s;
      }

      &:nth-child(11) {
        animation-delay: 2.15s;
      }

      &:nth-child(12) {
        animation-delay: 2.25s;
      }

      &:nth-child(13) {
        animation-delay: 2.35s;
      }

      &:nth-child(14) {
        animation-delay: 2.5s;
      }
    }
  }

  h2 {
    animation: ${italicize} .01s 4.3s forwards;

    &::before {
      content: '/*';
      display: inline-block;
      width: 3.6rem;
      height: 2rem;
      margin-left: -3.6rem;
      text-align: left;
      color: ${props => props.theme.color.gray};
      animation: ${leftComment} .01s 4.3s both;
    }

    &::after {
      content: '';
      display: inline-block;
      width: 1rem;
      height: 1.8rem;
      margin-bottom: -.2rem;
      animation: ${appear} .01s 2.6s both,
                 ${blink} 1s 2.6s both 2,
                 ${rightComment} .01s 4.3s forwards;
    }

    span {
      opacity: 0;
      animation: ${appear} .01s 2.9s both;
      
      &:first-child {
        animation: ${appear} .01s 2.9s both,
                   ${pad} .01s 4.3s forwards;
      }
      
      &:nth-child(2) {
        animation-delay: 2.95s;
      }

      &:nth-child(3) {
        animation-delay: 3.05s;
      }

      &:nth-child(4) {
        animation-delay: 3.1s;
      }

      &:nth-child(5) {
        animation-delay: 3.2s;
      }

      &:nth-child(6) {
        animation-delay: 3.25s;
      }

      &:nth-child(7) {
        animation-delay: 3.35s;
      }

      &:nth-child(8) {
        animation-delay: 3.45s;
      }

      &:nth-child(9) {
        animation-delay: 3.55s;
      }

      &:nth-child(10) {
        animation-delay: 3.6s;
      }

      &:nth-child(11) {
        animation-delay: 3.65s;
      }

      &:nth-child(12) {
        animation-delay: 3.8s;
      }

      &:nth-child(13) {
        animation-delay: 3.9s;
      }
    }
  }

  a {
    animation: ${slideIn} .5s 4.7s both;
  }
`;

export default Home;