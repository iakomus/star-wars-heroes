import styled from 'styled-components';

const StyledApp = styled.main`
  background: ${props => props.theme.global.background};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default StyledApp;
