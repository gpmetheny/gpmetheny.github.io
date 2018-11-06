import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import TechIcon from './TechIcon';

import techList from '../SVG/techList';

class Feature extends Component {
  
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    document.querySelector('.logo-wrap').focus();
    document.querySelector('.logo-wrap').blur();
    
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav').classList.remove('menuActive');
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid d-flex content-wrapper" id="feature">
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center text-center align-self-center" id="welcome">
          <div className="row w-100">

            <div className="col-12 d-flex flex-column justify-content-center my-4">
              <h1>Gabbie Metheny</h1>
              <h6><em>{
                // eslint-disable-next-line
                }/* full-stack developer */
              </em></h6>
            </div>

            <div className="col-12 d-flex justify-content-center px-0">
              {techList
                .filter((tech, index) => index <= techList.length / 2)
                .map((tech) => {
                  return (
                    <TechIcon
                      key={tech.id}
                      id={tech.id}
                      paths={tech.paths}
                      circles={tech.circles}
                    />
                  );
                })
              }
            </div>

            <div className="col-12 d-flex justify-content-center px-0">
              {techList
                .filter((tech, index) => index > techList.length / 2)
                .map((tech) => {
                  return (
                    <TechIcon
                      key={tech.id}
                      id={tech.id}
                      paths={tech.paths}
                      circles={tech.circles}
                    />
                  );
                })
              }
            </div>
            
            <div className="col-12 my-5">
              <Link to="/work" className="more">
                see my work
                <span> {'>>'}</span>
              </Link>
            </div>

          </div> {/* end row */}
        </div> {/* end welcome */}
      </div> /* end feature */
    );
  }
}

export default Feature;