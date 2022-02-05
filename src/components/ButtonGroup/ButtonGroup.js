import PropTypes from 'prop-types';
import { StyledButtonGroup } from './ButtonGroup.styled.js';

/**
 * Primary UI component for user interaction
 */
const ButtonGroup = ({ size = 'medium', children }) => {
    return <StyledButtonGroup className={[size].join(' ')}>{children}</StyledButtonGroup>;
};

ButtonGroup.propTypes = {
    /**
     * How large should the buttons in the group be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

ButtonGroup.defaultProps = {
    size: 'medium',
};

export default ButtonGroup;