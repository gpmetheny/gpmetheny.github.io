import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CTA = styled(Link)`
  display: inline-block;
  min-width: 16rem;
  font-family: ${props => props.theme.font.mono};
  font-size: 1.25rem;
  padding: .75rem 2rem;
  background-color: ${props => props.theme.color.brand};
  border-radius: 2px;
  text-decoration: none !important;
  border: none;
  transition: all .3s;

  &:disabled {
    background-color: ${props => props.theme.color.brandLight};
    color: ${props => props.theme.color.gray};
    
    &:hover,
    &:focus {
      background-color: ${props => props.theme.color.brandLight};
      color: ${props => props.theme.color.gray};
    }
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.color.contrast};
    color: ${props => props.theme.color.brand};
  }

  span {
    display: none;
  }

  &:hover span,
  &:focus span {
    display: inline;
  }
`;

export default CTA;