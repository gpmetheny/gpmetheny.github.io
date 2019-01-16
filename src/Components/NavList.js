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

  a {
    display: ${props => props.isExpanded
                  ? 'block'
                  : 'unset'};
    height: ${props => props.isExpanded
                  ? '3rem'
                  : 0};
    transition: all .3 .3s;

    @media (min-width: 768px) {
      height: initial;
      padding: .75rem;
    }
  }
`;

export default StyledNavList;