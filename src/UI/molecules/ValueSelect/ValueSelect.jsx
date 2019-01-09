import React, { PureComponent } from 'react';
import { withTheme } from 'emotion-theming';
// import PropTypes from 'prop-types';
import { Option, Image, Title } from './ValueSelect.styles';

// import omit from 'lodash/omit';

@withTheme
class ValueSelect extends PureComponent {
  render() {
    const {
      value,
      data,
      // ...props
    } = this.props;
    console.log(this.props);
    // console.log(this.props);
    // console.log(value.image);
    return (
      <Option image={data.avatar}>
        <If condition={data.avatar}>
          {typeof data.avatar === 'string' ? <Image src={data.avatar} /> : data.avatar}
        </If>

        <Title image={data.avatar}>
          {data.title}
        </Title>
      </Option>
    );
  }
}

export default ValueSelect;
