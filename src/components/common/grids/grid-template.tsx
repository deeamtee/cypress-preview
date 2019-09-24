import React from 'react';
import { Root } from './grid-template.styles';

const GridTemplate: React.SFC<{ template: number[] }> = ({ template, children }): JSX.Element => {
    const max = Math.max.apply(null, template);

    return (
        <Root template={template} max={max}>
            {children}
        </Root>
    );
};

export default GridTemplate;
