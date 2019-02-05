import React, { PureComponent } from 'react';
import If from 'react-if';
import PropTypes from 'prop-types';
import cx from 'classnames';
import pick from 'lodash/pick';
import omit from 'lodash/omit';
import ReactModal from 'react-modal';
import autobind from 'core-decorators/lib/autobind';

import ModalSubtitle from '../UI/atoms/ModalSubtitle';
import ModalDescription from '../UI/atoms/ModalDescription';
import ModalContent from '../UI/atoms/ModalContent';
import ModalFooter from '../UI/atoms/ModalFooter';
import ModalImage from '../UI/atoms/ModalImage';
import ModalHelp from '../UI/atoms/ModalHelp';
import ModalScroll from '../UI/organisms/ModalScroll';
import ModalTitle from '../UI/molecules/ModalTitle';
import ModalTrigger from './ModalTrigger';
import ModalInner from './ModalInner';
import ModalInnerWrapper from './ModalInnerWrapper';
import ModalCloseIcon from './ModalCloseIcon';

import { Provider } from './Modal2.context';

const reactModalProps = ['isOpen', 'onAfterOpen', 'onRequestClose', 'closeTimeoutMS', 'style', 'contentLabel', 'portalClassName', 'overlayClassName', 'className', 'bodyOpenClassName', 'htmlOpenClassName', 'ariaHideApp', 'shouldFocusAfterRender', 'shouldCloseOnOverlayClick', 'shouldCloseOnEsc', 'shouldReturnFocusAfterClose', 'role', 'parentSelector', 'aria', 'data', 'overlayRef', 'contentRef'];

ReactModal.defaultStyles.overlay.backgroundColor = 'cornsilk';
if (typeof (window) !== 'undefined') {
  ReactModal.setAppElement('body');
}

class Modal2 extends PureComponent {
  static Title = ModalTitle;
  static Subtitle = ModalSubtitle;
  static Image = ModalImage;
  static Content = ModalContent;
  static Description = ModalDescription;
  static Help = ModalHelp;
  static Scroll = ModalScroll;
  static Footer = ModalFooter;
  static Trigger = ModalTrigger;
  static InnerWrapper = ModalInnerWrapper;
  static CloseIcon = ModalCloseIcon;
  static Inner = ModalInner;

  constructor(props) {
    super(props);
    this.state = { visible: props.defaultVisible };
  }

  @autobind
  toggle() {
    if (this.state.visible) {
      this.close();
    } else {
      this.open();
    }
  }

  @autobind
  open() {
    this.setState({ visible: true });
    if (this.props.onOpen) this.props.onOpen();
  }
  @autobind
  close() {
    this.setState({ visible: false });
    if (this.props.onClose) this.props.onClose();
  }

  render() {
    const Modal = {
      Title: this.constructor.Title || this.props.Title,
      Subtitle: this.constructor.Subtitle || this.props.Subtitle,
      Image: this.constructor.Image || this.props.Image,
      Content: this.constructor.Content || this.props.Content,
      Description: this.constructor.Description || this.props.Description,
      Help: this.constructor.Help || this.props.Help,
      Scroll: this.constructor.Scroll || this.props.Scroll,
      Footer: this.constructor.Footer || this.props.Footer,
      Trigger: this.constructor.Trigger || this.props.Trigger,
      Inner: this.constructor.Inner || this.props.Inner,
      InnerWrapper: this.constructor.InnerWrapper || this.props.InnerWrapper,
      CloseIcon: this.constructor.CloseIcon || this.props.CloseIcon,
    };
    const {
      className, size, closable, trigger, ...props
    } = this.props;
    const modal = this;

    return (
      <Provider value={{ modal, Modal }}>
        <React.Fragment>
          <ReactModal
            isOpen={this.state.visible}
            onRequestClose={this.close}
            className={cx({
              [className]: className,
              'modal-container': true,
              [`modal-container-${size}`]: size,
            })}
            style={{ overlay: { zIndex: 10 } }}
            {...pick(props, reactModalProps)}
          >
            <If condition={closable}>
              <Modal.Trigger type="close">
                <Modal.CloseIcon />
              </Modal.Trigger>
            </If>
            <Modal.InnerWrapper>
              <Modal.Inner
                {...omit(props, reactModalProps)}
              />
            </Modal.InnerWrapper>
          </ReactModal>
          <If condition={trigger}>
            <Modal.Trigger type="open">{trigger}</Modal.Trigger>
          </If>
        </React.Fragment>
      </Provider>
    );
  }
}


export default Modal2;
