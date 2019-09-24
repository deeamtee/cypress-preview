import * as React from 'react';
import Form from './components/Form/form';
import Topbar from './components/Topbar';

const App: React.SFC<{}> = (): JSX.Element | null => {
    return (
        <div>
            <Topbar />
            <Form />
        </div>
    );
};

export default App;
