import styled from 'react-emotion';
import createDynamicTag from '../../../utils/createDynamicTag';

const dynamicTag = createDynamicTag('a');

export default styled(dynamicTag)`
  color: ${p => p.theme.ui.colors.darkGrey};
  text-transform: uppercase;
  letter-spacing: 0.02em;
  opacity: 1;
`;
