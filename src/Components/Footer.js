import React, {Component} from 'react';
import styled from 'styled-components';

import SocialIcon from './SocialIcon';

import socialList from '../SVG/socialList';

class _Footer extends Component {
  render() {
    return (
      <footer className={`${this.props.className} container pb-3`}>
        <div className="row d-flex flex-column-reverse flex-md-row justify-content-between">

          <span className="text-center py-1"><small>&copy; 2018 Gabbie Metheny</small></span>

          <div className="py-1">
            <ul className="d-flex justify-content-center">
              {socialList
                // .filter((social) => social.id !== 'treehouse-icon')
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

const Footer = styled(_Footer)`
  position: relative;
  color: ${props => props.theme.color.contrastMedium};
  /* background-color: ${props => props.theme.color.primary}; */

  .social-icon {
    background-color: ${props => props.theme.color.black};
    border-color: ${props => props.theme.color.contrast};
  }

  .social-icon:hover,
  .social-icon:focus {
    background-color: ${props => props.theme.color.white};
  }

  .social-icon a path {
    fill: ${props => props.theme.color.white};
  }
`;

export default Footer;