import React from 'react';
import { Root } from './grid.styles';

const Grid: React.SFC<{ size: string }> = ({ size, children }): JSX.Element => {
    return (
        <Root size={size}>
            {children}
        </Root>
    );
};

export default Grid;
