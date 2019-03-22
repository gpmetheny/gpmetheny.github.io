import React, {Component} from 'react';
import CTA from './CTA';
import styled from 'styled-components';

class _Contact extends Component {
  componentDidMount() {
    // currently setting focus on this page to the first form field using HTML `autofocus` attr
    // document.querySelector('nav a:first-child').focus();
    // document.querySelector('nav a:first-child').blur();
    
    // twitter script
    let script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.charset = 'utf-8';
    script.async = true;
    script.id = "twitterScript";
    document.querySelector('body').appendChild(script);

    // menu
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(4) a').classList.add('active-link');
    document.querySelector('nav').classList.remove('menuActive');

    // form listener
    document.querySelector('form').addEventListener('keyup', (event) => {
      // should only fire on required form fields
      // prevents focus bug when navigating w/ keyboard
      if (event.target.classList.contains('required')) {
        
        const requiredFields = Array.from(document.querySelectorAll('.required'));
        const submitButton = document.querySelector('#submit');

        requiredFields.reduce((count, field) => {
          if (field.value) {
            count += 1;
            count >= requiredFields.length
              ? submitButton.disabled = false
              : submitButton.disabled = true;
            return count;
          }
          return null;
        }, 0);
      }
    });
  }

  componentWillUnmount() {
    let script = document.querySelector('#twitterScript');
    document.querySelector('body').removeChild(script);
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={`${this.props.className} jumbotron jumbotron-fluid content-wrapper`} id="contact">
        <div className="d-flex align-items-center justify-content-center my-auto contact-wrapper pt-3 mb-3">
          <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-center px-md-5 mx-md-5">
            <div className="d-flex flex-column align-items-center justify-content-between mb-3">
              <h2 className="text-center">contactMe()</h2>
              <div className="twitter-wrap">
                <a href="https://twitter.com/gpmetheny?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @gpmetheny</a>
              </div>
            </div>

            <form action="https://formspree.io/gabbie.metheny@gmail.com" method="POST">
            
              <div className="form-row">
                <div className="form-group offset-lg-2 col-lg-5 mb-0">
                  <label className="mb-0" for="firstName"><small>First Name<span> *</span></small></label>
                  <input type="text" className="form-control required" name="firstName" id="firstName" required autoFocus />
                </div>
                <div className="form-group col-lg-5 mb-0">
                  <label className="mb-0" for="lastName"><small>Last Name<span> *</span></small></label>
                  <input type="text" className="form-control required" name="lastName" id="lastName" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group offset-lg-2 col-lg-5 mb-0">
                  <label className="mb-0" for="jobTitle"><small>Job Title</small></label>
                  <input type="text" className="form-control" name="jobTitle" id="jobTitle" />
                </div>
                <div className="form-group col-lg-5 mb-0">
                  <label className="mb-0" for="company"><small>Company</small></label>
                  <input type="text" className="form-control" name="company" id="company" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group offset-lg-2 col-lg-10 mb-0">
                  <label className="mb-0" for="_replyto"><small>Email<span> *</span></small></label>
                  <input type="email" className="form-control required" name="_replyto" id="_replyto" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group offset-lg-2 col-lg-10 mb-0">
                  <label className="mb-0" for="message"><small>Message<span> *</span></small></label>
                  <textarea className="form-control required" name="message" id="message" rows="10" cols="60" required></textarea>
                </div>
                <div className="form-group offset-lg-2 col-lg-10 text-center">
                  <small>contact form powered by <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer" tabIndex={-1}>Formspree</a></small>
                </div>
              </div>

              <div className="form-row" id="hiddenFields">
                <input type="hidden" name="_subject" value="Website Contact" />
                <input type="hidden" name="_next" value={"#success"} />
                <input type="text" name="_gotcha" style={{display: 'none'}} />
              </div>

              <div className="form-row text-center">
                <div className="form-group offset-lg-2 col-lg-10">
                  <CTA as="input" type="submit" value="submit" id="submit" disabled />
                  {/* <input type="submit" className="btn btn-danger" value="Submit" id="submit" disabled /> */}
                </div>
              </div>
                  
                  
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const Contact = styled(_Contact)`
  /* prevents edge bug where () break to separate line */
  h2 {
    white-space: nowrap;
  }

  label {
    font-family: ${props => props.theme.font.mono};

    span {
      color: ${props => props.theme.color.brand};      
    }
  }

  input:not([type="submit"]),
  textarea {
    background-color: ${props => props.theme.color.contrastMild};
    color: ${props => props.theme.color.contrast};
    /* removes red outline from textarea in FF */
    box-shadow: none;

    &:focus {
      background-color: ${props => props.theme.color.primary};
      color: ${props => props.theme.color.contrast};
      border-color: ${props => props.theme.color.brandLight};
      box-shadow: 0 0 0 0.2rem ${props => props.theme.color.brandLight};
    }

    &::placeholder {
      color: ${props => props.theme.color.contrastMedium};
    }
  }
`;

export default Contact;