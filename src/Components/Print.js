import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

class Print extends Component {
  componentDidMount() {
    document.querySelector('.logo-wrap').focus();
    document.querySelector('.logo-wrap').blur();
    
    // menu
    document.querySelectorAll('nav a').forEach(navlink => navlink.classList.remove('active-link'));
    document.querySelector('nav').classList.remove('menuActive');

    // print
    // add listener if btn was rendered
    if (document.querySelector('#print-btn')) {
      document.querySelector('#print-btn').addEventListener('click', () => {
        try {
          window.alert('Okay!');
          window.print();
          let msg = document.createElement('p');
          msg.innerHTML = `Hooray!`;
          document.querySelector('#error-msg').appendChild(msg);        
        } catch (e) {
          let msg = document.createElement('p');
          msg.innerHTML = `Oops! ${e}`;
          document.querySelector('#error-msg').appendChild(msg);
        }
      });
    }
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {
    
    // ff mobile solution: conditionally render print btn based on whether window.print is a function
    function supportPrint() {   
      return (typeof(window.print) === 'function');
    }

    return (
      <div className="jumbotron jumbotron-fluid content-wrapper" id="print">
        <div className="pt-3 d-flex align-items-center justify-content-center success-wrapper">
          <div className="container d-flex flex-column align-items-center justify-content-around px-md-5">
            <div className="mb-5 text-center">

              <div className="d-flex flex-column align-items-center justify-content-between mb-3">
                <h2 className="text-center">printMe({/* <i className="material-icons" style={{color: '#222', fontSize: '1.5rem'}}>done</i> */})</h2>
              </div>
              <p>See what happens!</p>
            </div>
            <div className="my-5">
              {/* conditional render based on browser support */}
              {supportPrint() ? <button className="more" id="print-btn">click</button> : <p>Your browser does not support printing.</p>}
            </div>
            <div id="error-msg"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Print;