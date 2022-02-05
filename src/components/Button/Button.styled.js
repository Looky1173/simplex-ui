import styled, { css, keyframes } from 'styled-components';
import { shade, alpha } from '../../utils/colorUtils';
import { StyledLoader, StyledLoaderIcon } from '../Loader/Loader.styled';

function getVariant(variant, isBackground = false, isSecondary = false) {
    switch (variant) {
        case 'primary':
            return isSecondary ? (isBackground ? 'secondaryContainer' : 'onSecondaryContainer') : isBackground ? 'primary' : 'onPrimary';
        case 'secondary':
            return isSecondary ? (isBackground ? 'tertiaryContainer' : 'onTertiaryContainer') : isBackground ? 'tertiary' : 'onTertiary';
        case 'danger':
            return isSecondary ? (isBackground ? 'errorContainer' : 'onErrorContainer') : isBackground ? 'error' : 'onError';
        default:
            break;
    }
}

const loaderAppear = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const StyledButton = styled.button`
    border-radius: 2.8rem;
    height: 2.8rem;
    font-family: ${({ theme }) => theme.typography.button.fontFamily};
    font-weight: ${({ theme }) => theme.typography.button.fontWeight};
    font-size: ${({ theme }) => theme.typography.button.fontSize};
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    box-sizing: border-box;
    border: 2px transparent;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.2s linear;

    &.small {
        height: 2.2rem;
    }

    &.large {
        height: 3.5rem;
        font-size: ${({ theme }) => theme.typography.pxToRem(theme.typography.button.originalFontSize + 5)};
    }

    .content {
        opacity: 1;
        transition: 0.2s opacity linear;
    }

    ${StyledLoader} {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        ::before {
            border-color: transparent;
        }
    }

    ${StyledLoaderIcon} {
        stroke: ${(p) => p.theme.palette.scheme[getVariant(p.variant)]};
    }

    &.tonal ${StyledLoaderIcon} {
        stroke: ${(p) => p.theme.palette.scheme[getVariant(p.variant, false, true)]};
    }

    &.outlined ${StyledLoaderIcon}, &.text ${StyledLoaderIcon} {
        stroke: ${(p) => p.theme.palette.scheme[getVariant(p.variant, true)]};
    }

    &.filled {
        color: ${(p) => p.theme.palette.scheme[getVariant(p.variant)]};
        background-color: ${(p) => p.theme.palette.scheme[getVariant(p.variant, true)]};
    }

    &.tonal {
        color: ${(p) => p.theme.palette.scheme[getVariant(p.variant, false, true)]};
        background-color: ${(p) => p.theme.palette.scheme[getVariant(p.variant, true, true)]};
    }

    &.outlined {
        color: ${(p) => p.theme.palette.scheme[getVariant(p.variant, true)]};
        background-color: transparent;
        border: 2px solid ${(p) => p.theme.palette.scheme.outline};
    }

    &.text {
        color: ${(p) => p.theme.palette.scheme[getVariant(p.variant, true)]};
        background-color: transparent;
    }

    :hover {
        color: ${({ theme, variant }) => theme.palette.scheme[getVariant(variant)]};
        background-color: ${({ theme, variant }) => shade(theme.palette.scheme[getVariant(variant, true)], 2)};
    }

    :hover ${StyledLoaderIcon} {
        stroke: ${({ theme, variant }) => theme.palette.scheme[getVariant(variant)]};
    }

    &.outlined:hover:enabled,
    &.text:hover:enabled {
        color: ${(p) => p.theme.palette.scheme[getVariant(p.variant, false, true)]};
        background-color: ${(p) => p.theme.palette.scheme[getVariant(p.variant, true, true)]};
    }

    &.outlined:hover:enabled ${StyledLoaderIcon}, &.text:hover:enabled ${StyledLoaderIcon} {
        stroke: ${(p) => p.theme.palette.scheme[getVariant(p.variant, false, true)]};
    }

    :focus {
        z-index: 2;
        outline: none;
        box-shadow: 0 0 0 4px ${({ theme, variant }) => alpha(theme.palette.scheme[getVariant(variant, true)], 0.4)};
    }

    :disabled {
        color: ${(p) => alpha(p.theme.palette.scheme.onSurface, 0.38)};
        background-color: ${(p) => alpha(p.theme.palette.scheme.onSurface, 0.12)};
    }

    :disabled ${StyledLoaderIcon} {
        stroke: ${(p) => alpha(p.theme.palette.scheme.onSurface, 0.38)};
    }

    &.outlined:disabled {
        background-color: transparent;
        border-color: ${(p) => alpha(p.theme.palette.scheme.onSurface, 0.12)};
    }

    &.text:disabled {
        background-color: transparent;
    }

    ${(p) =>
        p.loading &&
        css`
            .content {
                opacity: 0;
            }
            ${StyledLoader} {
                opacity: 1;
                visibility: visible;
                animation: 0.5s ${loaderAppear} ease-in;
            }
        `}
`;
