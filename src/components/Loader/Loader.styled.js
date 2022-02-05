import styled, { keyframes } from 'styled-components';

function getVariant(variant, isBackground = false) {
    switch (variant) {
        case 'primary':
            return isBackground ? 'secondaryContainer' : 'secondary';
        case 'secondary':
            return isBackground ? 'tertiaryContainer' : 'tertiary';
        case 'danger':
            return isBackground ? 'errorContainer' : 'error';
    }
}

export const StyledLoaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: ${(p) => p.size}px;
    height: ${(p) => p.size}px;

    .message {
        margin-left: 0.5rem;
        color: ${({ theme }) => theme.palette.scheme.onBackground};
    }
`;

export const StyledLoader = styled.div`
    display: block;
    position: relative;
    font-size: 0;
    width: ${(p) => p.size}px;
    height: ${(p) => p.size}px;

    ::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: ${(p) => p.size / 6}px solid ${(p) => p.theme.palette.scheme[getVariant(p.variant, true)]};
        border-radius: ${(p) => p.size * 3}px;
    }
`;

const loadingAnimation = keyframes`
    0% {
        stroke-dashoffset: 60;
        transform: rotate(-90deg);
    }
    50% {
        stroke-dashoffset: 30;
        transform: rotate(0deg);
    }
    100% {
        stroke-dashoffset: 60;
        transform: rotate(270deg);
    }
`;

export const StyledLoaderIcon = styled.span`
    width: 100%;
    height: 100%;
    stroke-linecap: round;
    stroke: ${(p) => p.theme.palette.scheme[getVariant(p.variant)]};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-name: ${loadingAnimation};
    stroke-dasharray: 60;
    stroke-width: 4px;
    display: inline-block;
    fill: currentColor;
    transition: .2s stroke linear;

    svg {
        display: block;
    }
`;
