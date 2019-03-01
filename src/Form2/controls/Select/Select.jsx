import React, { Component } from 'react';
import find from 'lodash/find';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import autobind from 'core-decorators/lib/autobind';
import ReactSelect from 'react-select';
import ReactAsyncSelect from 'react-select/lib/Async';
import cx from 'classnames';
import Up from 'react-icons2/mdi/chevron-up';
import Down from 'react-icons2/mdi/chevron-down';
import { getOptionValue, getReverseOptionValue, getNormalizedOptions } from './utils';

import SingleValue from './SingleValue';
import Option from './Option';
import CollapsedValueContainer from './CollapsedValueContainer';
import CollapsedMultiValue from './CollapsedMultiValue';

class Select extends Component {
  state = {};
  componentDidMount() {
    const { loadOption, value, async } = this.props;
    if (async && value && loadOption) {
      this.initOption();
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { state, props } = this;
    const prevValue = get(props, 'field.value');
    const nextValue = get(nextProps, 'field.value');
    const hasError = nextProps.field && nextProps.field.name && !!get(nextProps.form, `errors.${nextProps.field.name}`);
    const hadError = this.props.field && this.props.field.name && !!get(this.props.form, `errors.${this.props.field.name}`);
    if (!isEqual(hadError, hasError)) {
      return true;
    }
    // console.log(nextProps);
    if (!isEqual(nextValue, prevValue)) {
      return true;
    } else if (!isEqual(state.option, nextState.option)) {
      return true;
    }
    return false;
  }
  async initOption() {
    const { loadOption, value } = this.props;
    const option = await loadOption(value);
    this.setState({ option, initOption: true }); // eslint-disable-line react/no-unused-state
  }
  @autobind
  async loadOptions(...args) {
    try {
      // console.log('loadOptions');
      const { loadOptions, ...props } = this.props;
      const options = await loadOptions(...args);
      // console.log({ options });
      return getNormalizedOptions(options, props);
    } catch (err) {
      if (__DEV__) console.error('Form2/Select loadOptions error', err); // eslint-disable-line no-console
      return [];
    }
  }
  @autobind
  handleChange(option) {
    const { form, field, onChange } = this.props;
    this.setState({ option, initOption: false }); // eslint-disable-line react/no-unused-state
    let value;
    if (option && option.length) {
      value = option.map(item => getReverseOptionValue(item && item.value));
    } else {
      value = getReverseOptionValue(option && option.value);
    }
    if (form && field) {
      form.setFieldValue(field.name, value);
    }
    if (onChange) onChange(value);
  }
  render() {
    const {
      blurInputOnSelect = true,
      placeholder = '',
      value: propValue,
      field,
      form,
      async,
      options,
      collapsed,
      className,
      components = {},
      styles = {},
      isMulti,
      ...props
    } = this.props;
    const normalizedOptions = getNormalizedOptions(options, props);
    const value = getOptionValue(field ? field.value : propValue);
    let option;
    if (async) {
      ({ option } = this.state);
    } else if (!isMulti) {
      option = find(normalizedOptions, { value });
    } else if (isMulti) {
      if (Array.isArray(this.state.option)) {
        const values = this.state.option.map((el) => {
          return el.value;
        });
        option = normalizedOptions.filter((el) => {
          return values.includes(el.value);
        });
      } else {
        option = [];
      }
    }
    const SelectComponent = async ? ReactAsyncSelect : ReactSelect;
    const hasError = field && field.name && !!get(form, `errors.${field.name}`);
    const collapsedComponents = {
      ValueContainer: CollapsedValueContainer,
      MultiValue: CollapsedMultiValue,
    };
    const nullOption = find(normalizedOptions, o => o.value == null);
    const defaultIsClearable = !props.required && !nullOption;
    // console.log({ defaultIsClearable }, !props.required, !nullOption, nullOption);
    return (
      <SelectComponent
        blurInputOnSelect={blurInputOnSelect}
        // isClearable={defaultIsClearable}
        isClearable={defaultIsClearable}
        arrowRenderer={e => (e.isOpen ? <Up /> : <Down />)}
        error={hasError}
        classNamePrefix="react-select"
        cacheOptions={async}
        defaultOptions={async}
        closeMenuOnSelect={!isMulti}
        placeholder={placeholder}
        isMulti={isMulti}
        {...field}
        {...props}
        components={{
          SingleValue,
          Option,
          ...(collapsed ? collapsedComponents : {}),
          ...components,
        }}
        styles={{
          singleValue: base => ({
            ...base,
            position: 'relative',
            top: 'inherit',
            transform: 'inherit',
            flexWrap: 'nowrap',
          }),
          valueContainer: base => ({
            ...base,
            flexWrap: 'nowrap',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }),
          ...styles,
        }}
        className={cx({
          'lsk-form-select': true,
          [className]: !!className,
          'has-error': hasError,
        })}
        value={option || null}
        loadOptions={this.loadOptions}
        onChange={this.handleChange}
        options={async ? null : normalizedOptions}
      />
    );
  }
}

export default Select;
