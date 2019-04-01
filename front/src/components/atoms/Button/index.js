import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  border: 1.5px solid black;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 5px;
  background: white;
  font-size: ${(props)=>props.fontSize};
  &:hover {
    background: black;
    color: white;
  }
`;

const Button = ({ type, ...rest }) => {
  return (
    <Wrapper fontSize="1.25rem" {...rest}></Wrapper>
  );
};

export default Button;


/*
const Button = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

Button.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Button.defaultProps = {
  palette: 'grayscale',
}

export default Button
*/
