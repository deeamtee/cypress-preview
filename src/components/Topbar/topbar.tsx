import React from 'react';
import { Root, Logo, LogoCollapsed } from './topbar.styles';
import { Logotype } from '@fcc/rbo-ui/dist/Logotype';

const Topbar = () => {
    return (
        <>
            <Root >
                <Logo>
                    <Logotype />
                </Logo>
                <LogoCollapsed>
                    <Logotype collapsed />
                </LogoCollapsed>
            </Root>
        </>
    );
};

export default Topbar;
