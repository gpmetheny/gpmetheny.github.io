import React, {Component} from 'react';

class Contact extends Component {
  componentDidMount() {
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav ul li:nth-child(3) a').classList.add('active-link');
  }

  render() {
    return (
      <div className="pt-3 d-flex align-items-center justify-content-center content-wrapper" id="contact">
        <div className="contact-wrapper container d-flex flex-column flex-md-row align-items-center justify-content-center px-md-5">
          <div>
            <h1 className="text-center mb-3">contactMe()</h1>
          </div>
          <form action="https://formspree.io/gabbie.metheny@gmail.com" method="POST">
            <div className="form-row text-center">
              <div className="form-group offset-md-4 col-md-4">
                <input type="text" className="form-control" name="name" placeholder="Name" />
              </div>
              <div className="form-group col-md-4">
                <input type="email" className="form-control" name="_replyto" placeholder="Email" />
              </div>
              <div className="form-group offset-md-4 col-md-8">
                <textarea className="form-control" name="message" placeholder="Say hi..." rows="10" cols="60"></textarea>
                <input type="hidden" name="_subject" value="Website Contact" />
                <input type="hidden" name="_next" value="//gpmetheny.github.io" />
                <input type="text" name="_gotcha" style={{display: 'none'}} />
              </div>
              <div className="form-group offset-md-4 col-md-8">
                <input type="submit" className="btn btn-info" value="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;