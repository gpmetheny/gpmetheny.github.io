import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CTA = styled(Link)`
  font-size: 1.25rem;
  padding: .5rem 1rem;
  background-color: ${props => props.theme.color.brand};
  border: 3px solid ${props => props.theme.color.black};
  text-decoration: none !important;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.color.black};
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