import styled from 'styled-components';

const StyledParagraph = styled.p`
  line-height: 1.75;
  padding: 0.5rem 0;
  color: ${props => props.theme.global.foreground};

  &:first-of-type {
    margin-top: 2rem;
  }
`;

export default StyledParagraph;
