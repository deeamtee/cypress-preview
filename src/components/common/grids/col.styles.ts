import styled, { css } from 'styled-components';
import { devices } from '../../../constants/devices';

const tablet = {
    4: 2,
    3: 2,
    2: 1,
    1: 1,
};

const mobile = {
    4: 1,
    3: 1,
    2: 1,
    1: 1,
};

export const Root = styled.div<{ size: string }>`
    margin: 0 12px;
    ${(props) => css`grid-column: span ${props.size};`}

    @media ${devices.tablet} {
        ${(props) => css`grid-column: span ${tablet[props.size]};`}
    }

    @media ${devices.mobileS} {
        ${(props) => css`grid-column: span ${mobile[props.size]};`}
    }
`;
