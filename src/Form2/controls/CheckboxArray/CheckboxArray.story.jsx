import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import Checkbox from '../Checkbox/Checkbox';
import CheckboxArray from './CheckboxArray';
import CheckboxDeal from '../../../UI/molecules/CheckboxDeal/CheckboxDeal';

import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const CheckboxArrayFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.checkboxArray} />
      <Field {...props.controls.control1} />
      <Field {...props.controls.control2} />
      <Field {...props.controls.control3} />
      <Field {...props.controls.control4} />
      <FormDebug {...props} />
    </Form>
  );
};

const CheckboxArrayForm = createForm({
  view: CheckboxArrayFormView,
  FormGroup,
  controls: {
    checkboxArray: {
      title: 'checkboxArray',
      component: CheckboxArray,
      itemComponent: CheckboxDeal,
      options: [
        {
          _id: 1,
          title: 'value1',
          link: 'google.com',
          price: 15000,
        },
        {
          _id: 2,
          title: 'value2',
          link: 'google.com',
          price: 1000,
        },
      ],
    },
    control1: {
      title: 'The Control',
      component: CheckboxArray,
      itemComponent: CheckboxDeal,
      options: [
        {
          value: 'one',
          title: 'The One',
        },
        {
          value: 'two',
          title: 'The Two',
        },
      ],
      placeholder: 'placeholder 1',
    },
    control2: {
      title: 'The Control2',
      component: CheckboxArray,
      itemComponent: CheckboxDeal,
      options: [
        {
          value: 'one',
        },
        {
          value: 'two',
        },
      ],
      placeholder: 'placeholder 2',
    },
    control3: {
      title: 'The Control3',
      component: CheckboxArray,
      itemComponent: CheckboxDeal,
      options: ['one', 'two'],
    },
    control4: {
      title: 'The Control4',
      component: CheckboxArray,
      itemComponent: CheckboxDeal,
      options: ['one', 'two'],
      placeholder: 'placeholder',
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('CheckboxArray ', () => {
      return (
        <Story>
          <CheckboxArrayForm />
        </Story>
      );
    });
