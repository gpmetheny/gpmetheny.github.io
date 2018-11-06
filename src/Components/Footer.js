import React, {Component} from 'react';

import SocialIcon from './SocialIcon';

import socialList from '../SVG/socialList';

class Footer extends Component {
  render() {
    return (
      <footer className="container py-3">
        <div className="row d-flex flex-column-reverse flex-md-row justify-content-between">

          <span className="text-center py-1"><small>&copy; 2018 Gabbie Metheny</small></span>

          <div className="py-1">
            <ul className="d-flex justify-content-center">
              {socialList
                .filter((social) => social.id !== 'treehouse-icon')
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
                })
              }
            </ul>
          </div> {/* end social wrapper */}

        </div> {/* end row */}
      </footer>
    );
  }
}

export default Footer;