import React, {Component} from 'react';
import portfolioLogo from '../img/portfolio-logo.svg';

class Feature extends Component {
  componentDidMount() {
    const topTriangles = document.querySelectorAll('.top span');
    const bottomTriangles = document.querySelectorAll('.bottom span');
    const topColors = [
      'turquoise', 'darkcyan', 'burlywood', 'transparent', 'bisque', '#F94E6D', 'transparent', 'transparent', 'transparent'
    ];
    const bottomColors = [
      'turquoise', 'transparent', 'transparent', 'transparent', 'transparent'
    ];

    (function changeBackground() {
      let index = 0;
      for (index=0; index<topTriangles.length; index++) {
        let randomColorIndex = Math.floor(Math.random() * 9);
        let randomColor = topColors[randomColorIndex];
        topTriangles[index].style.borderTopColor = randomColor;
      }
      
      for (index=0; index<bottomTriangles.length; index++) {
        let randomColorIndex = Math.floor(Math.random() * 5);
        let randomColor = bottomColors[randomColorIndex];
        bottomTriangles[index].style.borderBottomColor = randomColor;
      }
    })()

    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    // document.querySelector('.logo-wrap').classList.add('active-link');
    document.querySelector('nav').classList.remove('menuActive');
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid content-wrapper" id="feature">
        <div className="group">
          <div className="top">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bottom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="group">
          <div className="top">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bottom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="group">
          <div className="top">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bottom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid text-center" id="welcome">
          <img src={portfolioLogo} alt="Gabbie Metheny | Full-Stack JavaScript Developer" className="logo" />
          <a href="#work" className="btn btn-lg btn-success">see my work<span> >></span></a>
        </div>
        <div className="group">
          <div className="top">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bottom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="group">
          <div className="top">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bottom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="group">
          <div className="top">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bottom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;