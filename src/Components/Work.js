import React, {Component} from 'react';

import CTA from './CTA';
import Loader from './Loader';
import Pen from './Pen';

class Work extends Component {
  componentDidMount() {
    document.querySelector('nav a:first-child').focus();
    document.querySelector('nav a:first-child').blur();
    
    let script = document.createElement('script');
    script.src = 'https://static.codepen.io/assets/embed/ei.js';
    script.async = true;
    script.id = "codepenScript";
    document.querySelector('body').appendChild(script);

    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(2) a').classList.add('active-link');
    document.querySelector('nav').classList.remove('menuActive');
  }

  componentWillUnmount() {
    let script = document.querySelector('#codepenScript');
    document.querySelector('body').removeChild(script);
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid content-wrapper">
        <Loader />
        <div className="container pt-3 pt-lg-5" id="work">
          <h2 className="text-center">CSS Animations</h2>
          <div className="pens-wrapper row mb-5" id="animations">
            <Pen
              dataPenTitle="Pure CSS Spinning Atom"
              dataSlugHash="bLJVBK"
            />
            <Pen
              dataPenTitle="CSS keyframe animation: SVG cocktail glass with clinking ice"
              dataSlugHash="YYeRQy"
            />
            <Pen
              dataPenTitle="Pure CSS Spinning Loader #3"
              dataSlugHash="BYbgEv"
            />
          </div>
          <div className="d-flex flex-column align-items-center text-center mt-3">
            <div className="row">
              <h6 className="col-12">Pure CSS animations using keyframes and transforms.</h6>
              <p className="col-lg-8 offset-lg-2">Cocktail glass SVG is my original creation, atom and spinning loader animations were built using CSS divs, spans and pseudoelements. All animations are pure CSS (JavaScript is used only for the pause buttons). See more of my animations on <a href="https://codepen.io/gpmetheny" target="_blank" rel="noopener noreferrer">Codepen</a>.</p>
            </div>
          </div> 
          <h2 className="text-center mt-lg-5">FizzBuzz</h2>
          <div className="pens-wrapper row d-flex" id="fizzbuzz">
            <Pen
              className="pens col-12 py-3"
              dataPenTitle="FizzBuzz"
              dataSlugHash="mXYELw"
              dataHeight={250}
              dataDefaultTab="js,result"
            />
          </div>
          <div className="d-flex flex-column align-items-center text-center mt-3">
            <div className="row">
              <p>My JavaScript solution to the classic coder conundrum.</p>
            </div>
          </div>
          <h2 className="text-center mt-lg-5">Websites</h2>
          <div className="row d-flex">
            <div className="col-12 py-3 mb-3" id="bojack-frame">
              <iframe title="BoJack Ipsum" src="https://pb-livin.github.io/bojack-ipsum/" frameBorder="1" width="100%" height="100%" />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center text-center mb-5 mt-3">
            <div className="row">
              <h6 className="col-12">BoJack Ipsum (NSFW)</h6>
              <p className="col-lg-8 offset-lg-2"><a href="https://pb-livin.github.io/bojack-ipsum/" target="_blank" rel="noopener noreferrer">Lorem Ipsum generator</a> that uses JavaScript and the Fetch API to return dummy text randomly generated from transcripts of <a href="https://www.netflix.com/title/70300800" target="_blank" rel="noopener noreferrer">Netflix's <em>BoJack Horseman</em></a>. Users can select the number of paragraphs desired, choose between plain text and HTML, and copy the result to their clipboard. (HTML version available on large screens only.)</p>
              <p className="col-lg-10 offset-lg-1"><small>view source code on <a href="https://github.com/pb-livin/bojack-ipsum/tree/gh-pages" target="_blank" rel="noopener noreferrer">GitHub</a></small></p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center text-center mb-5 mt-3">
            <div className="row my-5">
              <CTA to="/about">more about my work {'>>'}</CTA>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;