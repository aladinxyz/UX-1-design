import React from 'react';
import Story from '../Story';
import Loading from './Loading';
import LoadingDots from '../LoadingDots';

module.exports = ({ storiesOf }) => (
  storiesOf('Loading', module)
    .add('Loading', () => (
      <Story>
        <Loading />
      </Story>
    ))
    .add('LoadingDots', () => (
      <Story>
        <LoadingDots />
      </Story>
    ))
);

