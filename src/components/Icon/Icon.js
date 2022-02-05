import React from 'react';
import PropTypes from 'prop-types';
import { iconListMapping } from '../../icons/icon-list';
import styled from 'styled-components';

const NAMES = [
    'assistance',
    'arrow-back',
    'arrow-forward',
    'birthday',
    'blocking',
    'calculator',
    'call',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'comparison',
    'critical',
    'cross-small',
    'cross',
    'devices',
    'document',
    'download',
    'duplicate',
    'edit',
    'external-link',
    'eye-hidden',
    'eye-visible',
    'face-id',
    'facebook',
    'fingerprint',
    'github',
    'hamburger',
    'home',
    'info-or-minor',
    'instagram',
    'link',
    'linkedin',
    'lock-small',
    'lock',
    'logout',
    'mail',
    'message',
    'notification-new',
    'notification',
    'overflow-menu',
    'payment',
    'person',
    'question',
    'search',
    'select-object',
    'shield',
    'stop',
    'stopwatch-alt',
    'stopwatch',
    'success',
    'tick-small',
    'tick',
    'time',
    'trash',
    'triangle-down',
    'triangle-up',
    'twitter',
    'warning-or-significant',
    'youtube',
];
const SIZES = ['24', '32'];

const StyledIcon = styled.div`
    stroke: currentColor;
    fill: currentColor;
    color: ${(p) => (p.color ? p.color : 'currentColor')};
`;

const Icon = ({ name = null, size = 24, color = null, hoverColor = null }) => {
    if (!NAMES.includes(name)) {
        return null;
    }

    return <StyledIcon size={size} color={color} hoverColor={hoverColor} as={iconListMapping[name]} />;
};

Icon.propTypes = {
    name: PropTypes.oneOf(NAMES).isRequired,
    size: PropTypes.oneOf(SIZES),
};

/* 
  Tools used to simplify the icons:
  - https://svgomg.firebaseapp.com/
  - https://transform.tools/svg-to-jsx
*/

export default Icon;