import styled from 'styled-components';
import { device, transitionDuration } from './consts';

const StyledForm = styled.form`
  display: flex;
  padding: 15px;
  position: sticky;
  top: 0;
  background: ${props => props.theme.global.accent.background};
  transition: padding ${transitionDuration};

  input {
    width: 100%;
    border-width: ${props => props.theme.input.borderWidth};
    border-style: ${props => props.theme.input.borderStyle};
    border-color: ${props => props.theme.input.borderColor};
    border-right: none;
    color: ${props => props.theme.input.foreground};
    background-color: ${props => props.theme.input.background};
    outline: none;
    padding: 5px 10px;

    ::placeholder {
      color: ${props => props.theme.input.placeholder};
    }
  }

  button {
    border-width: ${props => props.theme.button.borderWidth};
    border-style: ${props => props.theme.button.borderStyle};
    border-color: ${props => props.theme.button.primary.borderColor};
    background: ${props => props.theme.button.primary.background};
    color: ${props => props.theme.button.primary.foreground};
  }

  @media ${device.tablet} {
    padding: 40px 80px;
  }
`;

export default StyledForm;
