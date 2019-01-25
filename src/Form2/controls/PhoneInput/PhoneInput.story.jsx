import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import PhoneInput from './PhoneInput';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

import '../../../UI/molecules/PhoneInput/PhoneInput.g.css';

const PhoneInputFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.phoneInput} />
      <FormDebug {...props} />
    </Form>
  );
};

const PhoneInputForm = createForm({
  view: PhoneInputFormView,
  FormGroup,
  controls: {
    phoneInput: {
      title: 'PhoneInput',
      component: PhoneInput,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('PhoneInput ', () => {
      return (
        <Story>
          <PhoneInputForm />
        </Story>
      );
    });
