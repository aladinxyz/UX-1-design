import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import GridBall from '../../atoms/GrigBall';

import Wrapper from './BallGridPulse.styles';

class BallGridPulse extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
  };
  static defaultProps = {
    color: '#fff',
  }
  render() {
    const {
      color,
    } = this.props;
    return (
      <Wrapper>
        {range(9).map(i => <GridBall key={i} color={color} />)}
      </Wrapper>
    );
  }
}
export default BallGridPulse;
