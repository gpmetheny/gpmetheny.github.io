import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../Loading.css';

class Work extends Component {
  /* state = {
    pensLoaded: false
  } */

  // https://blog.codepen.io/documentation/features/embedded-pens/
  // __CodePenIFrameAddedToPage()
  /* pensAddedToPage() {
    setTimeout(() => {
      if (document.querySelector('.cp_embed_iframe')) {
        console.log('pens embedded!');
        this.setState({
          pensLoaded: true
        });
      }
    }, 1000);
  } */

  componentDidMount() {
    document.querySelector('.logo-wrap').focus();
    document.querySelector('.logo-wrap').blur();
    
    let script = document.createElement('script');
    script.src = 'https://static.codepen.io/assets/embed/ei.js';
    script.async = true;
    script.id = "codepenScript";
    document.querySelector('body').appendChild(script);

    // this.pensAddedToPage();

    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(2) a').classList.add('active-link');
    document.querySelector('nav').classList.remove('menuActive');
  }

  // add error handling for if pens never load
  /* componentDidUpdate() {
    if (!!this.state.pensLoaded) {
      setTimeout(() => {
        document.querySelector('.loading').style.opacity = 0;
        document.querySelector('#work').style.opacity = 1;
        document.querySelectorAll('.circle').forEach((circle) => {
          circle.style.animation = 'unset'
        });
        document.querySelector('.loading').style.zIndex = -1000;
        console.log('loader removed!');
        // approx. time needed for pens to load once they're technically embedded
      }, 3000);
    }
  } */

  componentWillUnmount() {
    let script = document.querySelector('#codepenScript');
    document.querySelector('body').removeChild(script);
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid content-wrapper">
        <div className="loading">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="container pt-3 pt-lg-5" id="work">
          <h2 className="text-center">CSS Animations</h2>
          <div className="pens-wrapper row mb-5" id="animations">
            <div className="pens col-12 col-lg-4 py-3">
              <p data-height="350" data-theme-id="32730" data-slug-hash="bLJVBK" data-default-tab="result" data-user="gpmetheny" data-embed-version="2" data-pen-title="Pure CSS Spinning Atom" className="codepen">See the Pen <a href="https://codepen.io/gpmetheny/pen/bLJVBK/">Pure CSS Spinning Atom</a> by Gabbie (<a href="https://codepen.io/gpmetheny">@gpmetheny</a>) on <a href="https://codepen.io">CodePen</a>.</p>
            </div>
            <div className="pens col-12 col-lg-4 py-3">
              <p data-height="350" data-theme-id="32730" data-slug-hash="YYeRQy" data-default-tab="result" data-user="gpmetheny" data-embed-version="2" data-pen-title="CSS keyframe animation: SVG cocktail glass with clinking ice" className="codepen">See the Pen <a href="https://codepen.io/gpmetheny/pen/YYeRQy/">CSS keyframe animation: SVG cocktail glass with clinking ice</a> by Gabbie (<a href="https://codepen.io/gpmetheny">@gpmetheny</a>) on <a href="https://codepen.io">CodePen</a>.</p>
            </div>
            <div className="pens col-12 col-lg-4 py-3">
              <p data-height="350" data-theme-id="32730" data-slug-hash="BYbgEv" data-default-tab="result" data-user="gpmetheny" data-embed-version="2" data-pen-title="Pure CSS Spinning Loader #3" className="codepen">See the Pen <a href="https://codepen.io/gpmetheny/pen/BYbgEv/">Pure CSS Spinning Loader #3</a> by Gabbie (<a href="https://codepen.io/gpmetheny">@gpmetheny</a>) on <a href="https://codepen.io">CodePen</a>.</p>
            </div> 
          </div>
          <div className="d-flex flex-column align-items-center text-center mt-3">
            <div className="row">
              <h6 className="col-10 offset-1">Pure CSS animations using keyframes and transforms.</h6>
              <p className="col-lg-10 offset-lg-1">Cocktail glass SVG is my original creation, atom and spinning loader animations were built using CSS divs, spans and pseudoelements. All animations are pure CSS (Javascript is used only for the pause buttons). See more of my animations on <a href="https://codepen.io/gpmetheny" target="_blank" rel="noopener noreferrer">Codepen</a>.</p>
            </div>
          </div> 
          <h2 className="text-center">FizzBuzz</h2>
          <div className="pens-wrapper row d-flex" id="fizzbuzz">
            <div className="pens col-12 py-3">
              <p data-height="250" data-theme-id="32730" data-slug-hash="mXYELw" data-default-tab="js,result" data-user="gpmetheny" data-embed-version="2" data-pen-title="FizzBuzz" className="codepen">See the Pen <a href="https://codepen.io/gpmetheny/pen/mXYELw/">FizzBuzz</a> by Gabbie (<a href="https://codepen.io/gpmetheny">@gpmetheny</a>) on <a href="https://codepen.io">CodePen</a>.</p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center text-center mb-5 mt-3">
            <div className="row">
              <h6>My JavaScript solution to the classic coder conundrum.</h6>
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
              <h6 className="col-10 offset-1">BoJack Ipsum (NSFW)</h6>
              <p className="col-lg-10 offset-lg-1"><a href="https://pb-livin.github.io/bojack-ipsum/" target="_blank" rel="noopener noreferrer">Lorem Ipsum generator</a> that uses JavaScript and the Fetch API to return dummy text randomly generated from transcripts of <a href="https://www.netflix.com/title/70300800" target="_blank" rel="noopener noreferrer">Netflix's BoJack Horseman</a>.</p>
              <p className="col-lg-10 offset-lg-1">Users can select the number of paragraphs desired, choose between plain text and HTML, and copy the result to their clipboard. (HTML version available on large screens only.)</p>
              <p className="col-lg-10 offset-lg-1"><small>view source code on <a href="https://github.com/pb-livin/bojack-ipsum/tree/gh-pages" target="_blank" rel="noopener noreferrer">GitHub</a></small></p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center text-center mb-5 mt-3">
            <div className="row my-5">
              <p><Link to="/about" className="more">more about my work {'>>'}</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;