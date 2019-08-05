import styled, { css } from 'react-emotion';

export const checkBlockListStyle = css`
  > div {
    width: 100%;
  }
  label {
    &:after {
      content: none !important;
    }
  }
`;

export const LabelWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
