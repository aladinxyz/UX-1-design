import styled, { keyframes } from 'react-emotion';

const ballScale = keyframes`
  0% {
    transform: scale(0.0);
  }
  100% {
    transform: scale(1.0);
    opacity: 0;
  }
`;

export default styled('div')`
  display: inline-block;
  height: 60px;
  width: 60px;
  animation: ${ballScale} 1s 0s ease-in-out infinite;
  background-color: ${p => p.color};
  border-radius: 100%;
  animation-fill-mode: both;
  margin: 2px;
`;
