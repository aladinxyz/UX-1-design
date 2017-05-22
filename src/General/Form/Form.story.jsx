import React from 'react';
import Form from './Form';

const data = {
  email: 'hi@coder24.ru',
  profile: {
    fio: 'Суворов Игорь Александрович',
    age: 10,
    bdate: '1990-02-15',
  },
};

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Form', module)
    .addHtml(<link rel="stylesheet" type="text/css" href="http://yastatic.net/bootstrap/3.3.6/css/bootstrap.min.css" />)
    .add('Fields as strings', () => (
      <Form
        fields={[
          'firstname',
          'lastname',
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
    .add('Fields as objects', () => (
      <Form
        fields={[
          {
            name: 'firstname',
            title: 'Имя',
          },
          {
            name: 'lastname',
            title: 'Фамилия',
          },
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
    .add('Icons and placeholder', () => (
      <Form
        fields={[
          {
            name: 'firstname',
            title: 'Имя',
            icon: 'И',
            placeholder: 'Например, Василий',
          },
          {
            name: 'lastname',
            title: 'Фамилия',
            icon: 'Ф',
            placeholder: 'Например, Уткин',
            help: 'Фамилия и отчество (если есть)',
          },
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
    .add('With default value', () => (
      <Form
        fields={[
          {
            name: 'firstname',
            title: 'Имя',
            value: 'Игорь',
          },
          {
            name: 'lastname',
            title: 'Фамилия',
            value: 'Суворов',
          },
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
    .add('Deep (with dot) data', () => (
      <Form
        fields={[
          {
            name: 'name.firstname',
            title: 'Имя',
            value: 'Игорь',
          },
          {
            name: 'name.lastname',
            title: 'Фамилия',
            value: 'Суворов',
          },
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
    .add('Custom formControl props', () => (
      <Form
        fields={[
          {
            name: 'email',
            title: 'Email',
            control: {
              placeholder: 'Например, utkin@mail.ru',
              type: 'email',
            },
          },
          {
            name: 'password',
            title: 'Пароль',
            control: {
              type: 'password',
            },
          },
          {
            name: 'profile.fio',
            title: 'ФИО',
            control: {
              placeholder: 'Например, Василий',
            },
          },
          {
            name: 'profile.age',
            title: 'Возраст',
            control: {
              placeholder: 'Например, 55',
              type: 'number',
            },
          },
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
    .add('External state data and formats', () => (
      <Form
        data={data}
        fields={[
          {
            name: 'email',
            title: 'Email',
            control: {
              placeholder: 'Например, utkin@mail.ru',
              type: 'email',
            },
          },
          {
            name: 'password',
            title: 'Пароль',
            control: {
              type: 'password',
            },
          },
          {
            name: 'profile.fio',
            title: 'ФИО',
            control: {
              placeholder: 'Например, Василий',
            },
          },
          {
            name: 'profile.age',
            title: 'Стаж',
            format: Number,
            control: {
              placeholder: 'Например, 55',
              type: 'number',
            },
          },
          {
            name: 'profile.bdate',
            title: 'Дата рождения',
            format: Date,
            control: {
              placeholder: 'Например, 14.02.1991',
              type: 'date',
            },
          },
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
    .add('Add validators', () => (
      <Form
        validators={{
          email: {
            presence: {
              message: 'Поле не должно быть пустым',
            },
            email: {
              message: 'Введите настоящий адрес почты.',
            },
          },
          password: {
            presence: {
              message: 'Поле не должно быть пустым',
            },
            length: {
              minimum: 6,
              message: 'Пароль должен быть больше 6 символов.',
            },
          },
        }}
        fields={[
          {
            name: 'email',
            title: 'Электронная почта',
            icon: 'Э',
            control: {
              type: 'text',
              placeholder: 'Почта',
            },
          },
          {
            name: 'password',
            title: 'Пароль',
            icon: 'П',
            control: {
              type: 'password',
              placeholder: 'Пароль',
            },
          },
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
        onError={action('onError')}
      />
    ))
    .add('Add validators v2', () => (
      <Form
        fields={[
          {
            name: 'email',
            title: 'Электронная почта',
            icon: 'Э',
            validator: {
              presence: {
                message: 'Поле не должно быть пустым',
              },
              email: {
                message: 'Введите настоящий адрес почты.',
              },
            },
            control: {
              type: 'text',
              placeholder: 'Почта',
            },
          },
          {
            name: 'password',
            title: 'Пароль',
            icon: 'П',
            validator: {
              presence: {
                message: 'Поле не должно быть пустым',
              },
              length: {
                minimum: 6,
                message: 'Пароль должен быть больше 6 символов.',
              },
            },
            control: {
              type: 'password',
              placeholder: 'Пароль',
            },
          },
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
        onError={action('onError')}
      />
    ))
    .add('Control types', () => (
      <Form
        fields={[
          {
            name: 'input',
            value: 'input',
            control: {
              placeholder: 'placeholder',
            },
          },
          {
            name: 'inputPassword',
            value: 'inputPassword',
            control: {
              type: 'password',
              placeholder: 'placeholder',
            },
          },
          {
            name: 'textarea',
            value: 'defaultTextarea',
            control: {
              type: 'text',
              componentClass: 'textarea',
              placeholder: 'placeholder',
            },
          },
          {
            name: 'checkbox',
            value: 'defaultTextarea',
            control: {
              type: 'text',
              componentClass: 'textarea',
              placeholder: 'placeholder',
            },
          },

        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
        onError={action('onError')}
      />
    ))
    .add('Sample Signup', () => (
      <Form
        fields={[
          {
            name: 'email',
            title: 'Email',
            control: {
              placeholder: 'Например, utkin@mail.ru',
              type: 'email',
            },
          },
          {
            name: 'password',
            title: 'Пароль',
            control: {
              type: 'password',
            },
          },
          {
            name: 'name',
            title: 'Имя',
            control: {
              placeholder: 'Например, Василий',
            },
          },
        ]}
        submitButton="Регистрация"
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
    .add('Sample Login', () => (
      <Form
        fields={[
          {
            name: 'email',
            title: 'Email',
            control: {
              placeholder: 'Например, utkin@mail.ru',
              type: 'email',
            },
          },
          {
            name: 'password',
            title: 'Пароль',
            control: {
              type: 'password',
            },
            help: (
              <div style={{ textAlign: 'right' }}>
                <a href="#">
                  Забыли пароль?
                </a>
              </div>
            ),
          },
        ]}
        submitButton="Войти"
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
};
