import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import CheckboxComponent from '../../controls/Checkbox';
import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';

const CheckboxView = (props) => {
  const {
    // handleSubmit,
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.blue} />
      <Field {...controls.black} />
      <Field {...controls.green} />
       <DEV json={values} />
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Form>
  );
};

const Checkbox = createForm({
  view: CheckboxView,
  FormGroup: LightFormGroup,
  controls: {
    blue: {
      title: 'first value',
      component: CheckboxComponent,
    },
    black: {
      title: 'second value',
      component: CheckboxComponent,
    },
    green: {
      title: 'third value',
      component: CheckboxComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Checkbox ', () => {
      return (
        <Story>
          <Checkbox />
        </Story>
      );
    });
