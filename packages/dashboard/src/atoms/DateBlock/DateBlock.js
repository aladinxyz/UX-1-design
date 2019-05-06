import styled from 'react-emotion';

export default styled('div')`
  font-size: 13px;
  line-height: 1.43;
  letter-spacing: -0.1px;
  text-align: left;
  color: #${p => p.theme.colors.main};
  font-family: ${p => p.theme.fontFamily};
`;
