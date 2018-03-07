import React, {Component} from 'react';

class Work extends Component {
  componentWillMount() {
    
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
      <div className="jumbotron jumbotron-fluid content-wrapper" id="work">
        <div className="container pt-3">
          <h1 className="text-center">CSS Animations</h1>
          <div className="pens-wrapper row mb-lg-5">
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
          <h1 className="text-center">FizzBuzz</h1>
          <div className="pens-wrapper row d-flex">
            <div className="pens col-12 py-3 mb-lg-5">
              <p data-height="250" data-theme-id="32730" data-slug-hash="mXYELw" data-default-tab="js,result" data-user="gpmetheny" data-embed-version="2" data-pen-title="FizzBuzz" className="codepen">See the Pen <a href="https://codepen.io/gpmetheny/pen/mXYELw/">FizzBuzz</a> by Gabbie (<a href="https://codepen.io/gpmetheny">@gpmetheny</a>) on <a href="https://codepen.io">CodePen</a>.</p>
            </div>
          </div>
          <h1 className="text-center">Websites</h1>
          <div className="d-flex flex-column align-items-center">
            <a href="https://pb-livin.github.io/bojack-ipsum/" target="_blank" rel="noopener noreferrer"><strong>BoJack Ipsum</strong> (lorem ipsum generator)</a>
            <a href="https://github.com/pb-livin/bojack-ipsum/tree/gh-pages" target="_blank" rel="noopener noreferrer"><small><em>view source code on GitHub</em></small></a>
          </div>
          <div className="row d-flex">
            <div className="col-12 py-3 mb-lg-5" id="bojack-frame">
              <iframe title="BoJack Ipsum" src="https://pb-livin.github.io/bojack-ipsum/" frameBorder="1" width="100%" height="100%" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;