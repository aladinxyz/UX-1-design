import styled from 'react-emotion';

export const UserFooterItem = styled('div')`
  height: 120px;
  display: flex;
  margin-top: auto;
  position: relative;
  background-color: rgba(255,255,255,0.85);
  margin-bottom: -1px;
  font-family: ${p => p.theme.fontFamily};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const AvatarContainer = styled('div')`
  position: relative;
  margin-top: -70px;
  padding: 12px 12px 12px 24px;
  font-family: ${p => p.theme.fontFamily};
`;

export const ButtonContainer = styled('div')`
  padding: 10px 36px;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-items: flex-start;
  font-family: ${p => p.theme.fontFamily};
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Content = styled('div')`
  display: flex;
  width: 100%;
  font-family: ${p => p.theme.fontFamily};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled('div')`
  padding: 10px 36px;
  font-family: ${p => p.theme.fontFamily};
`;

export const TextItem = styled('div')`
  margin-top: 5px;
  &:first-child {
    font-size: 24px;
    font-weight: bold;
  }
  font-family: ${p => p.theme.fontFamily};
`;
