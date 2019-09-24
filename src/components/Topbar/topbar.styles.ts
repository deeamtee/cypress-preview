import styled from 'styled-components';
import { devices } from '../../constants/devices';

export const Root = styled.div`
    /* height: 40px; */
    width:100%;
    box-shadow: 0 4px 2px -2px gray;
`;
export const Logo = styled.div`
    padding: 10px;

    @media ${devices.mobileS}{
        display: none;
    }
`;
export const LogoCollapsed = styled.div`
    display: none;

    @media ${devices.mobileS}{
        padding: 10px;
        display: block;
    }
`;
