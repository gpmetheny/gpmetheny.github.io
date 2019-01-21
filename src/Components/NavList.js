import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavList = (props) => {
  const navItems = [
    'about',
    'work',
    'resume',
    'contact'
  ];

  return (
    <ul className={props.className}>
      {navItems.map(item => {
        return (
          <li key={item}>
            <NavLink to={`/${item}`}>
              {item}
            </NavLink>
          </li>
        );
      })}
      <li>
        <button onClick={() => props.toggleDarkMode()} id="darkMode">
          <span>toggle dark mode</span>
          <i className="material-icons">brightness_2</i>
        </button>
      </li>
    </ul>
  );
};

const StyledNavList = styled(NavList)`
  visibility: ${props => props.isExpanded
                ? 'visible'
                : 'hidden'};
  text-align: center;
  width: 100%;
  transform: ${props => props.isExpanded
                ? 'translateY(0)'
                : 'translateY(-12rem)'};
  transition: transform .3s .3s;

  @media (min-width: 768px) {
    visibility: visible;
    transform: translateY(0);
    transition: none;
    display: flex;
    width: auto;
  }

  li {
    font-size: 1.5rem;
    font-family: 'Roboto Mono', monospace;
    height: ${props => props.isExpanded
                  ? '3rem'
                  : 0};
    opacity: ${props => props.isExpanded
                  ? 1
                  : 0};
    transition: height .3s .3s, opacity .1s .4s;
    z-index: 100;

    @media (min-width: 768px) {
      border: none;
      margin-left: 1rem;
      height: initial;
      opacity: 1;
    }
  }

  a,
  #darkMode {
    display: ${props => props.isExpanded
                  ? 'block'
                  : 'inline-block'};
    height: ${props => props.isExpanded
                  ? '3rem'
                  : 0};
    transition: all .3s .3s;

    @media (min-width: 768px) {
      height: initial;
      padding: .75rem;
    }
  }
  
  a,
  a:visited {
    color: ${props => props.theme.color.primary} !important;
  }

  a:hover,
  a:focus {
    color: ${props => props.theme.color.brand} !important;
  }

  a.active-link {
    color: ${props => props.theme.color.brand} !important;
  }
    
  #darkMode,
  #darkMode:hover,
  #darkMode:focus,
  #darkMode:active {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: none;
    background-color: ${props => props.theme.color.brandInvert};
    cursor: pointer;

    @media (min-width: 768px) {
      width: fit-content;
      background-color: transparent;
    }
  }

  #darkMode span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: auto;
    font-size: 1rem;
    font-family: ${props => props.theme.font.sans};

    @media (min-width: 768px) {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }

  #darkMode:hover span {
    @media (min-width: 768px) {
      width: fit-content;
      height: 1.5rem;
      padding: .5rem;
      top: 3.5rem;
      right: 2rem;
      background-color: ${props => props.theme.color.brandInvert};
      border-radius: 10px;
      border-top-right-radius: 0;
      clip: unset;
    }
  }

  .material-icons {
    font-size: 1.5rem;
    margin-left: auto;
    color: ${props => props.theme.color.black};
    @media (min-width: 768px) {
      padding-top: .5rem;
      color: ${props => props.theme.color.primary};
    }
  }
`;

export default StyledNavList;