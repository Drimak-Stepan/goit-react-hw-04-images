import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalCss } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { url } = this.props;
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalCss>
          {<img src={url} width="800" height="600" alt="bigImage" />}
        </ModalCss>
      </Overlay>
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
