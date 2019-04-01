import React, {Component} from 'react';

class Blog extends Component {
  componentDidMount() {
    document.querySelector('nav a:first-child').focus();
    document.querySelector('nav a:first-child').blur();
    
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(5) a').classList.add('active-link');
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
            {/* <div className="row">
              <h1>React Hooks with Suspense</h1>
            </div>
            <div className="row justify-content-between">
              <p><small>by Gabbie Metheny</small></p>
              <p><small>4/1/19</small></p>
            </div> */}
            <div className="row">
              <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?start=42&autoplay=1&mute=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;