import styled from 'styled-components';
import { device } from './consts';

const StyledNav = styled.nav`
  background: ${props => props.theme.global.accent.background};
  color: ${props => props.theme.global.accent.foreground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  .logo {
    padding: 5px;
    &,
    & img {
      height: 100%;
    }
  }
  a {
    color: ${props => props.theme.global.accent.foreground};
    text-decoration: none;
    align-items: center;
    padding: 10px;
    display: flex;
  }

  .menu {
    display: flex;

    a {
      display: none;

      &.active {
        background-color: ${props => props.theme.global.background};
      }

      @media ${device.tablet} {
        display: inline-block;
      }
    }

    button {
      border: none;
      padding: 0;
      margin: 0;
      background: transparent;
    }
  }
`;

export default StyledNav;
