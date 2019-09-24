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

export const Root = styled.div<{ template: number[], max: number }>`
    display: grid;
    grid-column-gap: 24px;
    ${(props) => css`grid-template-columns: ${props.template.map((size) => `${size}fr `)}`}

    @media ${devices.tablet} {
        ${(props) => css`grid-template-columns: repeat(${tablet[props.max]}, 1fr);`}
    }

    @media ${devices.mobileS} {
        ${(props) => css`grid-template-columns: repeat(${mobile[props.max]}, 1fr);`}
    }
`;
