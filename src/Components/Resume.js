import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import angry_jack from '../img/angry_jack.jpg';
import monstera from '../img/monstera.svg';
import portfolioLogo from '../img/portfolio-logo.svg';
import skills from '../img/skills.svg';

class Resume extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
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
              <div id="resume-header">
                <img src={portfolioLogo} alt="Gabbie Metheny | Full-Stack JavaScript Developer" />
                {/* <h1>Gabbie Metheny</h1>
                <p>Full-Stack JavaScript Developer</p> */}
              </div>
              <div>
                <h3 className="pt-md-3">tl;dr</h3>
                <p><strong>I am a self-taught full-stack developer living in Los Angeles, CA.</strong></p>
                <p>I'm very comfortable with front-end development, and I enjoy creating SVGs and CSS animations. I'm familiar with the most common front end libraries and frameworks, and I recently rebuilt <Link to="/">my personal website</Link> using React. You can see some of my <Link to="/work">animations</Link> there as well.</p>
                <p>To practice my skills, I designed a <a href="https://pb-livin.github.io/bojack-ipsum" target="_blank" rel="noopener noreferrer">lorem ipsum generator</a> that pulls random quotes from Netflix's BoJack Horseman to make a user-specified number of paragraphs of dummy text, and I plan to add a feature where the user could request quotes by character.</p>
                <p>While building the lorem ipsum generator, I found I needed a reliable way to get episode transcripts. I created a Node.js parser that converts Netflix subtitles (XML-formatted) into proper transcripts, complete with human-readable timestamps.</p>
                <p>In addition to Node.js, I've picked up some Java and Python, and I use the command line daily. I am always looking for new things to learn.</p>
              </div>
              <div>
                <h3 className="pt-md-3">skills</h3>
                <img src={skills} alt="Technical and soft skills graphs" className="pb-2" id="skills-graph" />
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div id="card">
                <div className="d-flex" id="card-top">
                  <img src={angry_jack} alt="Gabbie" id="card-photo" />
                  <ul className="d-flex flex-column justify-content-around align-items-center">
                    <li className="social-icon"><a href="https://www.twitter.com/gpmetheny" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-twitter-icon">Twitter icon</title><path fill="#1DA1F2" d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg></a></li>
                    <li className="social-icon"><a href="https://www.linkedin.com/in/gpmetheny" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-linkedin-icon">LinkedIn icon</title><path fill="#0077B5" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a></li>
                    <li className="social-icon"><a href="https://www.github.com/gpmetheny" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-github-icon">GitHub icon</title><path fill="#181717" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a></li>
                    <li className="social-icon"><a href="https://www.codepen.io/gpmetheny" target="_blank" rel="noopener noreferrer"><svg aria-labelledby="simpleicons-codepen-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-codepen-icon">CodePen icon</title><path fill="#000000" d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V7.79zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v4.82L2.89 15.69l3.618-2.417v-.004zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V2.97l8.085 5.39-3.612 2.415v.003z"/></svg></a></li>
                    <li className="social-icon"><a href="https://teamtreehouse.com/gpmetheny" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#5FCF80" d="M20.537 4.118c-.806-.453-2.092.278-2.871 1.635L16.25 8.215a3.104 3.104 0 0 0 .21 3.18l.041.062c.653.94 1.535 1.808 1.823 2.118a1.613 1.613 0 0 1-.739 2.654 1.603 1.603 0 0 1-2.025-1.747c.045-.35-.067-.927-.574-1.489-.506-.563-1.54.5-1.874 1.61l-.016.061c-.334 1.094-.546 2.05-.482 2.143.037.06.072.12.105.182a1.81 1.81 0 0 1-3.196 1.701 1.806 1.806 0 0 1 .747-2.446l.121-.061c.065-.03.26-.486.423-1.032l.301-.987c.019-.047.033-.107.045-.168l.897-3.19-.957 1.96c-.112-.363-.3-.38-.709-.091-.243.183-.653.531-.85.669-.365.273-.685.788-.851 1.109a1.313 1.313 0 0 1-.41.5c-.684.564-1.687.456-2.234-.227a1.591 1.591 0 0 1 .912-2.552c.409-.092 1.777-.927 2.596-1.52.152-.106.274-.197.38-.304l2.203-1.67-1.914 1.032s-.196-.016-.426.017c-.698.075-1.428.182-1.564.35a.999.999 0 0 1-.29.272c-.637.456-1.519.32-1.989-.317A1.437 1.437 0 0 1 6.29 8.04c.259-.183.577-.274.865-.274.518.016 1.87.29 2.993.092l.288-.045c1.14-.196 2.476-1.186 3.024-2.187l1.184-2.067c.653-1.139.608-2.384-.105-2.795l-1.323-.76c-.653-.363-1.715-.363-2.354 0L2.004 4.97C1.337 5.319.805 6.23.805 6.975v9.744c0 .744.532 1.656 1.178 2.02l8.85 4.983c.652.365 1.716.365 2.354 0l8.826-4.983c.653-.368 1.184-1.276 1.184-2.02v-9.76c0-.744-.531-1.653-1.169-2.02l-1.46-.823"/></svg></a></li>
                  </ul>
                </div>
                <div className="d-flex flex-column justify-content-between" id="card-bottom">
                  <div className="d-flex justify-content-around align-items-center pt-2">
                    <img src={monstera} alt="site logo" id="card-monstera" />
                    <h4>@gpmetheny</h4>
                  </div>
                  <div className="d-flex">
                    <ul className="d-flex flex-column mx-auto p-2">
                      <li><strong><i class="material-icons">phone</i><a href="tel:+1-630-618-1915">(630) 618-1915</a></strong></li>
                      <li><i class="material-icons">mail_outline</i><Link to="/contact">gabbie.metheny@gmail.com</Link></li>
                      <li><Link to="/">https://gpmetheny.github.io</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="experience">
                <h3 className="pt-md-3">experience</h3>
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