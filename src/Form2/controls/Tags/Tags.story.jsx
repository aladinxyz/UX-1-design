import React from 'react';
import { Form, Field } from 'formik';
import range from 'lodash/range';
import Story from '../../../Story';
import createForm from '../../createForm';
import Tags from './Tags';
import FormDebug from '../../FormDebug';

const TagsFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.tags} />
      <Field {...props.controls.tags2} />
      <Field {...props.controls.tags3} />
      <Field {...props.controls.tags4} />
      <Field {...props.controls.tags5} />
      <FormDebug {...props} />
    </Form>
  );
};

const TagsForm = createForm({
  view: TagsFormView,
  controls: {
    tags: {
      title: 'Tags',
      component: Tags,
      triggerTitle: 'Выбрать теги',
      flat: true,
      options: [
        {
          value: 'one',
          title: 'Один',
        },
        {
          value: 'two',
          title: 'Два',
        },
        {
          value: 'three',
          title: 'Три',
        },
        {
          value: 'four',
          title: 'Четыре',
        },
      ],
    },
    tags2: {
      title: 'Tags2',
      component: Tags,
      flat: true,
      options: range(1, 100).map(value => ({
        value,
        title: `Title ${value}`,
      })),
    },
    tags3: {
      title: 'Tags',
      component: Tags,
      flat: true,
      options: range(1, 100),
    },
    tags4: {
      title: 'Tags',
      component: Tags,
      flat: true,
      options: range(1, 100),
    },
    tags5: {
      title: 'Tree Tags',
      component: Tags,
      triggerTitle: 'Выбрать теги',
      options: [
        {
          title: 'One',
          value: 'one',
          children: [
            {
              title: 'One1',
              value: 'one1',
            },
            {
              title: 'One2',
              value: 'one2',
            },
          ],
        },
        {
          title: 'Two',
          value: 'two',
          children: [
            {
              title: 'Two1',
              value: 'two1',
            },
            {
              title: 'Two2',
              value: 'two2',
            },
            {
              title: 'Two3',
              value: 'two3',
            },
          ],
        },
      ],
    },
  },
});


export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Tags ', () => {
      return (
        <Story>
          <TagsForm />
        </Story>
      );
    });
