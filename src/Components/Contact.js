import React, {Component} from 'react';

class Contact extends Component {
  componentDidMount() {
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(3) a').classList.add('active-link');
    document.querySelector('nav').classList.remove('menuActive');
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid content-wrapper" id="contact">
        <div className="d-flex align-items-center justify-content-center my-auto contact-wrapper pt-3">
          <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-center px-md-5 mx-md-5">
            <div>
              <h1 className="text-center mb-3">contactMe()</h1>
            </div>
            <form action="https://formspree.io/gabbie.metheny@gmail.com" method="POST">
              <div className="form-row text-center">
                <div className="form-group offset-lg-4 col-lg-4">
                  <input type="text" className="form-control" name="name" placeholder="Name" />
                </div>
                <div className="form-group col-lg-4">
                  <input type="email" className="form-control" name="_replyto" placeholder="Email" />
                </div>
                <div className="form-group offset-lg-4 col-lg-8">
                  <textarea className="form-control" name="message" placeholder="Say hi..." rows="10" cols="60"></textarea>
                  <input type="hidden" name="_subject" value="Website Contact" />
                  <input type="hidden" name="_next" value={"#success"} />
                  <input type="text" name="_gotcha" style={{display: 'none'}} />
                </div>
                <div className="form-group offset-lg-4 col-lg-8">
                  <input type="submit" className="btn btn-success" value="Submit" />
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