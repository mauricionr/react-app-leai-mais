import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/HelloWorld/HelloWorld';

ReactDOM.render(
    <Hello description='Hello World from web-library-build' />,
    document.getElementById('example')
);