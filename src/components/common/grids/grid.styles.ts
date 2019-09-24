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
    display: grid;
    ${(props) => css`grid-template-columns: repeat(${props.size}, 1fr);`}

    @media ${devices.tablet} {
        ${(props) => css`grid-template-columns: repeat(${tablet[props.size]}, 1fr);`}
    }

    @media ${devices.mobileS} {
        ${(props) => css`grid-template-columns: repeat(${mobile[props.size]}, 1fr);`}
    }
`;
