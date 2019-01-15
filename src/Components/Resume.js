import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import CTA from './CTA';
import Loader from './Loader';
import SVG from './SVG';
import SocialIcon from './SocialIcon';

import monstera from '../SVG/logo';
import socialList from '../SVG/socialList';

import angry_jack from '../img/angry_jack.jpg';
import portfolioLogo from '../img/portfolio-logo.svg';
import skills from '../img/skills.svg';

class Resume extends Component {
  componentDidMount() {
    document.querySelector('.logo-wrap').focus();
    document.querySelector('.logo-wrap').blur();
    
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(3) a').classList.add('active-link');
    document.querySelector('nav').classList.remove('menuActive');
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid content-wrapper">
        <Loader />
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
                      viewBox={monstera.viewBox}
                      height="32"
                      paths={monstera.paths}
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
            <div className="d-flex align-items-center justify-content-center text-center my-5">
                <CTA to="/contact">contact me {'>>'}</CTA>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Resume;