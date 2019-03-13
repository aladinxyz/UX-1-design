import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';

import ScaleRandom from './LineScaleRandom.styles';

class LineScaleRandom extends PureComponent {
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
      <div>
        {range(4).map(i => <ScaleRandom key={i} color={color} />)}
      </div>
    );
  }
}
export default LineScaleRandom;
