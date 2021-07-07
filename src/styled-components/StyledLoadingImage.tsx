import styled from 'styled-components';

const size = 120;

const StyledLoadingImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${size}px;
  height: ${size}px;
  margin-top: ${-size / 2}px;
  margin-left: ${-size / 2}px;
  animation: spin 3s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default StyledLoadingImage;
