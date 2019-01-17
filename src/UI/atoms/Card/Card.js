import styled from 'react-emotion';
import { createDynamicTag } from '../../../utils';

const dynamicTag = createDynamicTag('div');
export default styled(dynamicTag)`
  text-decoration: none;
  background-color: #efefef;
  padding: 16px;
  display: block;
`;
