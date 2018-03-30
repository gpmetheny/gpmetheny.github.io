import React, {Component} from 'react';

class Contact extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
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
    document.querySelector('form').addEventListener('keyup', () => {
      let count=0;
      document.querySelectorAll('.required').forEach(field => {
        if (field.value !== '') {
          count += 1;
          if (count === document.querySelectorAll('.required').length) {
            document.querySelector('#submit').disabled = false;
            return;
          } else {
            document.querySelector('#submit').disabled = true;
          }
        }
      });
    });
  }

  componentWillUnmount() {
    let script = document.querySelector('#twitterScript');
    document.querySelector('body').removeChild(script);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid content-wrapper" id="contact">
        <div className="d-flex align-items-center justify-content-center my-auto contact-wrapper pt-3 mb-3">
          <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-center px-md-5 mx-md-5">
            <div className="d-flex flex-column align-items-center justify-content-between mb-3">
              <h2 className="text-center">contactMe()</h2>
              <div className="twitter-wrap">
                <a href="https://twitter.com/gpmetheny?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @gpmetheny</a>
              </div>
            </div>

              {/* <div class="row">
                <div className="col-6">
                  <a href="https://twitter.com/intent/tweet?screen_name=gpmetheny&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet to @gpmetheny</a>
                </div>
              </div>
            </div> */}

            <form action="https://formspree.io/gabbie.metheny@gmail.com" method="POST">
            
              <div className="form-row text-center">
                <div className="form-group offset-lg-2 col-lg-5">
                  <input type="text" className="form-control required" name="firstName" placeholder="First Name" required />
                </div>
                <div className="form-group col-lg-5">
                  <input type="text" className="form-control required" name="lastName" placeholder="Last Name" required />
                </div>
              </div>

              <div className="form-row text-center">
                <div className="form-group offset-lg-2 col-lg-5">
                  <input type="text" className="form-control" name="company" placeholder="Company (optional)" />
                </div>
                <div className="form-group col-lg-5">
                  <input type="text" className="form-control" name="title" placeholder="Title (optional)" />
                </div>
              </div>

              <div className="form-row text-center">
                <div className="form-group offset-lg-2 col-lg-10">
                  <input type="email" className="form-control required" name="_replyto" placeholder="Email" required />
                </div>
              </div>

              <div className="form-row text-center">
                <div className="form-group offset-lg-2 col-lg-10 mb-0">
                  <textarea className="form-control required" name="message" placeholder="Say hi..." rows="10" cols="60" required></textarea>
                </div>
                <div className="form-group offset-lg-2 col-lg-10">
                  <small>contact form powered by <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer">Formspree</a></small>
                </div>
              </div>

              <div className="form-row text-center" id="hiddenFields">
                <input type="hidden" name="_subject" value="Website Contact" />
                <input type="hidden" name="_next" value={"#success"} />
                <input type="text" name="_gotcha" style={{display: 'none'}} />
              </div>

              <div className="form-row text-center">
                <div className="form-group offset-lg-2 col-lg-10">
                  <input type="submit" className="btn btn-danger" value="Submit" id="submit" disabled />
                </div>
              </div>
                  
                  
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;