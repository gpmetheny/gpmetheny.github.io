import React, {Component} from 'react';
import angry_jack from '../img/angry_jack.jpg';

class About extends Component {
  componentDidMount() {
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(1) a').classList.add('active-link');
    document.querySelector('nav').classList.remove('menuActive');
  }
  
  render() {
    return (
      <div className="jumbotron jumbotron-fluid content-wrapper" id="about">
        <div className="pt-3 d-flex align-items-center justify-content-center about-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="my-2 mx-auto" id="about-img-wrapper">
                  <img src={angry_jack} alt="Gabbie" />
                </div>
              </div>
              <div className="col-md-6 col-lg-8">
                <div className="container">
                  <h2 className="text-center mb-3">aboutMe()</h2>
                  <p className="text-dark">Hey there! I am a coder, mama and avid coffee drinker residing in the Highland Park neighborhood of Los Angeles, California. When I'm not coding, momming, or caffeinating, I'm probably sleeping. Just kidding! I don't sleep.</p>
                  <p className="text-dark">I have a solid front-end development background, with experience in React, Node.js, MongoDB, Express, and Python. While I have an aesthetic eye and love creating SVGs and CSS animations, I also really enjoy digging in to the nitty gritty of JavaScript and programming logic. I am a determined problem solver who welcomes new challenges.</p>
                  <p className="text-center"><a href="#contact">I'd love to hear from you!</a></p>
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