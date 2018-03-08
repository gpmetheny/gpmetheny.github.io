import React, {Component} from 'react';

class Contact extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(3) a').classList.add('active-link');
    document.querySelector('nav').classList.remove('menuActive');

//  'focus', 'blur',

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

  render() {
    return (
      <div className="jumbotron jumbotron-fluid content-wrapper" id="contact">
        <div className="d-flex align-items-center justify-content-center my-auto contact-wrapper pt-3">
          <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-center px-md-5 mx-md-5">
            <div>
              <h2 className="text-center mb-3">contactMe()</h2>
            </div>
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
                <div className="form-group offset-lg-2 col-lg-10">
                  <textarea className="form-control required" name="message" placeholder="Say hi..." rows="10" cols="60" required></textarea>
                </div>
              </div>

              <div className="form-row text-center" id="hiddenFields">
                <input type="hidden" name="_subject" value="Website Contact" />
                <input type="hidden" name="_next" value={"#success"} />
                <input type="text" name="_gotcha" style={{display: 'none'}} />
              </div>

              <div className="form-row text-center">
                <div className="form-group offset-lg-2 col-lg-10">
                  <input type="submit" className="btn btn-dark" value="Submit" id="submit" disabled />
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