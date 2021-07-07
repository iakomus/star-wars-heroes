import styled from 'styled-components';

const StyledResult = styled.section`
  article {
    margin: 20px 0;
    background-color: ${props => props.theme.global.highlight.background};
    color: ${props => props.theme.global.highlight.foreground};

    h1 {
      margin-bottom: 0;
    }

    dl {
      margin: 0;
      dt,
      dd {
        display: inline-block;
        width: 50%;
        margin: 0;
        padding: 10px 20px;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${props => props.theme.global.accent.background};

        &:last-of-type {
          border-bottom: none;
        }
      }
    }
  }
`;

export default StyledResult;
