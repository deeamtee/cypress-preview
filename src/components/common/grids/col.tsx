import React from 'react';
import { Root } from './col.styles';

const Col: React.SFC<{ size?: string | number }> = ({ size, children }): JSX.Element => {
    return (
        <Root size={size}>
            {children}
        </Root>
    );
};

Col.defaultProps = {
    size: '1',
};

export default Col;
