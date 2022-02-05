import PropTypes from 'prop-types';
import { StyledLoaderContainer, StyledLoader, StyledLoaderIcon } from './Loader.styled.js';
import ConditionalWrapper from '#components/ConditionalWrapper';

/**
 * Primary UI component for user interaction
 */
const Loader = ({ variant = 'primary', size = 24, children }) => {
    return (
        <ConditionalWrapper condition={children} wrapper={(children) => <StyledLoaderContainer>{children}</StyledLoaderContainer>}>
            <>
                <StyledLoader variant={variant} size={size}>
                    <StyledLoaderIcon variant={variant}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <circle fill="transparent" cx="12" cy="12" r="10"></circle>
                        </svg>
                    </StyledLoaderIcon>
                </StyledLoader>
            </>
            {children && <div className="message">{children}</div>}
        </ConditionalWrapper>
    );
};

Loader.propTypes = {
    /**
     * Variant of the loader
     */
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    /**
     * How large should the loader be?
     */
    size: PropTypes.number,
};

Loader.defaultProps = {
    variant: 'primary',
    size: 24,
};

export default Loader;
