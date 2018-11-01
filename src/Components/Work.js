import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Work extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
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
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid content-wrapper">
        <div id="loading">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="container pt-3 pt-lg-5" id="work">
          <h2 className="text-center">CSS Animations</h2>
          <div className="pens-wrapper row mb-5">
            <div className="pens col-12 col-lg-4 py-3">
              <p data-height="350" data-theme-id="32730" data-slug-hash="bLJVBK" data-default-tab="result" data-user="gpmetheny" data-embed-version="2" data-pen-title="Pure CSS Spinning Atom" className="codepen">See the Pen <a href="https://codepen.io/gpmetheny/pen/bLJVBK/">Pure CSS Spinning Atom</a> by Gabbie (<a href="https://codepen.io/gpmetheny">@gpmetheny</a>) on <a href="https://codepen.io">CodePen</a>.</p>
            </div>
            <div className="pens col-12 col-lg-4 py-3">
              <p data-height="350" data-theme-id="32730" data-slug-hash="YYeRQy" data-default-tab="result" data-user="gpmetheny" data-embed-version="2" data-pen-title="CSS keyframe animation: SVG cocktail glass with clinking ice" className="codepen">See the Pen <a href="https://codepen.io/gpmetheny/pen/YYeRQy/">CSS keyframe animation: SVG cocktail glass with clinking ice</a> by Gabbie (<a href="https://codepen.io/gpmetheny">@gpmetheny</a>) on <a href="https://codepen.io">CodePen</a>.</p>
            </div>
            <div className="pens col-12 col-lg-4 py-3">
              <p data-height="350" data-theme-id="32730" data-slug-hash="BYbgEv" data-default-tab="result" data-user="gpmetheny" data-embed-version="2" data-pen-title="Pure CSS Spinning Loader #3" className="codepen">See the Pen <a href="https://codepen.io/gpmetheny/pen/BYbgEv/">Pure CSS Spinning Loader #3</a> by Gabbie (<a href="https://codepen.io/gpmetheny">@gpmetheny</a>) on <a href="https://codepen.io">CodePen</a>.</p>
            </div>
            <div className="d-flex flex-column align-items-center text-center mt-3">
              <div className="row">
                <h6 className="col-10 offset-1">Pure CSS animations using keyframes and transforms.</h6>
                <p className="col-lg-10 offset-lg-1">Cocktail glass SVG is my original creation, atom and spinning loader animations were built using CSS divs, spans and pseudoelements. All animations are pure CSS (Javascript is used only for the pause buttons). See more of my animations on <a href="https://codepen.io/gpmetheny" target="_blank" rel="noopener noreferrer">Codepen</a>.</p>
              </div>
            </div>  
          </div>
          <h2 className="text-center">FizzBuzz</h2>
          <div className="pens-wrapper row d-flex">
            <div className="pens col-12 py-3">
              <p data-height="250" data-theme-id="32730" data-slug-hash="mXYELw" data-default-tab="js,result" data-user="gpmetheny" data-embed-version="2" data-pen-title="FizzBuzz" className="codepen">See the Pen <a href="https://codepen.io/gpmetheny/pen/mXYELw/">FizzBuzz</a> by Gabbie (<a href="https://codepen.io/gpmetheny">@gpmetheny</a>) on <a href="https://codepen.io">CodePen</a>.</p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center text-center mb-5 mt-3">
            <div className="row">
              <h6 className="col-10 offset-1">My JavaScript solution to the classic coder conundrum.</h6>
            </div>
          </div>
          <h2 className="text-center">Websites</h2>
          <div className="row d-flex">
            <div className="col-12 py-3 mb-3" id="bojack-frame">
              <iframe title="BoJack Ipsum" src="https://pb-livin.github.io/bojack-ipsum/" frameBorder="1" width="100%" height="100%" />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center text-center mb-5 mt-3">
            <div className="row">
              <h6 className="col-10 offset-1">BoJack Ipsum</h6>
              <p className="col-lg-10 offset-lg-1">NSFW: <a href="https://pb-livin.github.io/bojack-ipsum/" target="_blank" rel="noopener noreferrer">lorem ipsum generator</a> that uses JavaScript and Fetch API to return plain text and html versions of dummy text randomly generated from transcripts of <a href="https://www.netflix.com/title/70300800" target="_blank" rel="noopener noreferrer">Netflix's BoJack Horseman</a> (view source code on <a href="https://github.com/pb-livin/bojack-ipsum/tree/gh-pages" target="_blank" rel="noopener noreferrer">GitHub</a>).</p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center text-center mb-5 mt-3">
            <div className="row">
              <p><Link to="/about" className="more">more about my work {'>>'}</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;