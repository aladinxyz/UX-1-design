import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'emotion';
import { Collapse as ReactCollapse, UnmountClosed } from 'react-collapse';
import cx from 'classnames';

injectGlobal(`
  .ReactCollapse--rest {
    overflow: visible !important;
    position: relative;
    z-index: 11;
  }
`);


class Collapse extends PureComponent {
  static propTypes = {
    show: PropTypes.bool,
    children: PropTypes.element.isRequired,
  }

  static defaultProps = {
    show: false,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.show !== state.show) {
      return {
        rest: false,
        show: props.show,
        prevShow: state.show,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      rest: false,
      prevShow: false,
      show: props.show,
    };
  }

  componentDidUpdate(prevProps) {
    const { rest, prevShow } = this.state;
    if (prevShow !== prevProps.show) {
      this.toggleRestFilterBar(rest, prevShow);
    }
  }

  toggleRestFilterBar(rest, prevShow = false) {
    clearTimeout(this.timeoutId);
    if (prevShow) {
      this.setState({ rest });
      return;
    }
    this.timeoutId = setTimeout(() => {
      this.setState({ rest });
    }, 1000);
  }

  render() {
    const { show, rest } = this.state;
    const { children, type } = this.props;
    let Wrapper;

    if (type === 'collapse') {
      Wrapper = ReactCollapse;
    } else if (type === 'collapseUnmount') {
      Wrapper = UnmountClosed;
    } else {
      const style = {};
      if (!show) style.display = 'none';
      return (
        <div style={style}>
          {children}
        </div>
      );
    }

    return (
      <Wrapper
        isOpened={show}
        forceInitialAnimation
        onRest={() => {
          if (show) {
            this.toggleRestFilterBar(true);
          }
        }}
        theme={{
          collapse: cx({
            'ReactCollapse--collapse': true,
            'ReactCollapse--rest': show && rest,
          }),
        }}
      >
        {children}
      </Wrapper>
    );
  }
}

export default Collapse;
