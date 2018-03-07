import React, {Component} from 'react';

class Success extends Component {
  componentDidMount() {
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(3) a').classList.add('active-link');
    document.querySelector('nav').classList.remove('menuActive');
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid content-wrapper" id="success">
        <div className="pt-3 d-flex align-items-center justify-content-center success-wrapper">
          <div className="container d-flex flex-column align-items-center justify-content-around px-md-5">
            <div className="mb-5 text-center">
              <h1 className="mb-3">contactMe(<i className="material-icons" style={{color: 'turquoise', fontSize: '2rem'}}>done</i>)</h1>
              <h4>Thanks! I'll be in touch soon!</h4>
            </div>
            <div className="mt-5">
              <a href="#work">
                back to my work
                <p className="text-center"><i className="material-icons" style={{fontSize: '4rem'}}>keyboard_arrow_left</i></p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;