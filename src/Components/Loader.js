import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = props => keyframes`
  20% {
    background-color: ${props.theme.color.brand};
    /* opacity: 1; */
  }
`;

const fadeOut = keyframes`
  to {
    opacity: 0;
    z-index: -1000;
  }
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: calc(50% - 2.5rem);
  bottom: calc(50% - 2.5rem);
  left: calc(50% - 7.5rem);
  right: calc(50% - 7.5rem);
  z-index: 1000;
  animation: ${fadeOut} .25s 2.5s ease-in forwards;
`;

const Dot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin: .5rem;
  background: ${props => props.theme.color.brandXLight};
  animation: ${pulse} .6s ease-in-out 5 both;

  &:nth-child(2) {
    animation-delay: .15s;
  }

  &:nth-child(3) {
    animation-delay: .3s;
  }
`;

class Loader extends Component {
  render() {
    return (
      <Loading>
        <Dot />
        <Dot />
        <Dot />
      </Loading>
    );
  }
}

export default Loader;