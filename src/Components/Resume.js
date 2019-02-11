import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CTA from './CTA';
// import Loader from './Loader';
import NameHeader from './NameHeader';
import SocialIcon from './SocialIcon';
import SVG from './SVG';

import monstera from '../SVG/logo';
import socialList from '../SVG/socialList';

import avatar from '../img/angel-city.jpg';
// import name from '../img/name.svg';
import skills from '../img/skills.svg';

class _Resume extends Component {
  componentDidMount() {
    document.querySelector('nav a:first-child').focus();
    document.querySelector('nav a:first-child').blur();
    
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(3) a').classList.add('active-link');
    document.querySelector('nav').classList.remove('menuActive');
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={`${this.props.className} jumbotron jumbotron-fluid content-wrapper`}>
        {/* <Loader /> */}
        <div className="container pt-3 pt-lg-5" id="resume">
          <div className="row">
            <div className="col-md-7 col-lg-6 offset-lg-1">
              <div className="mb-3" id="resume-header">
                <h1 className="sr-only">Gabbie Metheny</h1>
                <NameHeader />
                {/* <img src={name} id="name" alt="Gabbie Metheny" /> */}
              </div>
              <div>
                <h3 className="pt-0">tl;dr</h3>
                <p>I am a self-taught full-stack developer in Los Angeles, California. I love SVGs, CSS and all things JavaScript.</p>
                <p>I create engaging, accessible user experiences, including original designs and animations. I am skilled in common front-end libraries and frameworks, and I recently rebuilt my <Link to="/">portfolio website</Link> using React and Styled Components. You can see some of my <Link to="/work">animations</Link> there as well.</p>
                <p>While first learning JavaScript, I built a <a href="https://pb-livin.github.io/bojack-ipsum" target="_blank" rel="noopener noreferrer">lorem ipsum generator</a> that outputs random dummy text from <a href="https://www.netflix.com/title/70300800" target="_blank" rel="noopener noreferrer">Netflix's <em>BoJack Horseman</em></a>. In need of a reliable way to get episode transcripts, I wrote a Node.js parser that converts .xml Netflix subtitles into readable .txt transcripts, complete with formatted timestamps. It works on nearly all of Netflix's content, including subtitles in many different languages.</p>
                <p>As a freelance developer working as part of a remote team, I cooperatively produced a responsive single page quiz app for a large company, and in the process learned a lot about handling animations in React. I also led a complete redesign of a static website for a professional speaker.</p>
                <p>Much of my work is viewable on my <Link to="/work">portfolio site</Link>, and additional screenshots are available upon request.</p>
              </div>
              <div>
                <h3 className="pt-md-3">skills</h3>
                <div className="text-center">
                  <img src={skills} alt="Technical and soft skills graphs" className="pb-2" id="skills-graph" />
                </div>
              </div>
            {/* <div className="col-12"> */}
              <div id="education">
                <h3 className="pt-md-3">education</h3>
                <p>
                  <strong>Wheaton College</strong> - B.A. Christian Education<br />
                  <span>AUG 2003 - MAY 2007, WHEATON, IL</span>
                  <span>GPA: 3.0/4.0   GPA IN MAJOR: 3.75/4.0</span>
                  Took courses in theater, film, photography and creative writing. Interned as a Youth Leader at a local church. Played video games with the Math and CS majors. Ate a lot of ramen.
                </p>
                
              </div>
              
            {/* </div> */}
            </div>
            <div className="col-md-5 col-lg-4">
              <div id="card">
                <div className="d-flex" id="card-top">
                  <img src={avatar} alt="Gabbie" id="card-photo" />
                  <ul className="d-flex flex-column justify-content-around align-items-center">
                    {socialList
                      .filter((social) => social.id !== 'mastodon-icon')
                      .map((social) => {
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
                      id={`${monstera.id}-card`}
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
                  <strong>Self</strong> -<br/>
                  Freelance Web Developer/Coding Student/Mom<br />
                  <span>FEB 2014 - PRESENT,
                  LOS ANGELES</span>
                  Learning to code and making cool things with computers while raising two small humans.<br />
                  Member: Tech Ladies, PB Livin', Fempire, Treehouse.<br/>
                  <span>Relevant skills:</span>
                  Time management, determination, communication.
                </p>
                <p>
                  <strong>Chase Bank</strong> -<br/>
                  ATM Custodian/Teller<br />
                  <span>MAR 2012 - JAN 2014,
                  SAN FRANCISCO/SEATTLE/LOS ANGELES</span>
                  Greeted customers, conducted transactions, handled large quantities of cash and sensitive information.<br />
                  <span>Relevant skills:</span>
                  Security, precision, empathy.
                </p>
                <p>
                  <strong>Borders Books & Music</strong> -<br/>
                  Training Supervisor/Inventory Team/Bookseller<br />
                  <span>APR 2008 - JAN 2010,
                  CHICAGO/LOS ANGELES</span>
                  Helped customers, organized and sold books, trained new and existing employees.<br />
                  <span>Relevant skills:</span>
                  UX, organization, teaching.
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

const Resume = styled(_Resume)`
  h3 {
    font-weight: bold;
  }

  #education span,
  #experience span {
    display: block;
    font-size: .75rem;
    font-weight: bold;
    color: ${props => props.theme.color.brand};
  }

  #experience span:nth-of-type(2) {
    font-weight: normal;
    font-family: ${props => props.theme.font.mono};
  }

  #card a,
  #card a:visited,
  #card i {
    color: ${props => props.theme.color.black};
  }

  #card a:hover,
  #card a:focus,
  #card a:active {
    color: ${props => props.theme.color.brand};
    /* background-color: transparent; */
  }

  #monstera-card {
    fill: ${props => props.theme.color.logo};
  }
`;

export default Resume;