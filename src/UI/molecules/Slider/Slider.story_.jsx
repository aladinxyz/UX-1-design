import React from 'react'; //eslint-disable-line
import Slider from './Slider';

const getFont = fontName => (
  <link
    href={`https://fonts.googleapis.com/css?family=${fontName.split(' ').join('+')}&amp;subset=cyrillic`}
    rel="stylesheet"
  />
);

// const getStyles = () => (
//   <link
//     href="//localhost:3000/assets/main.css"
//     rel="stylesheet"
//     type="text/css"
//   />
// );

const simpleMarks = {
  0: '0',
  100: '142 0000',
};

const marks = {
  0: '0%+',
  25: '25%+',
  50: '50%+',
  75: '75%+',
  100: '100%',
};

module.exports = function ({ storiesOf, action, knob }) {
  return storiesOf('Slider', module)
    // .addHtml(getStyles())
    .addHtml(getFont('PT Sans'))
    .add('Slider Default', () => (
      <Slider
        defaultValue={30}
        disabled={knob.boolean('Disabled')}
      />
    ))
    .add('Slider Range', () => (
      <Slider
        range
        defaultValue={[20, 50]}
        onChange={action('onChange')}
        disabled={knob.boolean('Disabled')}
      />
    ))
    .add('Slider Marks', () => (
      <Slider
        range
        marks={simpleMarks}
        defaultValue={[20, 50]}
        onChange={action('onChange')}
        disabled={knob.boolean('Disabled')}
      />
    ))
    .add('Slider Fixed Marks', () => (
      <Slider
        range
        marks={marks}
        step={null}
        defaultValue={[25, 50]}
        onChange={action('onChange')}
        disabled={knob.boolean('Disabled')}
      />
    ));
};
