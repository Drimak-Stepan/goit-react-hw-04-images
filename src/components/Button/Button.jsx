import PropTypes from 'prop-types';
import { ButtonCss } from './Button.styled';

const Button = ({ children, onClick }) => {
  return (
    <ButtonCss type="button" onClick={onClick}>
      {children}
    </ButtonCss>
  );
};

export default Button;
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
