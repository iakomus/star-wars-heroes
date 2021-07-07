import styled from 'styled-components';

const StyledHeader = styled.h1`
  padding: 10px 20px;
  margin-top: 0;
  background-color: ${props => props.theme.global.accent.background};
  color: ${props => props.theme.global.accent.foreground};
`;

export default StyledHeader;
