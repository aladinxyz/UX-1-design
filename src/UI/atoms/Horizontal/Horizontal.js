import styled from 'react-emotion';
import createDynamicTag from '../../../utils/createDynamicTag';
import removeProps from '../../../utils/removeProps';

const dynamicTag = createDynamicTag('div');
const filteredTag = removeProps(dynamicTag, ['verticalAlign', 'align']);
export default styled(filteredTag)`
  display: flex;
  color: ${p => p.theme.colors.main};
  text-decoration: none;
  align-items: ${p => (p.verticalAlign || 'flex-start')};
  justify-content: ${p => (p.align || 'flex-start')};
`;
