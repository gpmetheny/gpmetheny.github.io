import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import SVG from './SVG';
import SocialIcon from './SocialIcon';

import socialList from '../SVG/socialList';

import angry_jack from '../img/angry_jack.jpg';
import portfolioLogo from '../img/portfolio-logo.svg';
import skills from '../img/skills.svg';

import '../Loading.css';

class Resume extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    document.querySelector('.logo-wrap').focus();
    document.querySelector('.logo-wrap').blur();
    
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(3) a').classList.add('active-link');
    document.querySelector('nav').classList.remove('menuActive');
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid content-wrapper">
        <div id="loading">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="container pt-3 pt-lg-5" id="resume">
          <div className="row">
            <div className="col-md-7 col-lg-8">
              <div className="mb-3" id="resume-header">
                <img src={portfolioLogo} alt="Gabbie Metheny | Full-Stack JavaScript Developer" />
              </div>
              <div>
                <h3 className="pt-md-3">tl;dr</h3>
                <p><strong>I am a self-taught full-stack developer living in Los Angeles, CA.</strong></p>
                <p>I create engaging front-end user experiences, including original SVGs and CSS animations. I have strong knowledge of common <strong>front-end libraries and frameworks</strong>, and I recently rebuilt <Link to="/">my personal website</Link> using <strong>React</strong>. Some of my <Link to="/work">animations</Link> can be viewed there as well.</p>
                <p>You can see an example of my back-end and database work with my <a href="https://pb-livin.github.io/bojack-ipsum" target="_blank" rel="noopener noreferrer">lorem ipsum generator</a>, also linked on my website, which pulls random quotes from Netflix's BoJack Horseman to make a user-specified number of paragraphs of dummy text. Check back soon to see a feature allowing the user to request quotes by specific characters.</p>
                <p>While building the lorem ipsum generator, I found I needed a reliable way to get episode transcripts. I created a <strong>Node.js parser</strong> that converts <strong>XML-formatted</strong> Netflix subtitles into proper transcripts, complete with human-readable timestamps.</p>
                <p>In addition to Node.js, I've picked up essential <strong>Java</strong> and <strong>Python</strong>, and I have a high comfort level with the command line. I am always looking for new things to learn.</p>
              </div>
              <div>
                <h3 className="pt-md-3">skills</h3>
                <div className="text-center">
                  <img src={skills} alt="Technical and soft skills graphs" className="pb-2" id="skills-graph" />
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div id="card">
                <div className="d-flex" id="card-top">
                  <img src={angry_jack} alt="Gabbie" id="card-photo" />
                  <ul className="d-flex flex-column justify-content-around align-items-center">
                    {socialList.map((social) => {
                      return (
                        <SocialIcon
                          href={social.href}
                          key={social.id}
                          id={social.id}
                          paths={social.paths}
                          circles={social.circles}
                        />
                      );
                    })}                    
                  </ul>
                </div>
                <div className="d-flex flex-column justify-content-between" id="card-bottom">
                  <div className="d-flex justify-content-around align-items-center pt-2">
                    <SVG
                      viewBox="0 0 64 64"
                      height="32"
                      alt="monstera"
                      paths={[
                        {
                          fill: "rgb(1,189,92)",
                          d: " M 38.583 55.119 C 38.207 56.362 37.632 57.547 36.866 58.631 C 36.533 59.102 36.164 59.555 35.759 59.984 C 34.776 60.872 33.614 61.547 32.343 61.993 C 31.959 62.128 31.566 62.242 31.164 62.335 C 30.008 62.56 28.84 62.657 27.678 62.624 C 26.516 62.591 25.361 62.43 24.232 62.137 C 23.598 61.973 22.972 61.767 22.357 61.52 C 21.198 61.061 20.079 60.521 19.012 59.903 C 17.945 59.286 16.928 58.589 15.973 57.817 C 15.446 57.392 14.937 56.943 14.449 56.471 C 14.153 56.186 12.43 53.552 12.15 53.25 C 17.751 58.067 38.329 44.425 31.497 37.969 C 33.253 40.972 12.428 53.904 9.65 49.125 C 9.436 48.691 9.806 49.605 9.618 49.157 C 9.412 48.668 9.222 48.169 9.047 47.663 C 8.613 46.522 8.291 45.402 7.9 44.25 C 6.391 42.92 25.418 33.882 26.175 32.878 C 27.037 34.303 9.144 47.017 7.9 44.25 C 7.736 43.634 5.822 37.505 5.673 36.884 C 5.542 36.343 5.894 37.171 5.775 36.625 C 6.51 41.46 24.008 37.133 22.9 30.625 C 23.297 32.25 5.002 33.563 4.263 30.27 C 3.94 28.605 3.554 26.796 3.275 25.125 C 1.418 22.943 13.523 21.233 15.041 21.429 C 15.631 21.851 4.122 27.405 3.275 25.25 C 3.148 24.328 1.958 16.513 1.845 15.59 C 2.844 19.695 14.392 24.845 13.15 18.75 C 13.552 19.538 2.14 13.915 1.558 11.373 C 1.482 10.546 1.412 9.719 1.346 8.892 C 1.3 8.301 1.256 7.71 1.215 7.119 C 1.151 6.183 1.093 5.248 1.043 4.312 C 0.965 2.875 0.905 1.438 0.861 0 C 2.307 0.163 8.681 1.64 10.122 1.831 C 13.579 3.307 16.849 15.49 16.775 14.5 C 22.283 18.866 17.456 5.924 15.242 2.099 C 16.549 2.334 17.855 2.58 19.158 2.837 C 21.711 3.548 20.367 16.427 19.944 16.15 C 20.453 19.307 17.87 5.658 19.15 2.875 C 20.815 3.251 28.415 4.862 30.072 5.275 C 33.298 6.822 29.328 24.689 29.4 24 C 33.691 25.503 38.952 8.174 35.9 7 C 36.691 7.225 38.495 7.544 39.282 7.79 C 43.235 9.952 33.38 28.172 32.535 27.066 C 29.498 40.32 33.371 19.842 39.4 7.75 C 40.032 7.989 49.782 11.693 50.39 11.978 C 51.571 12.53 49.706 11.408 50.775 12.125 C 54.139 13.897 40.588 32.224 39.212 32.041 C 43.72 36.652 58.92 19.415 55.275 15.75 C 56.362 17.045 60.09 20.397 60.843 21.886 C 61.219 22.63 61.553 23.396 61.844 24.182 C 62.134 24.968 62.353 25.977 62.555 26.8 C 63.76 30.821 62.712 35.058 59.728 38.166 C 59.102 38.687 58.43 39.124 57.717 39.477 C 57.004 39.829 56.251 40.097 55.464 40.279 C 53.822 40.568 52.162 40.702 50.507 40.682 C 48.852 40.663 47.201 40.491 45.576 40.169 C 44.939 40.042 44.306 39.893 43.678 39.721 C 42.266 39.426 40.88 39.066 39.505 38.631 C 38.948 38.455 46.394 50.412 53.549 57.363 C 57.779 61.472 63.452 62.191 63.125 62.063 C 51.018 72.87 36.236 34.595 38.033 41.831 C 38.284 42.844 38.49 43.862 38.652 44.884 C 38.814 45.906 38.931 46.933 39.006 47.964 C 39.086 49.057 39.118 50.156 39.104 51.258 C 39.136 52.575 38.959 53.876 38.583 55.119 Z "
                        }
                      ]}
                    />
                    <h4>@gpmetheny</h4>
                  </div>
                  <div className="d-flex">
                    <ul className="d-flex flex-column mx-auto p-2">
                      <li><strong><i className="material-icons">phone</i><a href="tel:+1-630-618-1915">(630) 618-1915</a></strong></li>
                      <li><i className="material-icons">mail_outline</i><Link to="/contact">gabbie.metheny@gmail.com</Link></li>
                      <li><Link to="/">https://gpmetheny.github.io</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="experience">
                <h3 className="pt-md-5">experience</h3>
                <p>
                  <strong>Self</strong> -
                  Code-At-Home Mom<br />
                  <small><em>FEB 2014 - PRESENT,
                  LOS ANGELES</em></small><br />
                  Raising two small humans, coding when they sleep.<br />
                  <u>Relevant skills</u>:<br />
                  Time management, determination, communication.
                </p>
                <p>
                  <strong>Chase Bank</strong> -
                  ATM Custodian/Teller<br />
                  <small><em>MAR 2012 - JAN 2014,
                  SAN FRANCISCO/SEATTLE/LOS ANGELES</em></small><br />
                  Greeted customers, conducted transactions, handled large quantities of cash and sensitive information.<br />
                  <u>Relevant skills</u>:<br />
                  Security, precision, efficiency.
                </p>
                <p>
                  <strong>Borders Books & Music</strong> -
                  Training Supervisor/Inventory Team/Bookseller<br />
                  <small><em>APR 2008 - JAN 2010,
                  CHICAGO/LOS ANGELES</em></small><br />
                  Helped customers, organized and sold books, trained new and existing employees.<br />
                  <u>Relevant skills</u>:<br />
                  User experience, organization, teaching.
                </p>
              </div>
            </div>
            <div className="col-12">
              <div>
                <h3 className="pt-md-3">education</h3>
                <p>
                  <strong>Wheaton College</strong> - B.A.<br />
                  <small><em>AUG 2003 - MAY 2007, WHEATON, IL</em></small><br />
                  Prepared for future hackathons with all-night study parties the night before any big exam or due date. Hung out with Math and CS majors, when I wasn't busy with the Philosophy and Theater kids. Ate a lot of ramen.
                </p>
                
              </div>
              
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-center text-center">
                <Link to="/contact" className="more m-3">contact me {'>>'}</Link>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Resume;