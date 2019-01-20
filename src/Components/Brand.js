import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import SVG from './SVG';

import monstera from '../SVG/logo';

const Brand = (props) => {
  return (
    <NavLink className={props.className} to="/">
      <SVG
        viewBox={monstera.viewBox}
        height={monstera.height}
        paths={monstera.paths}
        id={monstera.id}
        alt="logo"
      />
      <h3>
        <span className="sr-only">Home</span>
        <span id="regex" aria-hidden={true}>&nbsp;Gab+[iy]e?&nbsp;</span>{
          // eslint-disable-next-line
        }<span id="gabbie" aria-hidden={true}>/* Gabbie */</span>
      </h3>
    </NavLink>
  );
};

const StyledBrand = styled(Brand)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: .75rem;

  #monstera {
    height: 1.5rem;
    padding-right: 1rem;
    fill: ${props => props.theme.color.logo};

    @media (min-width: 768px) {
      height: 1.75rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    color: ${props => props.theme.color.primary};
    font-family: 'Roboto Mono', monospace;
    margin: 0;
  }

  #gabbie {
    display: none;
  }

  &:hover #regex,
  &:focus #regex {
    display: none;
  }

  &:hover #gabbie,
  &:focus #gabbie {
    display: unset;
  }
`;

export default StyledBrand;