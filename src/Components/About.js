import React, {Component} from 'react';

import CTA from './CTA';

import avatar from '../img/angel-city.jpg';

class About extends Component {
  componentDidMount() {
    document.querySelector('nav a:first-child').focus();
    document.querySelector('nav a:first-child').blur();
    
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(1) a').classList.add('active-link');
    document.querySelector('nav').classList.remove('menuActive');
  }
  
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid content-wrapper" id="about">
        <div className="pt-3 d-flex align-items-center justify-content-center about-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="my-2 mx-auto ml-md-0 mt-md-5" id="about-img-wrapper">
                  <img src={avatar} alt="Gabbie" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="container">
                  <h2 className="text-center mb-3">aboutMe()</h2>

                  <p>Hey there! I'm Gabbie, a freelance full-stack developer living in Los Angeles, California with my husband, two kids and two cats. I like hiking, weightlifting, antiquing and making fun things with computers!</p>

                  <p>I have a solid front-end background and I especially love building projects in React. Lately I've been playing around with Styled Components, a CSS-in-JSS library commonly used with React, but frankly I just love CSS, no matter where or how you write it! I create original SVGs, but also love making pure CSS images and animations (visuals made only by styling HTML divs, spans, pseudoelements, etc.). I am skilled in vanilla JavaScript (ES6 syntax), jQuery, AJAX, Fetch, Bootstrap and much more.</p>

                  <p>For back-end, I work primarily in Node.js (with Express and MongoDB), but I am also knowledgeable about Python and Java, and love learning new languages. I'm a big regular expression fan, and used a whole slew of them to write a little .xml to .txt transcript parser that powers my <a href="https://pb-livin.github.io/bojack-ipsum" target="_blank" rel="noopener noreferrer">BoJack Ipsum generator</a>.</p>

                  <p>I am a determined problem solver who welcomes new challenges and I'd love to work together on whatever you're building next!</p>
                  <div className="d-flex align-items-center justify-content-center text-center my-5">
                    <CTA to="/resume">see my resume {'>>'}</CTA>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;