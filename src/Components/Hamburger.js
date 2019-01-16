import React from 'react';
import styled from 'styled-components';

const Hamburger = (props) => {
  return (
    <button className={props.className}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

const StyledHamburger = styled(Hamburger)`
  border: none;
  outline: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto 0;
  padding: 1rem .75rem;
  width: 3rem;
  height: 3.5rem;
  cursor: pointer;

  &:hover {
    outline: none;
  }

  @media (min-width: 768px) {
    display: none;
  }

  span {
    width: 1.5rem;
    height: .25rem;
    background: ${props => props.menuExpanded
                  ? props.theme.color.brand
                  : props.theme.color.white};

    &:first-child {
      position: relative;
      top: ${props => props.menuExpanded
                  ? '.625rem'
                  : 0};
      transform: ${props => props.menuExpanded
                  ? 'rotateZ(45deg) scaleX(1.2)'
                  : 'none'};
      /* moves line down to center before rotating and scaling */
      transition: ${props => props.menuExpanded
                  ? 'top .3s, transform .3s .3s'
                  : 'transform .3s, top .3s .3s, background .3s .3s'};
    }

    &:nth-child(2) {
      margin: .375rem 0;
      opacity: ${props => props.menuExpanded
                  ? 0
                  : 1};
      transition: ${props => props.menuExpanded
                  ? 'opacity .1s .3s'
                  : 'opacity .3s .2s'};
    }

    &:nth-child(3) {
      position: relative;
      bottom: ${props => props.menuExpanded
                  ? '.625rem'
                  : 0};
      transform: ${props => props.menuExpanded
                  ? 'rotateZ(-45deg) scaleX(1.2)'
                  : 'none'};
      /* moves line up to center before rotating and scaling */
      transition: ${props => props.menuExpanded
                  ? 'bottom .3s, transform .3s .3s'
                  : 'transform .3s, bottom .3s .3s, background .3s .3s'};
    }
  }
`;

export default StyledHamburger;