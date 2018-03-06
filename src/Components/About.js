import React, {Component} from 'react';
import angry_jack from '../img/angry_jack.jpg';

class About extends Component {
  componentDidMount() {
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(1) a').classList.add('active-link');
  }
  
  render() {
    return (
      <div className="pt-3 d-flex align-items-center justify-content-center content-wrapper" id="about">
        <div className="about-wrapper container">
          <div className="row">
            <div className="text-center col-md-4">
              <img src={angry_jack} alt="Gabbie" className="img-fluid px-5 pb-3" />
            </div>
            <div className="col-md-8">
              <h1 className="text-center mb-3">aboutMe()</h1>
              <p className="text-dark">Hey there! I am a coder, mama and avid coffee drinker residing in the Highland Park neighborhood of Los Angeles, California. When I'm not coding, momming, or caffeinating, I'm probably sleeping. Just kidding! I don't sleep.</p>
              <p className="text-dark">I have a strong front-end development background, with back-end experience in Node.js and Python. I love making SVGs and CSS animations, but I also really enjoy digging in to the nitty gritty of JavaScript and programming logic. <a href="#contact">I'd love to hear from you!</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;