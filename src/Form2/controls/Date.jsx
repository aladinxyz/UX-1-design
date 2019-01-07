import React from 'react';
import get from 'lodash/get';
import moment from 'moment';
import 'moment/locale/ru';
import DatePickerBase from '../../UI/molecules/Datepicker';

const DatePicker = (data) => {
  const {
    field,
    form,
    ranged,
    t,
    ...props
  } = data;

  const dateFormat = t && t('format.date') || 'DD.MM.YYYY';
  const locale = t && t('locale') || 'ru';
  let value = get(form.values, field.name) && moment(new Date(get(form.values, field.name)), dateFormat, locale) || null; // eslint-disable-line
  let change = (val) => {
    form.setFieldValue(field.name, val);
  };

  if (ranged) {
    value = [
      get(form.values, field.name)?.[0] && moment(new Date(get(form.values, field.name)[0])) || null,
      get(form.values, field.name)?.[1] && moment(new Date(get(form.values, field.name)[1])) || null,
    ];
    change = async (range) => {
      form.setFieldValue(field.name, range);
      // field.onChange(
      //   {
      //     target: {
      //       name: field.name,
      //       value: range[0],
      //     },
      //   },
      //   // range[0].toDate(),
      //   // range[1].toDate(),
      // );
    };
  }
  let disabledDate = () => false;
  if (field.futureOnly) {
    disabledDate = (current) => {
      // Can not select days before today and today
      return current && current.valueOf() < (Date.now() - (24 * 60 * 60 * 1000));
    };
  }
  return (
    <DatePickerBase
      {...field}
      {...props}
      ranged={ranged}
      validationState={form.errors[field.name] ? 'error' : null}
      onChange={change}
        // await this.handleChangeField(name1)(range[0].toDate());
        // await this.handleChangeField(name2)(range[1].toDate());
      value={value}
      format={dateFormat}
      disabledDate={disabledDate}
    />
  );
};

export default DatePicker;

