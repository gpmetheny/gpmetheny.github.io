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
                <div className="my-2 mx-auto" id="about-img-wrapper">
                  <img src={avatar} alt="Gabbie" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="container">
                  <h2 className="text-center mb-3">aboutMe()</h2>
                  <p className="text-dark">Hey there! I am a coder, mama, and avid coffee drinker residing in the Highland Park neighborhood of Los Angeles, California. When I'm not coding, momming, or caffeinating, I'm probably sleeping. Just kidding! I don't sleep. I do, however, enjoy hiking, weightlifting, antiquing, and eating unnatural quantities of avocado toast.</p>
                  <p className="text-dark">I have a solid front-end development background, including experience in React, Bootstrap, jQuery, AJAX, and Fetch, as well as a back-end with Node.js, Express, MongoDB, Python, and Java. While I have an aesthetic eye and love creating SVGs and CSS animations, I also really enjoy digging in to the nitty gritty of JavaScript and programming logic. I am a determined problem solver who welcomes new challenges.</p>
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